require('dotenv').config();
const jwt = require('jsonwebtoken');

const { KEY_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const login = async (req, res, next) => {
  const { username, admin } = req.body;
  const payload = {
    username,
    admin,
  };
  const token = jwt.sign(payload, KEY_SECRET, jwtConfig);
  return res.status(200).json({ token });
};

module.exports = login;