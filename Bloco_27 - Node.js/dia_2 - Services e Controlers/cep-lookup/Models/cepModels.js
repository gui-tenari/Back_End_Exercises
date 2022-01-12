const connection = require('./connection');

const CEP_REGEX = /\d{5}-\d{3}/;

const formatCep = (cep) => {
  // Caso o CEP já esteja formatado, retorna o próprio CEP
  if (CEP_REGEX.test(cep)) return cep;

  // Caso não esteja formatado, utiliza regex para adicionar a formatação
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

const getNewCep = ({
  cep, logradouro, bairro, localidade, uf,
}) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf,
});

const getCep = async (cep) => {
  const treatedCep = cep.replace('-', '');
  const query = 'SELECT cep, logradouro, bairro, localidade FROM cep_lookup.ceps WHERE cep = ?;';
  const [infos] = await connection.execute(query, [treatedCep]);
  if (infos.length) {
    return getNewCep(infos[0]);
  }
  return {
    error: {
      code: 404,
      message: 'CEP não encontrado!',
    },
  };
};
const create = async (cep, logradouro, bairro, localidade, uf) => {
  const treatedCep = cep.replace('-', '');
  const query = 'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?,?,?,?,?)';

  const address = [treatedCep, logradouro, bairro, localidade, uf];
  await connection.execute(query, address);

  return {
    cep, logradouro, bairro, localidade, uf,
  };
};

module.exports = {
  getCep,
  create,
};
