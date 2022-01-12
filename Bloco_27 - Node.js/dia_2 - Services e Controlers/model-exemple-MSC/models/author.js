/* eslint-disable camelcase */
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

const create = async ({ firstName, middleName, lastName }) => connection()
  .then((db) => db.collection('authors').insertOne({
    firstName,
    middleName,
    lastName,
  }))
  .catch((err) => console.log(err));

module.exports = {
  getAll,
  create,
};
