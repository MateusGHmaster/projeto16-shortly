import Joi from 'joi';

const loginSchema = Joi.object({

    name: Joi.string().required(),
    password: Joi.string().required()

});

export default loginSchema;