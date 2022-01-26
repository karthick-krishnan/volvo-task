import Joi from 'joi';
import {BadRequest} from '../../utils/error-handler'

export const inputValidation = (data:any, schema: Joi.ObjectSchema) => {

    const { error, value } =  schema.validate(data,{ abortEarly: false, allowUnknown: true });
  
    if(error){    
        console.error('Error in input validation',error);
        throw BadRequest(`${error}`);
    } else{
        return value;
    }

}