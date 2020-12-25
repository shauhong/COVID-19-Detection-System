const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: { type: String, required: true },
  ic: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  postal: { type: Number, required: true },
  negeri: { type: String, required: true },
  city: { type: String, required: true },
  result: { type: String, required: true },
  image: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
}, {
  timestamps: true,
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;