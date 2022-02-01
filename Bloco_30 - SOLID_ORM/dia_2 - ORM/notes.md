# ORM - Object Relational Mapper

#### Interface da aplicação com banco de dados


**MAPEAMENTO**

> Trata-se de uma camada entre a entidade a ser inserida no banco e o banco de dados.
> Esta fortemente acoplada ao banco de dados, tendo que ser refeita caso a estrutura do banco mude, porém, isenta a entidade de mudanças.

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/orm/images/orm2-8d1609300f9fbef59db1a7504e79a4a4.png)

**ACTIVE RECORD**

> A classe que representa a tabela conhece os recursos necessários para conversar com o banco de dados, é no próprio MODEL que descrevemos as ações a serem realizadas no nosso banco.

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/orm/images/orm3-451b50c8ab241c54be41cbbe8a25fbac.png)


**SEQUELIZE**

> Evita criação de queries SQL, utilizando models e migrations para criação e manutenção de tabelas. Além disso é possivel a criação de relações e associações entre tabelas com o próprio JavaScript.

IMPLEMENTAÇÃO DO SEQUELIZE
![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/orm/images/fluxogramaSequelize-922987611fca390154196bddcb51ee60.png)

**INICIANDO O SEQUELIZE**

```bash
$ npm install sequelize sequelize-cli mysql2
$ npx sequelize-cli init
```

> Este comando criará algumas pastas no projeto
>
> - **config** : contém um arquivo de configuração, que "fala" para o CLI como conectar-se com o nosso banco de dados;
> - **models** : contém todos os modelos da nossa aplicação;
> - **migrations** : contém todos os arquivos de migração da nossa aplicação;
> - **seeders** : contém todos os arquivos de "seeds".

**MODELS**

O model é uma abstração que informa ao sequelize dados acerca do banco como nome da tabela, entidades, colunas e etc.
	**Definindo Models** - 

		* Chamando pela função `sequelize.define(modelName, attributes, options)`
		* Estendendo `Model` como uma classe e chamando `init(attributes, options)`

Criar um model na CLI

```bash
$ npx sequelize model:generate --name NomeDoModel --attributes nomeDoAtributo:string
```

- O parâmetro `--name` se refere ao nome da tabela, mas no singular, pois se refere a uma unidade dos dados, como uma linha no banco ou um objeto no seu código javascript;
- O parâmetro `--attributes` se refere ao nome das colunas e os tipos de dados que ela contém. Não é preciso definir todas as colunas neste comando, é possível adicioná-las direto no arquivo `model.js` gerado e na migration equivalente a este model.



**Migrations**

>Uma forma de verscionar o Schema do banco, onde toda a alteração na estrutura da tabela ganhará um arquivo, e poderá ser acessado tanto para realiar a alteração quanto para desfaze-la;
>
>* Up: função para executar as mudanças no banco de dados;
>* Down: função para desfazer as mudanças no banco;
>
>```bash
> $ npx sequelize db:migrate ||  $ npx sequelize db:migrate:undo
>```
>
>**Criando uma nova migration para alterar uma tabela já existente**
>
>```bash
> $ npx sequelize migration:generate --name add-new-column-table-exists
>```
>
>Este comnado cria um novo arquivo para que entao completemos a função 
>
>* **Up:** `await queryInterface.addColumn('TABLE', 'new_column', {
>       type: Sequelize.STRING,
>     });`  ->  para adicionar a nova coluna
>* **Down**: ` await queryInterface.removeColumn('TABLE', 'new_column');` -> para remover a nova coluna *(reverter)*

**SEEDERS**

> As bibliotecas de mapeamento objeto-relacional permitem que controlemos informações que devem ser criadas assim que nosso banco de dados/tabelas forem criadas. Os seeders injetam os dados no Banco para que a tabela seja minimanete povoada.
>
> **Criando uma nova Seed:**
>
> ```bash
> $ npx sequelize seed:generate --name users
> ```
>
> Esse comando cria um novo arquivo na pasta seeds, que segue a mesma estrutura do migrations:
>
> * **Up:** `async (queryInterface, Sequelize) => queryInterface.bulkInsert('TABLE', [{ ...infos }], {})` => adiciona informações na tabela TABLE
>
> * **Down**: `async (queryInterface) => queryInterface.bulkDelete('Users', null, {})` => remove os dados adicionados pela função up *(reverte)*
>
>   ```bash
>   $ npx sequelize db:seed:all || $ npx sequelize db:seed:undo
>   ```

**OPERAÇÕES**

`const { table } = require('../models');`

* table.findAll({
  where: { id: 12 }
  });
* table.destroy()
* table.findByPk()
* talbe.update()
* Outros : https://sequelize.org/v5/manual/querying.html

**Boas Práticas**

