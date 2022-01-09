# Arquitetura de Software - Camada de Model

Se trata da camada mais próxima do banco de dados.
Todo acesso ao banco de dados precisa necessariamente passar por essa camada.

```javascript
const mysql = require('mysql/primese');
const connection = mysql.createPool({
	host: 'localhost'
    user: 'root'
    passsword: '1234566789'
    database: 'nome_do_banco'
})

```

