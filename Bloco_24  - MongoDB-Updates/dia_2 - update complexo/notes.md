# Updates complexos  (Arrays) - pt.1 

## **Operadores**

* **$push** -> adiciona um valor ao array. Caso o campo nao exista, ele o criará com um array que possui o valor passado.

  * `$each` : Adiciona múltiplos valores a um *array* ;
  * `$slice` : Limita o número de elementos do *array* . Requer o uso do modificador `$each` ;
  * `$sort` : Ordena os elementos do *array* . Requer o uso do modificador `$each` ;
  * `$position` : Especifica a posição do elemento que está sendo inserido no *array* .

  Ex: **Adicionando um item ao array**

  ```javascript
  $push: {
        items: {
          "name": "notepad",
          "price":  35.29,
          "quantity": 2,
        },
  ```

​	Ex: **Adicionando mais de um item ao array**

```javascript
 $push: {
      items: {
        $each: [
          {
            "name": "pens",
            "price": 56.12,
            "quantity": 5,
          },
          {
            "name": "envelopes",
            "price": 19.95,
            "quantity": 8,
          },
        ],
        $sort: { quantity: -1 }, //decrescente
        $slice: 2, // mantém apenas os dois maiores
      },
    },
```

* **$pop** -> remove o primeiro item de um array (passando -1 como valor), ou o ultimo (passando 1 como valor).

  Ex: 

  ```javascript
  db.supplies.updateOne({ _id: 1 }, { $pop: { items: -1 } });
  ```

* **$pull** -> remove do array todos os itens que atendam a condição especificada.

  Ex: 

  ```javascript
  $pull: {
        items: {
          name: { $in: ["pens", "envelopes"] },
  ```

* **$addToSet** -> garante que nao há valores duplicados em um  (*conjunto*).

  Ex: 

  ```javascript
  $addToSet: {
        tags: {
          $each: ["camera", "electronics", "accessories"],
  ```



## Array Filters

Terceiro parametro de uma query. Cria-se uma variavel dentro deste parametro, para filtrar documentos que estejam dentro de arrays.
	Ex:
	

```javascript
db.recipes.updateMany(
  {}, //pesquisa por todos
  {
    $set : {
      "ingredients.$[elemento].unit": "xícara", 
		// Setamos `unit` como "xícara",
      "ingredients.$[elemento].name": "Farinha Integral", 
		// `name` como "Farinha Integral".
    },
  },
  { arrayFilters: [ { "elemento.name": "Farinha" } ] }, 
    // Filtramos os arrays que o valor da propriedade `name` seja "Farinha".
);
```