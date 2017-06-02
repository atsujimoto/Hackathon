var express = require('express');
var Project = require('../models/project');
var router = express.Router();

//Add a new project
router.post('/', function(req, res) {
    var userId = req.user.id
    res.send('test');
    Project.create({
        title: req.body.title,
        description: req.body.description,
        github: req.body.github,
        startDate: req.body.startDate,
        deliverableDate: req.body.deliverableDate,
        compensation: req.body.compensation,
        technologies: req.body.technologies,
        keywords: req.body.keywords,
        relatedClasses: req.body.relatedClasses,
        creator: userId
    }, function(err, project) {
        if (err) return res.status(500).send(err);

        res.send(project);
    });
});

//Get all projects. Need to add 'where' based on campus/class/tech
router.post('/search', function(req, res) {
    Project.find(req.body, function(err, projects) {
        if (err) return res.status(500).send(err);

        res.send(projects);
    });
});

router.route('/:id')
    //Get a single project
    .get(function(req, res) {
        Project.findById(req.params.id, function(err, project) {
            if (err) return res.status(500).send(err);

            res.send(project);
        });
    })
    //Edit a project
    .put(function(req, res) {
        Project.findByIdAndUpdate(req.params.id, req.body, { new: true}, function(err, result) {
            if (err) return res.status(500).send(err);

            res.send(result);
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
