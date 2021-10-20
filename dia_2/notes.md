### Querys

> DDL - Data Definition Lenguage (como os dados devem existir no banco de dados) 
>
> * CREATE
> * ALTER
> * DROP -> deleta objetos
> * TRUNCATE -> esvazia apenas os dados

> DML - Data Manipulation Lenguage (manipular dados)
>
> * SELECT (ler ou exibir os dados )
> * INSERT
> * UPDATE
> * DELETE

> DCL - Data Control Lenguage (controlar permissões)
>
> * COMMIT - altera de temporarária para permanente
> * ROLLBACK - desfaz os impactos causados por um comando
> * SAVEPOINT - Define um ponto para qual uma transação pode voltar
> * TRANSICTION - onde, como e qual escopo a transação será executada

*helpers* -> 

​	* AS -> para nomear as colunas

	* CONCAT -> Concatenar dois valores de tabelas
 	ex: `SELECT CONCAT **(exemple_1, exemple_2)** AS 'exemple_coloum' FROM bank.exemple; 
 	
 * DISTINCT -> Para filtrar resultados iguais
      ex: `SELECT DISTINCT Nome FROM Escola.Alunos;` -> retorna nomes únicos, sem repetições

 * COUNT (trás a quantidade de dados) *é uma func()*

      **null é diferente de string vazia**

      ex: `SELECT COUNT (DISTINCT Nome) FROM Escola.Alunos` -> retorna a quantidades de nomes não repetidos

* WHERE -> Para definir onde 
     ex:` SELECT COUNT (DISTINCT Nome) FROM Escola.Alunos WHERE 

* LIMIT -> limita os resultados

* OFFSET -> a partir de qual item será mostrado;

* ORDER BY (DESC ou ASC)