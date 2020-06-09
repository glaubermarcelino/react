import Knex from 'knex'

export async function up(knex:Knex){
return knex.schema.createTable('point_items', table =>{
            table.increments('id').primary();
            table.integer('point_id')
                .notNullable()
                .references('id')
                .inTable('points');
            table.integer('item_id')
                    .references('id')
                    .inTable('items')
                    .notNullable();
        });
}
export async function down(knex: Knex){
    //Deve ser utilizado para Rollback
    return knex.schema.dropTable('point_item');
}