# Mongo DB

### Armazenamento:

- Bancos de dados;

  > Não há a necessidade de cria-lo formalmente. Caso haja inserção de dados em uma coleção, num banco nao existente, o Mongo criará ele para você.
  > Ex: `use nomeDoBanco
  > db.nomeDaColecao.insertOne( { x: 1 })`

- Coleções (que seriam equivalentes às tabelas dos bancos de dados relacionais);

  > Também não há necessidade de cria-lo formalmente, mas caso queira especificar regras de validação dos dados inseridos, há como.
  > Ex: `db.createCollection( "nomeDaColecao", { collation: { locale: "pt" } } );`

- Documentos (que seriam equivalentes aos registros dos bancos de dados relacionais).

  > * Um `insert` recebe como parâmetro um `JSON` (um objeto)
  > * Pode ser validade com um Schema Validation[¶](https://docs.mongodb.com/manual/core/schema-validation/#schema-validation)

  

  ### Relacionamentos

  Costuma ser dentro dos proprios dados. 1:1 **sub-documentos**

  `{ id: 1
  name: 'joe'
  address: {
  	street: "Fake Street"
  	city: "unkown"
  	country: " Brazil"
  	}
  }`

