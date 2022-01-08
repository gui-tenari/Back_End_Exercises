/* eslint-disable camelcase */
const Joi = require('joi');
const connection = require('./connection');

const getFullNameAuthor = (first_name, middle_name, last_name) => {
  // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
  // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
  const fullName = [first_name, middle_name, last_name]
    .filter(Boolean)
    .join(' ');

  return fullName;
};

const serialize = ({
  id, first_name, middle_name, last_name,
}) => ({
  id,
  firstName: first_name,
  middleName: middle_name,
  lastName: last_name,
  fullName: getFullNameAuthor(first_name, middle_name, last_name),
});

const getAll = async () => {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  return authors.map(serialize);
};

const schema = Joi.object({
  fistName: Joi.string().required(),
  middleName: Joi.string().required(),
  lastName: Joi.string().required(),
});

const create = async ({ firstName, middleName, lastName }) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
  [firstName, middleName, lastName],
);

module.exports = {
  getAll,
  create,
  schema,
};
