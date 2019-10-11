
exports.seed = function(knex) {
  //***********GET RID OF COMMENTED OUT SECTION AFTER IMPLMENTING 00-CLEANUP FILE
  // Deletes ALL existing entries
  //return knex('projects').truncate()
    //.then(function () {
      // Inserts seed entries
      return knex('projects').insert([

        {project_name: 'take over the world', description: 'devise a plan to rule the world', completed: false}, //1
        {project_name: 'conquer react', description: 'devise a plan to conquer react', completed: false}, //2
        {project_name: 'conquer javascript', description: 'devise a plan to conquer javascript', completed: false}, //3
        {project_name: 'conquer node', description: 'devise a plan to conquer node', completed: false}, //4
        {project_name: 'conquer html', description: 'devise a plan to conquer html', completed: true}, //5
        {project_name: 'finish this sprint', description: 'devise a plan to finish this sprint', completed: true}, //6
        
      ]);
    //});
};
