exports.up = knex => knex.schema.createTable("movie_tags", table => {
    table.increments("id");
    table.text("tag_name");
    table.integer("movie_notes_id").references("id").inTable("movie_notes").onDelete("CASCADE");
    table.integer("user_id").references("id").inTable("users");
  });
  
  exports.down = knex => knex.schema.dropTable("movie_tags", table => {
    
  });
  