# Heroku - Deploy

**Procfile**

arquivo com instruções para iniciar a aplicação no Heroku, contendo:

* `<process type>`: Define o tipo daquele processo. Por exemplo, se é um *servidor web* ou um *job* .
* `<command>`: É o comando para *iniciar* o projeto.

​	Ex: 

```
web: node index.js
```



**Setar variáveis de ambiente**

```
heroku config:set TESTE="texto qualquer" --app nome-do-seu-app-12345
```

**Listar variáveis de ambiente**

```
heroku config --app nome-do-seu-app-12345
```

**Logs**

```
heroku logs --app nome-do-seu-app-12345
```

