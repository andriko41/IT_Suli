import Joi from 'joi'

export const addRule = Joi.object({
  cikkcim: Joi.string().required().min(3).max(20),
  szoveg: Joi.string().required().min(5).max(100),
  szerzoID: Joi.number().required(),
  kategoriaID: Joi.number().required()
})

export const modifyRule = Joi.object({
  cikkcim: Joi.string().required().min(3),
  szoveg: Joi.string().required().min(5).max(100)
})
