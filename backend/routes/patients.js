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
  const userId = req.user;
  const name = req.body.name;
  const ic = req.body.ic;
  const age = Number(req.body.age);
  const gender = req.body.gender;
  const phone = req.body.phone;
  const address = req.body.address;
  const postal = Number(req.body.postal);
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

router.route('/update/:id').post((req, res) => {
  Patient.findById(req.params.id)
    .then(patient => {
      patient.name = req.body.name;
      patient.ic = req.body.ic;
      patient.age = Number(req.body.age);
      patient.gender = req.body.gender;
      patient.phone = req.body.phone;
      patient.address = req.body.address;
      patient.postal = Number(req.body.postal);
      patient.negeri = req.body.negeri;
      patient.city = req.body.city;
      patient.result = req.body.result;
      patient.image = req.body.image;

      patient.save()
        .then(() => res.json('Patient updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;