// eslint-disable-next-line no-unused-vars
const cepServices = require('../Services/cepServices');

const getCep = async (req, res, next) => {
  const { cep } = req.params;
  const address = await cepServices.getCep(cep);
  console.log(address);
};

const create = async (req, res, next) => {
  const {
    cep, logradouro, bairro, localidade, uf,
  } = req.body;
  const newAddress = await cepServices.create(cep, logradouro, bairro, localidade, uf);
  if (newAddress.error) return next(newAddress);
  return res.status(200).json(newAddress);
};

module.exports = {
  getCep,
  create,
};
