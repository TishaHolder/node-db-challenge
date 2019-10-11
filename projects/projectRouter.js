//import express
const express = require('express');

//create project router
const projectRouter = express.Router();

//import the data access files
const projectDB = require('./projectModel.js');


/**************************************END POINTS***************************/

//get all projects
projectRouter.get('/', (req, res) => {

    projectDB.getProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(error => {
        res.status(500).json({ error: 'There was an error retrieving the projects from the database.'})
    })

})

projectRouter.get('/:id', (req, res) => {

    const { id } = req.params;

    projectDB.getProjectById(id)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(error => {
        res.status(500).json({ error: 'There was an retrieving the project from the database.'})
    })
})

//add a project
projectRouter.post('/', (req, res) => {

    projectDB.addProjects(req.body)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(error => {
        console.log("create project error", error);
        res.status(500).json({ error: 'There was an error adding the project to the database.' })
    })

})


//get tasks
projectRouter.get('/:id/tasks', (req, res) => {

    const { id } = req.params;

    projectDB.getProjectTasks(id)
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(error => {
        res.status(500).json({ error: 'There was an error retrieving the tasks for that projejct.'})
    })

})

//add a project task
projectRouter.post('/:id/tasks', (req, res) => {

    const { id } = req.params;
    const task = req.body;

    task.project_id = id; //assign the id in parameter to the project_id foreign key in tasks
    
    projectDB.addTasks(id, task)
    .then(task => {
        res.status(200).json(task);
    })
    .catch(error => {
        res.status(500).json({ error: 'There was an error adding the task to the database.'})
    })

})

//get resources
projectRouter.get('/:id/resources', (req, res) => {

    const { id } = req.params;

    projectDB.getResources(id)
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(error => {
        console.log("get resources error", error);
        res.status(500).json({ error: 'There was an error retrieving the resources for this project.'});
    })

})

//add resources
projectRouter.post('/:id/resources', (req, res) => {

    const {id} = req.params;
    const resource = req.body;
    
    projectDB.addResources(id, resource)
    .then(resource => {
        res.status(200).json(resource);
    })
    .catch(error => {
        console.log("add resources error", error);
        res.status(500).json({ error: 'There was an error adding the resource for this project.'});
    })

})

//export router
module.exports = projectRouter;