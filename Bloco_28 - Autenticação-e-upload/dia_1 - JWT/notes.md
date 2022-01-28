# JWT - Json Web Token

**Estrutura**: 

* Header => contem as configurações do JWT (em base64)

  ```json
  {
    "alg": "HS256",
    "typ": "JWT"
  }
  ```

  

* Payload => informações enviadas pelo usuário (em base64)

  ```json
  {
    "sub": "1234567890",
    "name": "John Doe",
    "admin": true
  }
  ```

  

* Assignature => utiliza do header e do payload em base 64 + a **Senha Super Secreta**