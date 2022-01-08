/* eslint-disable camelcase */
const Joi = require('joi');
const connection = require('./connection');

const getAll = async () => connection()
  .then((db) => db.collection('authors').find().toArray())
  .then((authors) => authors.map(({
    _id, firstName, middleName, lastName,
  }) => ({
    id: _id,
    firstName,
    middleName,
    lastName,
  })));

const schema = Joi.object({
  fistName: Joi.string().required(),
  middleName: Joi.string().required(),
  lastName: Joi.string().required(),
});

const create = async ({ firstName, middleName, lastName }) => connection()
  .then((db) => db.collection('authors').insertOne({
    firstName,
    middleName,
    lastName,
  }))
  .catch((err) => console.log(err));

// const create = async ({ firstName, middleName, lastName }) => connection.execute(
//   'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
//   [firstName, middleName, lastName],
// );

module.exports = {
  getAll,
  create,
  schema,
};
