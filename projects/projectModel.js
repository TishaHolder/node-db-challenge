//import express
const express = require('express');

//import development object
const db = require('../data/dbConfig.js');

//export CRUD methods
module.exports = {
    getProjects,
    getProjectById,
    addProjects,
    getProjectTasks,
    addTasks,
    getResources,
    getResourcesById,
    addResources
};


//methods to perform CRUD operations

function getProjects(){

    return db('projects');

}

function getProjectById(id){

    return db('projects')
    .where({'projects.id': id})
    .first();

}

function addProjects(project){

    return db('projects')
    //'id' tells the database to retun the id after it inserts the record 
    //important for postgres
    .insert(project, 'id')
    .then( ([id]) => {//insert returns id of the newly inserted row inside [] - the [] extracts the id from the array
       return getProjectById(id); //returns the newly added record instead of the id to the end point       
    })
    .catch(error => {
        console.log("project insert error", error);
    })
}

function getProjectTasks(id){

    

    return db('projects')
    .join('tasks', 'projects.id', '=', 'tasks.project_id')
    .where({'projects.id': id})
    .select('projects.project_name', 'projects.description', 'tasks.id', 'tasks.description as task_description', 'tasks.notes', 'tasks.completed');    

}

function addTasks(id, task){

    return db('tasks')        
    .insert(task, 'id')    
    .then( ([id]) => {
        return getTasksById(id);        
    })
    .catch(error => {
        console.log("task insert error", error);
    })
    
}

function getTasksById(id){

    return db('tasks')
    .where({ 'tasks.id': id})
    .first();

}

function getResources(id){

    return db('projects')
    .where({'projects.id': id})
    .join('project_resources', 'projects.id', '=', 'project_resources.project_id')
    .join('resources', 'resources.id', '=', 'project_resources.resource_id')    
    .select('projects.project_name', 'resources.resource_name', 'project_resources.description');
}

function addResources(projectIdIn, resource){

    return db('resources')    
    //extract the resource name field from the resource passed in and assign it to resource_name in the
    //resources table
    .insert({ resource_name: resource.resource_name })    
    .then( ([id]) => {
        //can't put return db here or it will throw an error that description is not a resources field
        //because return ends the execution of the block and does not pass on the description to the project_resources
        //select call
        db('project_resources') //can't put return here
        .insert({ project_id: projectIdIn, resource_id: id, description: resource.description})
        .then( ([id]) => {
            console.log("resources id", id);
            getResourcesById(id)
           
        })    
        
        
    })

}

function getResourcesById(id){

    return db('resources')
    .where({ 'resources.id': id })
    .first();

}