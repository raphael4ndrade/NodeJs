-- contato-agenda.sql
create table contatoagenda(
    id_contato integer not null primary key,
    nome_contato varchar(255) not null,
    datanasc_contato date not null,
    telefone_contato varchar(13) not null
);
