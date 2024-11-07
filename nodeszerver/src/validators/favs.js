import Joi from 'joi'

export const addRule = Joi.object({
  felhasznaloID: Joi.number().required(),
  cikkID: Joi.number().required()
})
