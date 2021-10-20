SELECT * FROM pecasfornecedores.pecas
WHERE name LIKE 'GR%';

SELECT * FROM pecasfornecedores.fornecimentos
	WHERE peca = 2
	ORDER BY Fornecedor;
    
SELECT peca, Fornecedor, Preco FROM pecasfornecedores.fornecimentos
	WHERE Fornecedor LIKE '%N%';
    
SELECT * FROM pecasfornecedores.fornecedores
	WHERE name LIKE "%LTDA"
    ORDER BY name DESC;
    
SELECT COUNT(*) FROM pecasfornecedores.fornecedores
	WHERE code LIKE '%F%';
    
SELECT * FROM pecasfornecedores.fornecimentos
	WHERE (Preco > 15 AND Preco < 40);
    
SELECT COUNT(*) FROM pecasfornecedores.vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';
