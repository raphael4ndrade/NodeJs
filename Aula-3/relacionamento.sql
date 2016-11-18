-- relacionamento.sql
create table relacionamento(
    id_contato integer not null,
    id_evento integer not null,
    foreign key (id_contato) references contatoagenda(id_contato),
    foreign key (id_evento) references evento(id_evento),
    primary key (id_contato, id_evento)
);

-- Inserts
insert into relacionamento (id_contato, id_evento) values (1,1);
insert into relacionamento (id_contato, id_evento) values (2,1);
insert into relacionamento (id_contato, id_evento) values (1,3);
insert into relacionamento (id_contato, id_evento) values (1,2);
insert into relacionamento (id_contato, id_evento) values (2,3);
insert into relacionamento (id_contato, id_evento) values (3,3);

-- Selects
select * from contatoagenda, evento, relacionamento where
    contatoagenda.id_contato = relacionamento.id_contato and
    evento.id_evento = relacionamento.id_evento and
    relacionamento.evento = 3;