import Joi from 'joi'

export const addRule = Joi.object({
  name: Joi.string().required().min(2).max(80),
  description: Joi.string().required().min(2).max(255),
  population: Joi.number().required()
})
