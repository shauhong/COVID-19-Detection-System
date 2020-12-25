const router = require('express').Router();
let Patient = require('../models/patient.model');

router.route('/').get((req, res) => {
  Patient.find()
    .then(patients => res.json(patients))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
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
  });

  newPatient.save()
  .then(() => res.json('Patient added!'))
  .catch(err => res.status(400).json('Error: ' + err));
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