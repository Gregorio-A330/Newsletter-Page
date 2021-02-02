# Newsletter-Page

Página criada com intuito de testar o funcionamento de API's e deploy da aplicação pela plataforma Heroku.
Link da aplicação em funcionamento -> https://powerful-taiga-99537.herokuapp.com/ 

## O que eu aprendi com tudo isso?
> Que não se deve deixar a API a mostra quando subir os arquivos numa plataforma de acesso publico...
> Que sem estudo e foco a coisa não anda.
> Que sem correr atrás... menos ainda.
> Que pra aprender e entender tem que fazer e testar.
> E assim vamos seguindo e evoluindo sempre

## Abaixo um pouco do descritivo da parte de deploy:

### Subir o projeto no Heroku

> Instalar o Heroku para acesso ao terminal

> Criar um arquivo chamado *Procfile* sem extensão e inicialiar ele com os parametros:

> web: node app.js

> Isso vai informar para o Heroku que ele vai rodar em NODE e o nome do arquivo inicial é o app.js("podendo ser qualquer um que inicialize seu projeto")

#### Posteriormente seguir dentro do terminal de sua preferencia com:

> git init -> incializa

> git add . -> para adicionar todos os arquivos dentro da pasta do projeto

> git commit -m "sua mensagem de commit" -> feito isso ele criou um "save point" e pode dar rollback caso algo tenha dado errado

> heroku create -> vai criar o app, mas antes verificar se está logado no heroku pelo terminal senão vai dar erro (comando: heroku login)

> Feito isso vai informar uma mensagem com um link ao seu projeto -> https://powerful-taiga-99537.herokuapp.com/

#### Ainda dentro da pasta do seu projeto execute:

> git push heroku master -> vai construir sua aplicação dentro do link e é só acessar ele novamente depois de alguns minutos,pois o heroku pode demorar um tempo para finalizar tudo e se tudo estiver certo seu site vai estar funcionando lindamente



### Aaah eu fiz alguma alteração e agora? 

> git add .  ("git add tudo")

> git commit -m "mensagem"

> git push heroku master

#### Feito isso, aguarde novamente um tempo e de um refresh na sua pagina
