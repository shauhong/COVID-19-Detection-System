const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const multer = require('multer');
//Configure Multer
const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null, './assets/images');
  },
  filename: (req,file,cb)=>{
    cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
  }
});
const fileFilter = (req,file,cb)=>{
  if(file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png"){
    cb(null, true);
  }else{
    cb(null, false)
  }
};
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
})
//Import Model
const Patient = require('../models/patient.model');
const User = require('../models/User');
//Import Utility Function
const verifyToken = require('./verifyToken');

router.get('/', verifyToken, async (req,res)=>{
  const userId = req.user;
  try{  
    const user = await User.findById(userId);
    const patients = await Patient.find().populate('user');
    const matchPatients = patients.filter((patient)=>{
      return(patient.user.facilityName === user.facilityName)
    });
    res.json({matchPatients, user});

  }catch(error){
    res.status(400).json({message:"Error While Finding Patient"});
  }
});

router.post('/add', verifyToken, upload.single('image'), async(req,res)=>{
  //Check Image
  if(!req.file){
    return res.status(400).json({message:"No Image is Uploaded"});
  }
  const userId = req.user; 
  const name = req.body.name;
  const ic = req.body.ic;
  const age = req.body.age;
  const gender = req.body.gender;
  const phone = req.body.phone;
  const address = req.body.address;
  const postal = req.body.postal;
  const negeri = req.body.negeri;
  const city = req.body.city;
  const image = req.file.path;

  try{
    const user = await User.findById(userId);
    const newPatient = new Patient({
      name,
      ic,
      age,
      gender,
      phone,
      address,
      postal,
      negeri,
      city,
      image,
      user: user._id,
    });
    const saved = await newPatient.save();
    res.json({message:'Successfully Added Patient', saved});
  }catch(error){
    res.status(400).json({message:"Add Patient Error"});
  }
});

router.post('/updateStatus/:id', verifyToken, async(req,res)=>{
  const patientId = req.params.id;
  try{
    const patient = await Patient.findById(patientId);
    patient.result = req.body.result;
    patient.score = Number(req.body.score);
    console.log("Backend result: "+ req.body.result);
    console.log("Backend score: "+ req.body.score);
    const saved = await patient.save();
    res.json({message:"Successfully Updated Status", saved});
  }catch(error){
    res.status(400).json({message:"Update Status Error"});
  }
})

router.post('/update/:id', verifyToken, upload.single('image'), async(req,res)=>{
  const patientId = req.params.id; 
  const name = req.body.name;
  const ic = req.body.ic;
  const age = req.body.age;
  const gender = req.body.gender;
  const phone = req.body.phone;
  const address = req.body.address;
  const postal = req.body.postal;
  const negeri = req.body.negeri;
  const city = req.body.city;
  let image = req.body.image;

  if(req.file){
    image = req.file.path;
  }
  
  try{
    const patient = await Patient.findById(patientId);
    patient.name = name;
    patient.ic = ic;
    patient.age = age;
    patient.gender = gender;
    patient.phone = phone;
    patient.address = address;
    patient.postal = postal;
    patient.negeri = negeri;
    patient.city = city;
    patient.image = image;
    const saved = await patient.save();
    res.json({message:"Patient Updated", success:true, saved});
  }catch(error){
    res.status(400).json({message:"Edit Patient Error"});
  }
});

router.get('/:id', verifyToken, async(req,res)=>{
  const patientId = req.params.id;
  try{
    const patient = await Patient.findById(patientId);
    res.json(patient);
  }catch(error){
    res.status(400).json("Get Patient Error");
  }
});

router.delete('/:id', verifyToken, async(req, res)=>{
  const patientId = req.params.id;
  try{
    const patient = await Patient.findById(patientId);
    if(!patient) return res.status(400).json({message:"Patient Not Found"});
    removeImage(patient.image);
    const removed = await Patient.deleteOne({_id:patientId});
    res.status(200).json({message:"Patient Removed", success:true, removed});
  }catch(error){
    res.status(400).json({message:"Delete Patient Error"});
  }
});

const removeImage = (filepath) => {
  fs.unlink(filepath,(error)=>{
    console.log(error);
  });
}

module.exports = router;