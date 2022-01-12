# Controllers e Services

* **Controllers:** Recebem os dados através da request. É a camada mais próxima do usuario e filtra apenas os dados excenciais para a prócima camada: Services;
* **Services:** Modelam a lógica de negócio por trás da aplicação. É nela em que disparos de ações são feitas. Não deve haver nenhuma query de acesso à banco nem receber request.

### Regras de Negócio:

Verificações simples ou complexas:
	* **Não é possível cadastrar um produto que o nome tenha menos de 5 letras** (simples)
	* **Não é possível cadastrar um produto que já exista** (simples)
	* **Só é possível vender produtos que tenham estoque**(complexa)
	* **Não é permitido parcelar compras em mais de 5x para valores abaixo de R$ 100,00** (complexa)

#### 		 * Validações:



