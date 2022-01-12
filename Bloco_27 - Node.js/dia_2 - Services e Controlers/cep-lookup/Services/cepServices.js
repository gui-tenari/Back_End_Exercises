const cepModels = require('../Models/cepModels');

const getCep = async (cep) => {
  const address = await cepModels.getCep(cep);
  return address;
};

const create = async (cep, logradouro, bairro, localidade, uf) => {
  const existingCep = await cepModels.getCep(cep);
  console.log(existingCep.cep);
  if (existingCep.cep) {
    return {
      error: { code: 'alreadyExists', message: 'CEP já existente' },
    };
  }
  const newAddress = await cepModels.create(cep, logradouro, bairro, localidade, uf);
  return newAddress;
};

module.exports = {
  getCep,
  create,
};
