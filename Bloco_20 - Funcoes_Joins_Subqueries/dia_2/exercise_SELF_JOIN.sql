-- 1. Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.

SELECT
    film1.film_id,
    film1.replacement_cost,
    film2.film_id,
    film2.replacement_cost
FROM
    sakila.film AS film1,
    sakila.film AS film2
WHERE
    film1.replacement_cost = film2.replacement_cost;
    
-- 2. Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. 
-- Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.

SELECT 
    film1.title,
    film1.rental_duration,
    film2.title,
    film2.rental_duration
FROM
    sakila.film AS film1,
    sakila.film AS film2
WHERE
    film1.rental_duration = film2.rental_duration
        AND film1.rental_duration BETWEEN 2 AND 4;
        
