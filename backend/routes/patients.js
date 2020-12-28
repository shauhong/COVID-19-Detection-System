const router = require('express').Router();
const verifyToken = require('./verifyToken');
const Patient = require('../models/patient.model');
const User = require('../models/User');

router.get('/', verifyToken, async (req,res)=>{
  const userId = req.user;
  try{  
    const user = await User.findById(userId);
    const patients = await Patient.find().populate('user');
    const matchPatients = patients.map((patient)=>{
      if(patient.user.facilityName === user.facilityName){
        return patient;
      }
    });
    res.json(matchPatients);
  }catch(error){
    res.status(400).json({message:"Error While Finding Patient"});
  }
});

router.post('/add', verifyToken, async(req,res)=>{

  const userId = req.user; //logged-in eh staff
  const name = req.body.name;
  const ic = req.body.ic;
  const age = req.body.age;
  const gender = req.body.gender;
  const phone = req.body.phone;
  const address = req.body.address;
  const postal = req.body.postal;
  const negeri = req.body.negeri;
  const city = req.body.city;
  const result = req.body.result;
  const image = req.body.image;

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
      result,
      image,
      user: user._id,
    });
    const saved = await newPatient.save();
    res.json({message:'Successfully Added Patient', saved});
  }catch(error){
    res.status(400).json({message:"Add Patient Error"});
  }
});

router.post('/update/:id', verifyToken, async(req,res)=>{

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
  const result = req.body.result;
  const image = req.body.image;

  try{
    const patient = await Patient.findById(patientId);

    patient.name = req.body.name;
    patient.ic = req.body.ic;
    patient.age = req.body.age;
    patient.gender = req.body.gender;
    patient.phone = req.body.phone;
    patient.address = req.body.address;
    patient.postal = req.body.postal;
    patient.negeri = req.body.negeri;
    patient.city = req.body.city;
    patient.result = req.body.result;
    patient.image = req.body.image;

    const saved = await patient.save();
    res.json({message:"Patient Updated", success:true, saved});
  }catch(error){
    res.status(400).json({message:error});
  }
});


router.route('/:id').get((req, res) => {
  Patient.findById(req.params.id)
    .then(patient => res.json(patient))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Patient.findByIdAndDelete(req.params.id)
    .then(() => res.json('Patient deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id', verifyToken, async(req, res)=>{
  const patientId = req.params.id;
  try{
    const patient = await Patient.findById(patientId);
    if(!patient) return res.status(400).json({message:"Patient Not Found"});
    const removed = await Patient.deleteOne({_id:patientId});
    res.status(200).json({message:"Patient Removed", success:true, removed});
  }catch(error){
    res.status(400).json({message:error});
  }
});


module.exports = router;