# Testes de integração API

Instalando dependencias necessárias: 

```bash
npm i -D mocha chai chai-http sinon mongodb-memory-server@6
```

**Criando conexão Mocada do Banco de Dados:**

```javascript
const { MongoClient } = require('mongodb') // Conectar com o server;
const { MongoMemotyServer } = require('mongodb-memory-server') // Memória para testes

const DBServer = new MongoMemoryServer();
const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true};

const getConnection = async () => {
    const URLMock = await DBServer.getUri();
    return MongoCliente.connect(URLMock, OPTIONS);
}

module.exports  = getConnection;

```

Adicionando o Plug-in de instancia do chai

```javascript
const chai - require('chai');
const chaiHttp = require('chai-http'); // Simula requisições HTTP
const sinon = require('sinon')
const getConnection = require('./getConnection')
const { MongoClient } = require('mongodb') // Conectar com o server;

chai.use(chaiHttp);

const { expect } = chai;
let connectionMock;

before( async () => {
    connectionMock = await getConnection(); // Faz a conexão
    return sinon.stub(MongoClient, 'connect').resolves(connectionMock) // Mocka seu resultado
});

after( () => MongoClient.connect.restore()); // Restaura o método connect de MongoClient
```

**Covertura de Testes:**

```bash
npm i -D nyc
nyc mocha ./tests --recursive 
```

Interessante criar scripts: 

```json
{ "test:coverage": "nyc npm test" }
```

