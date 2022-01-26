import * as Joi from 'joi';


export const addProductSchema: Joi.ObjectSchema = Joi.object({
    qty:  Joi.number().required(),
    price:  Joi.number().required()
});



export const getProductByIdSchema: Joi.ObjectSchema = Joi.object({
	prodId: Joi.string().required(),
});