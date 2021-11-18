<h1> Filter Operators </h1>

<h3> Padrão de Sintaxe: </h3>

`{ <campo>: { <operador>: <valor> } }`

<p> Operadores são identificados pelo sinal <strong>$</strong> </p>

* Operador `$lt` -> seleciona o atributo que tenha o valor **Menor que**
  Ex: `db.inventory.find({ qty: { $lt: 20 } })`

* Operador `$lte` -> seleciona o atributo que tenha o valor **Menor que** ou **Igual**
  Ex: `db.inventory.find({ qty: { $lte: 20 } })`

* Operador `$gt` -> seleciona o atributo que tenha o valor **Maior que**
  Ex: `db.inventory.find({ qty: { $gt: 20 } })`

* Operador `$gte` -> seleciona o atributo que tenha o valor **Maior que** ou **Igual**
  Ex:`db.inventory.find({ qty: { $gte: 20 } })`

* Operador `$eq` -> seleciona o atributo que tenho o calor **Igual**
  Ex: `db.inventory.find({ qty: { $eq: 20 } })`

  **Quando não especificamos o operador, o resultado é examente igual ao $eq**
  Ex: `db.inventory.find({ qty: 20 })`

* Operador `$ne` -> Seleciona o atributo que tenho o valor **Não igual**
  Ex: `db.inventory.find({ qty: { $ne: 20 } })`

* Operador `$in` -> Seleciona o atributo que tenha o valor **x ou y**
  Ex: `db.inventory.find({ qty: { $in: [ 5, 15 ] } })`

* Operador `$nin` -> Seleciona atributos cujo o valor **Não esteja especificado no array**
  Ex: `db.inventory.find( { qty: { $nin: [ 5, 15 ] } } )`

* Operador `$not`-> Negação da condição
  Ex: `db.inventory.find({ price: { $not: { $gt: 1.99 } } })`

* Operador `$or` -> Seleciona Atributos cujo valor esteja entre as codições postas no array
  Ex: `db.inventory.find({ $or: [{ qty: { $lt: 20 } }, { price: 10 }] })`

* Operador `$nor` -> Seleciona atributos cujo valor nao esteja entre as codições postas no array
  Ex: `db.inventory.find({ $nor: [{ price: 1.99 }, { sale: true }] })`

* Operador `$and` -> Seleciona atributos cujo valor respeitem todas as condições dentro do array
  Ex: `db.inventory.find({
  and: [
          { price: { $ne: 1.99 } },
          { price: { $exists: true } }
      ]
  })`

* **Operador `$exists`** -> 
  ` { campo: { $exists: <boolean> } }`

  

  #### **Combinando operadores** 

* BETWEEN: retornar atributos cujo valor esteja **entre** dois valores
  Ex: `db.inventory.find( { qty: { $gt: 5 }, { $lte: 15} 

  

  ### Método Sort()

  