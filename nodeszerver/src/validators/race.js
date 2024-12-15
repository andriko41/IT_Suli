import Joi from 'joi'

export const addRule = Joi.object({
  race: Joi.string().required().min(3).max(20),
  description: Joi.string().required().min(5).max(100)
})
