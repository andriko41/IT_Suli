import Joi from 'joi'

export const addRule = Joi.object({
  name: Joi.string().required().min(3).max(20),
  description: Joi.string().required().min(10).max(200),
  cityID: Joi.number().required()
})
