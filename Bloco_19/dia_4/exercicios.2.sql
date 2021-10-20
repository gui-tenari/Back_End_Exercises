-- Inserindo dados na tabela
 INSERT INTO pixar.movies (title, director, year, length_minutes)
	VALUES 
		('Monstros SA', 'Pete Docter', 2001, 92 ),
        ('Procurando Nemo', 'John Lasseter', 2003, 107),
        ('Os Incríveis', 'Brad Bird', 2004, 116 ),
        ('WALL-E', 'Pete Docter', 2008, 104);
        
SELECT * FROM pixar.movies;

-- atualiazando o nome do diretor 

UPDATE pixar.movies
	SET director = 'Andrew Staton'
    WHERE title = 'Procurando Nemo';
    
-- Atualizando Ratatouille

UPDATE pixar.movies
	SET title = 'Ratatouille', year = 2007
    WHERE id = 3;
    
-- Exclua da tabela Movies o filme "WALL-E".

-- #1 removendo referencias
DELETE FROM pixar.boxoffice
	WHERE movie_id = 11;
-- #2 removendo o item de fato
DELETE FROM pixar.movies
	WHERE id = 11;
    
-- Excluindo por diretor 

-- #1 removendo referencias
DELETE FROM pixar.boxoffice
	WHERE movie_id IN ( SELECT id FROM pixar.movies
	WHERE director = 'Andrew Staton');
    
-- #2 removendo o item de fato
DELETE FROM pixar.movies
	WHERE director = 'Andrew Staton';

-- Exclua da tabela Movies todos os filmes com menos de 100 minutos de duração.
-- #1 removendo referencias
DELETE FROM pixar.boxoffice
	WHERE movie_id IN (SELECT id FROM pixar.movies
		WHERE length_minutes < 100);

-- #2 removendo os itens em questão
DELETE FROM pixar.movies
	WHERE length_minutes < 100;



