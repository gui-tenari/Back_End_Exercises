const express = require('express');
const bodyParser = require('body-parser');

const cepController = require('./Controllers/cepController');
const validateCep = require('./Middlewares/validateCep');
const errorMiddleware = require('./Middlewares/errorMidleware');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/ping', (req, res) => res.status(200).json({ message: 'pong' }));
app.get('/cep/:cep', validateCep, cepController.getCep);

app.post('/cep', cepController.create);

app.use(errorMiddleware);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
