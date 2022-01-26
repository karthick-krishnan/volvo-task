import Joi from 'joi';
import Logger from '../../utils/logger'
import {BadRequest} from '../../utils/error-handler'

export const inputValidation = (data:any, schema: Joi.ObjectSchema) => {

    const { error, value } =  schema.validate(data,{ abortEarly: false, allowUnknown: true });
  
    if(error){    
        Logger.error('Error in input validation',error);
        throw BadRequest('Missing Input Params');
    } else{
        return value;
    }

}