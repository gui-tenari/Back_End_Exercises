/* eslint-disable camelcase */
const Joi = require('joi');
const Authors = require('./author');
const connection = require('./connection');

const serialize = ({ id, title, author_id }) => ({
  id,
  title,
  authorId: author_id,
});

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books');

  return books.map(serialize);
};

const getByAuthorId = async (id) => {
  const books = await getAll();
  const filterdBooks = books.filter(({ authorId }) => authorId === Number(id));

  return filterdBooks;
};

const schema = Joi.object({
  title: Joi.string().min(3).required(),
  author_id: Joi.required(),
  lastName: Joi.string().required(),
});

async function validateAuthor(authorId) {
  const authors = await Authors.getAll();
  if (!authors.some(({ id }) => id === Number(authorId))) {
    return false;
  }
  return true;
}

const create = async (title, authorId) => connection.execute('INSERT INTO model_example.books (title, author_id) VALUES (?, ?)', [title, authorId]);

module.exports = {
  getAll,
  getByAuthorId,
  schema,
  validateAuthor,
  create,
};
