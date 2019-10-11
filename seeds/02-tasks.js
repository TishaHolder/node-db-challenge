
exports.seed = function(knex) {
  //***********GET RID OF COMMENTED OUT SECTION AFTER IMPLMENTING 00-CLEANUP FILE
  // Deletes ALL existing entries
  //return knex('tasks').truncate()
    //.then(function () {
      // Inserts seed entries
      return knex('tasks').insert([

        {description: 'sleepless nights', notes: 'this is gonna suck', completed: false, project_id: 1},//1
        {description: 'get rich', notes: 'really looking forward to this', completed: false, project_id: 1},//1
        {description: 'be happy', notes: 'the dream', completed: false, project_id: 1},//1

        {description: 'redo all react assignments', notes: 'start asap', completed: false, project_id: 2},//2
        {description: 'start a personal react project', notes: 'start this asap too', completed: false, project_id: 2},//2
        {description: 'add react projects to portfolio', notes: 'in progress', completed: false, project_id: 2},//2
        
        {description: 'redo all js assignments', notes: 'start asap', completed: false, project_id: 3},//3
        {description: 'start a personal js project', notes: 'start this asap too', completed: false, project_id: 3},//3
        {description: 'add js projects to portfolio', notes: 'in progress', completed: false, project_id: 3},//3

        {description: 'redo all node assignments', notes: 'start asap', completed: false, project_id: 4},//4
        {description: 'start a personal node project', notes: 'start this asap too', completed: false, project_id: 4},//4
        {description: 'add node projects to portfolio', notes: 'in progress', completed: false, project_id: 4},//4

        {description: 'redo all html assignments', notes: 'start asap', completed: true, project_id: 5},//5
        {description: 'start a personal html project', notes: 'start this asap too', completed: true, project_id: 5},//5
        {description: 'add html projects to portfolio', notes: 'in progress', completed: true, project_id: 5},//5

        {description: 'do my best during sprint challenge', notes: 'start asap', completed: true, project_id: 6},//6
        {description: 'manage my time well', notes: '20 minute rule', completed: true, project_id: 6},//6
        {description: 'recheck work', notes: 'in progress', completed: true, project_id: 6},//6
        
      ]);
    //});
};