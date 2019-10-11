// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/projects.db3'
    },
    useNullAsDefault: true,

  },

  //generates migration files in data/migrations folder
  //location is in relation from the root
  migrations: {
    directory: './data/migrations'
  },

  //generates seed files in data/seeds folder
  //location is in relation from the root
  seeds: {
    directory: './data/seeds'
  },

  //needed when using foreign keys
  //to prevent users from entering bad data into a FK column
  pool: {
    afterCreate: (conn, done) => {
     //runs after a connection is made to the sqlite engine
     //turn on FK enforcement
     //enforces foreign key constraints on SQLite, not needed for other DBMSs
     conn.run('PRAGMA foreign_keys = ON', done);    
    },
  } 
  

};
