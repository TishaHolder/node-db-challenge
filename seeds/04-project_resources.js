
exports.seed = function(knex) {
  //***********GET RID OF COMMENTED OUT SECTION AFTER IMPLMENTING 00-CLEANUP FILE
  // Deletes ALL existing entries
  //return knex('project_resources').del()
    //.then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {project_id: 1, resource_id: 4, description: 'lots of it'},
        {project_id: 1, resource_id: 11, description: 'gonna need this for sure'},
        {project_id: 1, resource_id: 12, description: 'this too'},

        {project_id: 2, resource_id: 1, description: 'every day'},
        {project_id: 2, resource_id: 3, description: 'bother her'},
        {project_id: 2, resource_id: 8, description: 'study daily'},

        {project_id: 3, resource_id: 2, description: 'get a new one'},
        {project_id: 3, resource_id: 6, description: 'find some good videos'},
        {project_id: 3, resource_id: 9, description: 'drink lots of it'},

        {project_id: 4, resource_id: 5, description: 'faster the better'},
        {project_id: 4, resource_id: 7, description: 'ask questions'},
        {project_id: 4, resource_id: 10, description: 'take one every day'},

        {project_id: 5, resource_id: 1, description: 'sign on every day'},
        {project_id: 5, resource_id: 2, description: 'get a new one'},
        {project_id: 5, resource_id: 12, description: 'will power'},

        {project_id: 6, resource_id: 1, description: 'ask questions if you get stuck'},
        {project_id: 6, resource_id: 2, description: 'its a must'},
        {project_id: 6, resource_id: 3, description: '20 minute rule'},
        
      ]);
    //});
};