# Aggregation - pt.1

## Aggregation pipeline 

Permite a filtragem através de multiplos estagios. 

![](/home/tenari/.config/Typora/typora-user-images/image-20211124133240505.png)



## Operadores

* **Operador $match** -> funciona como o Find(), retornando todos os documentos que  atendam às condições passadas.

  <u>Recomenda-se utiliza-lo o mais cedo possivel, sendo um dos primeiros estagios do aggregate</u>

  Ex: 

  ```javascript
  db.orders.aggregate([
  	{
  		$match: {
  			score: { $lt: 70 }
  		}
  	}
  ]);
  ```

* **Operador $limit** -> limita a quatidade de documentos que passaram para o próximo estágio do filtro.
  Ex:

  ```javascript
  db.articles.aggregate(
    [
      { $limit : 5 }
    ]
  );
  ```

* **Operador $project** -> Permite com que passe pela pipeLine apenas alguns campos dos documentos, funcionando como a projeção do Find(), com o diferencial de que esses campos podem ser novos, armazenando resultados de expressoes e etc.
  Ex:

  ```
  db.books.aggregate([
    {
      $project : {
        "author.first": 0,
        copies: 0
      }
    }
  ]);
  ```

* **Operador $group** -> agrupa valores de diversas formas, utilizando do campo _id para isso.
  O principal parâmetro do `$group` é o `_id`,  responsável por conter o campo ou os campos que serão utilizados no agrupamento.

  ​	**Operadores de acumulação**

  - `$addToSet` : retorna um *array* com os valores únicos da expressão para cada grupo;
  - `$avg` : retorna a média de valores numéricos. Valores não numéricos são ignorados;
  - `$first` : retorna um valor do primeiro documento de cada grupo;
  - `$last` : retorna um valor do último documento de cada grupo;
  - `$max` : retorna o maior valor de cada grupo;
  - `$sum` : retorna a soma de valores numéricos. Valores não numéricos são ignorados.

  Ex: 

  ```javascript
  db.sales.aggregate([
    {
      $group : {
        _id : "$item", //agrupado pelo item 
        count: { $sum: 1}
      }
    }
  ]);
  ```

* **Operador $unwind** -> O operador `$unwind` "desconstrói" um campo *array* do documento de entrada e gera como saída um documento para cada elemento do *array*
  Ex: 

  **Banco**

  ```javascript
  { _id: 7, item: "ABC1", sizes: ["S", "M", "L"] }
  ```

  **Entrada**

  ```javascript
  db.inventory.aggregate([{ $unwind : "$sizes" }]);
  ```

  **Saída**

  ```javascript
  { "_id" : 7, "item" : "ABC1", "sizes" : "S" }
  { "_id" : 7, "item" : "ABC1", "sizes" : "M" }
  { "_id" : 7, "item" : "ABC1", "sizes" : "L" }
  ```

* **Operador $lookup** -> permite a junção de duas coleções (como um join no MySQL), adicionanado um array ao final do documento com todos os documentos da outra coleção na qual deu-se match no campo especificado:
  Ex: 

  ```javascript
  db.orders.aggregate([
    {
  	$lookup: {
        from: "inventory", // coleção a realizar o join
        localField: "item",// campo a ser comparado
        foreignField: "sku",// campo a ser comparados
        as: "inventory_docs"// nome do campo resultante
      }
    }
  ]);
  ```

  