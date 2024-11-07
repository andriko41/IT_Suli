import Joi from 'joi'

export const addRule = Joi.object({
  email: Joi.string().required().min(6).max(40),
  loginjelszo: Joi.string().required().min(3).max(15)
})
