-- evento.sql
create table evento(
    id_evento integer not null primary key,
    dsc_evento varchar(255) not null,
    data_evento date not null
);