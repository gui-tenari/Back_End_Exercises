# Updates simples e complexo

## **Métodos**

* **updateOne( {}, {} ) ** -> Recebe até **<u>três</u>** parametros e atualiza o primeiro que corresponde ao filtro:

  * Filtro: corrensponde ao WHERE do MySQL, identifica onde será a atualização;

  * Operação: setar o valor x

  * Opções: {upset: true} -> insere um documento caso este nao seja encontrado pelo filtro. **NÃO PRECISAM DO SINAL DE $**

    Ex: `db.inventory.updateOne(
      { item: "paper" },
      { $set: { "size.uom": "cm", status: "P" } }
    );`

* **updateMany( {}, {} )** -> recebe até **<u>tres</u>** parametros Também, porém multiplos documentos serão alterados.

## **Operadores**

* **$set** -> altera valores dos documentos. Cria campo, caso o campo não exista.

  * Set Top-Level: 

    ```js
    { $set: {
          quantity: 500,
          details: { model: "14Q3", make: "xyz" },
          tags: [ "coats", "outerwear", "clothing" ]
        }
    ```

  * Set sub-documents: *dot notation*

    ```js
    { $set: { "details.make": "zzz" } }
    ```

  * Set valores em **arrays**: *dot notation com índice*

    ```javascript
    { $set: {
          "tags.1": "rain gear",
          "ratings.0.rating": 2
        }
      }
    ```

* **$mul** -> multiplica o valor de um campo por um numero especifico, prevalecendo o resultado sem a necessidade do $set.

  ​         Sintaxe: `{ $mul: { campo-a-ser-atualizado: multiplicador }}`

  ```javascript
   { $mul: { price: NumberDecimal("1.25"), qty: 2 } }
  ```

* **$inc** -> incrementa ou decrementa valores aos campos (neg ou pos).

  ```javascript
  { $inc: { quantity: -2, "metrics.orders": 1 } }
  ```

  

  * `$min` : altera o valor do campo atual para o valor passado pelo método **se** o valor passado pelo método for **menor do que** o valor do campo atual.

  - `$max` : altera o valor do campo atual para o valor passado pelo método **se** o valor passado pelo método for **maior do que** o valor do campo atual.

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/simple-updates/images/mongodb_max-e4b15a83476cb823e7311a1d153c5338.png)

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/simple-updates/images/mongodb_min-8ecf25fde177dc4b1b76641625c53ae8.png)

* **$CurrentDate**

* **$rename** -> altera nome do campo

  ```
  * { $rename: { quantity: qty } }
  ```

  **$unset** -> remove o campo

  ```
  * { $unset: { receita: '''' } }
  ```

  