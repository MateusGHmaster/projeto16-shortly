import Joi from 'joi';

export default urlSchema = Joi.object({

    url: Joi.string().uri().required()

});