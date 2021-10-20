SELECT * FROM scientists.scientists
	WHERE name LIKE '%e%';
    
SELECT * FROM scientists.projects
	WHERE Code Like 'A%'
    ORDER BY Name;
    
SELECT Code, Name FROM scientists.projects
	WHERE Code LIKE '%3%'
    ORDER BY Name;
    
SELECT * FROM scientists.assignedto
	WHERE Project IN ('AeH3', 'Ast3', 'Che1');
    
SELECT * FROM scientists.projects
	WHERE Hours > 500;
    
SELECT * from scientists.projects
	WHERE Hours BETWEEN 250 AND 800;
    
SELECT * FROM scientists.projects
	WHERE Name NOT LIKE "A%";

SELECT * FROM scientists.projects
	WHERE code LIKE '%H%'
    
