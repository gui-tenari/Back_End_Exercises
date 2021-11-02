-- 1. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT 
    B.title, B.Id
FROM
    hotel.books AS B
WHERE
    NOT EXISTS( SELECT 
            BL.book_id
        FROM
            hotel.books_lent AS BL
        WHERE
            B.Id = BL.book_id);
        
-- 2. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão
-- atualmente emprestados e que contêm a palavra "lost" no título.
SELECT 
    B.Id, B.title
FROM
    hotel.books AS B
WHERE
    EXISTS( SELECT 
            BL.book_id
        FROM
            hotel.books_lent AS BL
        WHERE
            BL.returned = 0)
        AND B.title LIKE '%lost%';
    
-- 3. Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT 
    CU.name, CU.CustomerId
FROM
    hotel.customers AS CU
WHERE
    NOT EXISTS( SELECT 
            CA.CustomerID
        FROM
            hotel.carsales AS CA
        WHERE
            CU.CustomerId = CA.CustomerID);
            
-- 4. Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales ,
-- exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT 

 