const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    password:{
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
    name:{
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    phone:{
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    facilityName:{
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    facilityAddress:{
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    postal:{
        type: Number,
        required: true,
    },
    state:{
        type: String,
        required: true,
        enum: ['Wilayah Persekutuan','Selangor','Johor','Kedah','Kelantan','Melaka',
        'Negeri Sembilan','Pahang','Penang','Perak','Perlis','Sabah','Sarawak','Terengganu'],
    },
    city:{
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;