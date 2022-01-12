const Joi = require('joi');

const schema = Joi.object({
  cep: Joi.string().not().empty().required(),
  logradouro: Joi.string().not().empty().required(),
  bairro: Joi.string().not().empty().required(),
  localidade: Joi.string().not().empty().required(),
  uf: Joi.string().not().empty().required(),
});

module.exports = schema;
