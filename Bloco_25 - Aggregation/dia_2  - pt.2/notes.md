# Aggregation - pt.2

* **$lookup** - (quando dois campos precisam ser comparados para ocorrer o join)

  * `let` -> variavéis a respeito da collection de base, que será utilizada em comparações e expressões na pipeline;
  * `pipeline` -> condições de filtragem que serao aplicadas à foreign collection

* **Operador $add** -> soma todos os itens detro de seu array, incluindo datas.
  Ex: 

  ```javascript
  total: {
  	$add: [
  	"$campo1", "$campo2", "$campo3",
  	]
  };
  ```

* **Operador $addFileld** -> adiciona um campo para fim de visualização apenas.

  ```javascript
  {
  	$addField: {
  		miliseconds: 86400000
  	}
  }
  ```

* **Operador $subtract** -> subtrai um valor de outro, ambos dentro do array:
  Ex: 

  ```javascript
  const miliseconds = 86400000;
  {
  	$subtract: ["$dates.start_date", miliseconds] 
  }
  ```

* **Operador $floor e $ceil** -> floor arredonda para beixo, ceil arredonda para cima. Retorna apenas valores inteiros.

* **Operador $divide** - pode receber apenas dois parametros
  Ex:

  ```
  {
  	$divide: ["dividendo", "divisor"]
  }
  ```

  