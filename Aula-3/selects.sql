-- exemplo 1
select * from contatoagenda;

-- exemplo 2
select * from contatoagenda where nome_contato = 'Fran';

-- exemplo 3
select * from contatoagenda where id_contato = 3;

-- exemplo 4
select * from contatoagenda, evento;
-- Cruzamento cartesiano no caso acima..