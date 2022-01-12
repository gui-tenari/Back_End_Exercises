const cepRegex = /\d{5}-?\d{3}/;

const validateCep = (req, res, next) => {
  const { cep } = req.params;
  const validCep = cepRegex.test(cep);
  if (!validCep) next({ error: { code: 'invalidData', message: 'CEP inválido' } });
  return next();
};

module.exports = validateCep;
