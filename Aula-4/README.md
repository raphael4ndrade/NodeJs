#### Dentro da pasta 'intro-knex' temos:
 * '.gitignore' : tem especificado o 'node_modules'.
 * 'hello-knex-1.js' : criando uma tabela
 * 'hello-knex-2.js' : inserindo um item na tabela com um 'nome'
 * 'hello-knex-3.js' : atualizando um item da tabela pelo 'id' 'nome>'
 * 'hello-knex-4.js' : removendo um item da tabela pelo 'id'
 * 'hello-knex-5.js' : selecionando todos os itens da tabela
 * 'hello-knex-6.js' : selecionando um item da tabela pelo 'id'
 * 'hello-knex-7.js' : atualizando um item com 'raw' passando 'id' 'nome'
 * 'hello-knex-8.js' : inserindo um item com 'raw' passando 'nome'
 * 'hello-knex-9.js' : 

#### Migração com Knex

1. Instalando o knex: 
    npm install knex -g
2. Exemplos: 
    knex migrate:make <nome_da_migração>

    Um arquivo relativo a migração é criado na pasta 'migrations' dentro do projeto.
    Dentro desta pasta temos arquivos javascript relacionados a migração. Todos possuem
    duas funções uma 'up' e outra 'down', porem o desenvolvedor precisa implementar.