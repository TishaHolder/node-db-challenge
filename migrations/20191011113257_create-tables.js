//we always want to create a table with a primary key before the table that references it with a foreign key
exports.up = function(knex) {

    return knex.schema

    //projects table
    .createTable('projects', tbl => {
        //primary key
        tbl.increments();

        tbl.string('project_name', 255)
        .unique()
        .notNullable();

        tbl.text('description');

        tbl.boolean('completed')
        .defaultTo(false)
        .notNullable();
    })

    //tasks table
    .createTable('tasks', tbl => {
        //primary key
        tbl.increments();

        tbl.string('description', 255)
        .notNullable();

        tbl.text('notes');

        tbl.boolean('completed')
        .defaultTo(false)
        .notNullable();

        //foreign key references id in projects table
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

    })

    //resources table
    .createTable('resources', tbl => {

        //primary key
        tbl.increments();

        tbl.string('resource_name', 255)
        .unique()
        .notNullable();

    })

    //project_resources table
    .createTable('project_resources', tbl => {

        //primary key
        tbl.increments();

        //project table foreign key
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

        tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');      
        
        tbl.text('description');
       
        //will enforce unique combination of keys
        tbl.unique(['project_id', 'resource_id']); 

    })  
  
};

//We always want to drop a table with a foreign key before dropping the table it references.
exports.down = function(knex) {

    //drop in the opposite order
    return knex.schema
    //drop FK table first then PK table     
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
  
};
