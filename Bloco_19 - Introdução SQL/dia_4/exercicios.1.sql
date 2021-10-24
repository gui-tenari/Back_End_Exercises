SELECT * FROM pixar.boxoffice;

INSERT INTO pixar.boxoffice (movie_id, rating, domestic_sales, international_sales)
VALUES 
	(9, 6.8, 450000000, 370000000),
    (8, 8.5, 300000000, 250000000),
    (10, 7.4, 460000000, 510000000),
    (11, 9.9, 290000000, 280000000);

-- Altere a classificação da tabela
-- BoxOffice para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.

UPDATE pixar.boxoffice
	SET rating = 9 
    WHERE domestic_sales > 400000000;
    
    
-- Altere a classificação da tabela BoxOffice para 6.0 de todos os filmes que lucraram menos de 300 milhões 
-- no mercado internacional e mais de 200 milhões no mercado interno.

UPDATE pixar.boxoffice
	SET rating = 6 
    WHERE domestic_sales > 200000000 AND international_sales < 300000000;
    
