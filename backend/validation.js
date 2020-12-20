const Joi = require('@hapi/joi');

const registerValidation = (data)=>{
    const schema = Joi.object({
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required(),
        name: Joi.string().min(6).max(255).required(),
        phone: Joi.string().min(6).max(255).required(),
        facilityName: Joi.string().min(6).max(255).required(),
        facilityAddress: Joi.string().min(6).max(255).required(),
        postal: Joi.number().integer().min(10000).max(20000).required(),
        state: Joi.string().required(),
        city: Joi.string().required(),
    });
    
    return schema.validate(data);
}

const loginValidation = (data)=>{
    const schema = Joi.object({
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required(),
    });
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;