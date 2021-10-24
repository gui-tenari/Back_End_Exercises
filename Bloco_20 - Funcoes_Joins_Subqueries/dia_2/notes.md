#### Juntando tabelas

> **INNER JOIN** - retorna todos os resultados em que a condição da cláusula `ON` for satisfeita.
>
> ​	Sintaxe: 
>
> ​			`SELECT t1.coluna, t2.coluna
> ​			FROM tabela1 AS t1
> ​			INNER JOIN tabela2 AS t2
> ​			ON t1.coluna_em_comum = t2.coluna_em_comum;`
>
> **LEFT/RIGHT JOIN** - retorna todos os resultados em que a condição da cláusula `ON` for satisfeita + todos os dados da tabela da esquerda/direita (usa elas como "referência");
>
> ​	Sintaxe:
>
> 	`SELECT t1.coluna, t2.coluna
> 			FROM tabela1 AS t1
> 			(RIGHT OR LEFT) JOIN tabela2 AS t2
> 			ON t1.coluna_em_comum = t2.coluna_em_comum;`
>
> **SELF JOIN** - utilizado para comparar dados de uma tabela com ela mesmo.
>
> ​	Sintaxe: 
>
> 	`SELECT t1.title, t1.replacement_cost, t2.title, t2.replacement_cost
> 	FROM sakila.film AS t1, sakila.film AS t2
> 	WHERE t1.length = t2.length;`
> **UNION** - une duas tabelas removendo dados duplicados
>
> **UNION ALL** - une tabelas sem remover dados duplicados
>
> ​	*Precisam ter a mesma quantidade de colunas*
>
> ​	Sintaxe: 
> ​	`(SELECT coluna1, coluna2, '-' AS coluna3 FROM banco1 LIMIT 10)`
> ​	`UNION`
> ​	`(SELECT coluna1, coluna2, coluna3 FROM tabela2 LIMIT 10)`
> ​	`ORDER BY coluna1`
> ​	`LIMIT 15`
>
> ​						-> Criar uma coluna vazia ('-') quando as tabelas possuírem números de coluna diferente;
> ​						-> Colocar ambos SELECTS entre parênteses para ordenar;
>
> ​						-> LIMIT necessário em cada SELECT e ao final da query se necessário.
>
> **SUBQUERIES** - uma query aninhada (uma dentro da outra)



> 

 