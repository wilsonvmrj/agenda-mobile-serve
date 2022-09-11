# Configurando o ambiente:

Detalhes :
Adonis 4.1 (framework)

1 - Instalar o docker  e docker-composer
2 - Estando dentro da pasta do projeto, entrar na pasta "ambiente-docker" para isso no terminal digite os seguintes comandos: 
```ssh 
$cd ambiente-docker
$ cp .env-exemplo .env
$ docker-compose up -d 
cd ..
#Aqui instala todo o suporte para o backend
npm -i  # para instalar as dependeicas 
npm -i @adonisjs/cli -g  # instala o cli do adonis 
cp .env.example .env 
#Para gerar chave do backend
adonis key:generate 
#Criando as tabelas do banco 
adonis migration:run 

```
Isso irá baixar a iso e lavantar o docker com redis e postgres para poder rodar 
o postgres e redis. 



