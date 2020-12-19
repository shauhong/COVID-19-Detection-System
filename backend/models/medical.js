const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicalSchema = new Schema({

},{
    timeStamps: true,
});

const Medical = mongoose.model('Medical', medicalSchema);
module.exports = Medical;

