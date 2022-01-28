const loginSchema = require('../Schemas/login');

const verifyUserAndPassword = async (req, res, next) => {
  const data = req.body;
  const { error } = loginSchema.validate(data);
  if (error) {
    return next({
      statusCode: 400,
      message: error.details[0].message,
    });
  }
  const { username, password } = data;
  if (username === 'admin' && password === 's3nh4S3gur4???') {
    req.body.admin = true;
  } else {
    req.body.admin = false;
  }
  next();
};

module.exports = verifyUserAndPassword;