//create_table.js
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists("evento", (table) => {
        table.increments("id_evento");
        table.string("descricao_evento").notNullable();
        table.date("data_evento").notNullable();
    }).createTableIfNotExists("participante", (table) => {
        table.increments("id_participante");
        table.string("nome_participante").notNullable();
    }).createTableIfNotExists("evento_participante", (table) => {
        table.integer("id_evento").references("evento.id_evento");
        table.integer("id_participante").references("participante.id_participante");
        table.primary(["id_evento", "id_participante"]);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("evento_participante")     //útlima criada então primeira a ser removida...
        .dropTable("participante")
        .dropTable("evento");
};
