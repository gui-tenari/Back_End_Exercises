const Joi = require('joi');
const Author = require('../models/author');

const schema = Joi.object({
  firstName: Joi.string().required(),
  middleName: Joi.string().required(),
  lastName: Joi.string().required(),
});

const getFullNameAuthor = ({
  id, firstName, middleName, lastName,
}) => {
  const fullName = [firstName, middleName, lastName].map((name) => name).join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const getAll = async () => {
  const authors = await Author.getAll();
  return authors.map(getFullNameAuthor);
};

const create = async ({ firstName, middleName, lastName }) => {
  const { error } = await schema.validate({ firstName, middleName, lastName });
  if (error) return false;

  const { insertedId } = await Author.create({ firstName, middleName, lastName });
  return getFullNameAuthor({
    id: insertedId,
    firstName,
    middleName,
    lastName,
  });
};

module.exports = {
  getAll,
  create,
};
