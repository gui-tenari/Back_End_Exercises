/* eslint-disable camelcase */
const Joi = require('joi');
const Authors = require('./author');
const connection = require('./connection');

const getAll = async () => connection()
  .then((db) => db.collection('books').find().toArray())
  .then((book) => book.map(({ _id, title, author_id }) => ({
    id: _id,
    title,
    authorId: author_id,
  })))
  .catch((err) => console.log(err));

const getByAuthorId = async (id) => {
  const books = await getAll();
  const filterdBooks = books.filter(({ authorId }) => authorId === Number(id));
  console.log(filterdBooks);
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
