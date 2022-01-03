const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//1. Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }

app.get('/ping', (_req, res) => res.status(200).json({ message: "pong" }))

// 2. Crie uma rota POST /hello
//    2.1 Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
//    2.2 Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .

const userNameMidddleware = (req, res, _next) => {
  const { name } = req.body;
  res.json({  message: `Hello, ${ name }`});
}

app.post('/hello', userNameMidddleware);

// 3. Crie uma rota POST /greetings
//    3.1 Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
//    3.2 Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
//    3.3 Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .

const ageVerification = (req, res, next) => {
  const { age } = req.body;
  if(age < 18) {

  }
}

app.post('/greetings', )

app.listen(3000, () => console.log('Tudo indo bem ate aki'))

