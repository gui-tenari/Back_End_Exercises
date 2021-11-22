# Updates complexos (Arrays) - pt.2

## Operadores:

* **Operador $all** - seleciona todos os documentos em que o valor do campo é um *array* que contenha todos os elementos especificados
  Ex: 

  ```javascript
  { tags: { $all: ["red", "blank"] } }
  ```

* **Operador $elemMatch** -  seleciona todos os documentos em que o valor do campo é um array e contenha ao menos um item que satisfaça todas as condições passadas.
  Ex: 

  ```javascript
   { results: { $elemMatch: { $gte: 80, $lt: 85 } } } // retorna todos os resultados que no array de resultados possui alguma valor maior ou igual a 80 e menor que 85
  ```

* **Operador $size** - eleciona documentos em que um *array* contenha um **número de elementos** especificado.
  Ex: 

  ```javascript
  { $size: 2 } // retorna arrays que possuam tamanho de dois elementos
  ```

* **Operador $expr** - permite que você utilize [expressões de agregação ](https://docs.mongodb.com/manual/meta/aggregation-quick-reference/#aggregation-expressions)e construa *queries* que comparem campos no mesmo documento. É necessario referenciar o campo com a string e o sinal de dólar **($)**
  Ex: 

  ```javascript
  {
     $expr: { $gt: [ "$campo1", "$campo2" ] }
  } // retorna todos os documentos em q o campo1 seja maior que o campo2
  ```

* **Operador $regex** - permite comparações entre strings (comparando-se a im **LIKE** no MySQL)
  Ex: 

  ```javascript
  db.products.find({ sku: { $regex: /^ABC/i } });
  ```

* **Operador $text** - permite uma busca textual aprofundada.

  * Criando o index text

    ```javascript
    db.articles.createIndex({ subject: "text" });
    ```

  * **Pesquisa simples** - todos os documentos que tenham um texto, ou algum deles:

    ```javascript
    db.articles.find({ $text: { $search: "coffee drink cocktails" } });
    ```

  * **Pesquisar frases ** - todos os documentos que possuem aquela frase completa:

    ```javascript
    db.articles.find({ $text: { $search: "\"coffee shop\"" } });
    ```

  * **Operador $mod** - que seleciona todos os documentos em que o valor do módulo seja igual ao especificado. Passa-se o divisor, e o valor esperado.

    Ex: 

    ```javascript
    { $mod: [4, 0] }
    ```

    

