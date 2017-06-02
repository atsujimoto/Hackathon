var express = require('express');
var Project = require('../models/project');
var router = express.Router();

//Add a new project
router.post('/', function(req, res) {
    Project.findOne({ email: req.body.email }, function(err, project) {
        if (project) return res.status(400).send({ message: 'Email already exists' });

        Project.create(req.body, function(err, project) {
            if (err) return res.status(500).send(err);

            return res.send(project);
        });
    });
});

//Get all projects. Need to add 'where' based on campus/class/tech
router.post('/search', function(req, res) {
    Project.find(req.body, function(err, projects) {
        if (err) return res.status(500).send(err);

        return res.send(projects);
    });
});

router.route('/:id')
    //Get a single project
    .get(function(req, res) {
        Project.findById(req.params.id, function(err, project) {
            if (err) return res.status(500).send(err);

            return res.send(project);
        });
    })
    //Edit a project
    .put(function(req, res) {
        Project.findByIdAndUpdate(req.params.id, req.body, { new: true}, function(err, result) {
            if (err) return res.status(500).send(err);

            return res.send(result);
        });
    })
    //Delete a project
    .delete(function(req, res) {
        Project.findByIdAndRemove(req.params.id, function(err) {
            if (err) return res.status(500).send(err);

            res.send('Project Deleted');
        });
    });

module.exports = router;
