import * as Joi from 'joi';


export const addOrderSchema: Joi.ObjectSchema = Joi.object({
    products:  Joi.array().min(1).required(),
    deliveryDate:  Joi.string().required(),
    customerId: Joi.string().required().min(36)
});



export const getOrderByIdSchema: Joi.ObjectSchema = Joi.object({
	orderId: Joi.string().required().min(36),
});