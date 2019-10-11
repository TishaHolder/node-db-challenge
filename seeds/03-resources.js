
exports.seed = function(knex) {
  //***********GET RID OF COMMENTED OUT SECTION AFTER IMPLMENTING 00-CLEANUP FILE
  // Deletes ALL existing entries
  //return knex('resources').truncate()
    //.then(function () {
      // Inserts seed entries
      return knex('resources').insert([

        {resource_name: 'slack'},//1
        {resource_name: 'laptop'},//2
        {resource_name: 'team lead'},//3
        {resource_name: 'coffee'},//4
        {resource_name: 'wifi'},//5
        {resource_name: 'youtube'},//6
        {resource_name: 'stack overflow'},//7
        {resource_name: 'training kit'},//8
        {resource_name: 'water'},//9
        {resource_name: 'vitamins'},//10
        {resource_name: 'patience'},//11
        {resource_name: 'determination'},//12

      ]);
    //});
};