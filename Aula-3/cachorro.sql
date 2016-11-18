-- cachorro.sql
create table cachorro(
    id_cachorro integer not null primary key,
    nome_cachorro varchar(255) not null,
    raca_cachorro varchar(255) 
);

-- Adicionando uma coluna nesta tabela
alter table cachorro add column dtnasc_cachorro date;
-- Removendo uma coluna nesta tabela
alter table cachorro remove column raca_cachorro;

-- Removendo a tabela cachorro do DB.
drop table cachorro;