#### Funções no SQL

> Manipulando Strings:
>
> * UCASE(string) -> CAIXA ALTA
>
> * LCASE(string) -> caixa baixa
> * REPLACE(where, 'what', 'for what') -> substituir 
> * LEFT(where, 6) -> seis caracteres a partir da esquerda
> * RIGHT(where, 6) -> seis caracteres a partir da direita
> * CHAR_LENGTH(string) -> numero de caracteres
> * SUBSTRING(where , 5, *2*) -> a partir de qual caracter, e quantos serão.



> Condicionais
>
> * SELECT IF(condição, se_verdadeiro, se_falso);
> * SELECT CASE
>     WHEN condicao THEN valor
>     ELSE valor padrao
>   END;



> Outros operadores
>
> * DIV (20, 7) => retorna 2 /divisor inteiro/
> * MOD(20, 7) => retorna 6 /o resto da divisão/
> * ROUND(20.75, 1) => retorna 20.7
> * CEIL => arrendonda pra cima
> * FLOOR => arrendonda pra cima
> * POW
> * SQRT



> Operações com tempo
>
> * DATEDIFF('2020-05-01', '2020-05-31' ) => retorna -30
> * TIMEDIFF('05:15:30', '06:15:30') => retorna 01:00:00



> Operações de agregação
>
> * MIN(Column) => retorna o menor valor
> * MAX(Column) => retorna o maior valor
> * AVG(Column) => retorna a media de valores
> * SUM(TODOS) => retorna a soma de todos



> GROUP BY something ->
>
>  Agrupa todos de um mesmo grupo
>
> HAVING -> seleciona um grupo que possui uma caracteristica
>
> `SELECT rating COUNT(replacement_cost AS 'abc' FROM baco Group BY rating HAVING 'abc' > 500 )`
>
> 