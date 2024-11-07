import Joi from 'joi'

export const addRule = Joi.object({
  nev: Joi.string().required().min(3).max(15),
  jelszo: Joi.string().required().min(3).max(15),
  email: Joi.string().required().min(8).max(30),
  jelszoMegerosit: Joi.string().required().min(3).max(15)
})

export const modifyRule = Joi.object({
  nev: Joi.string().required().min(3).max(15),
  email: Joi.string().required().min(8).max(30)
})
