import Joi from 'joi'

export const addRule = Joi.object({
  szoveg: Joi.string().required().min(5).max(100),
  felhasznaloID: Joi.number().required(),
  cikkID: Joi.number().required()
})

export const modifyRule = Joi.object({
  szoveg: Joi.string().required().min(5).max(100)
})
