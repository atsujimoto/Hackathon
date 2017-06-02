var express = require('express');
var User = require('../models/user');
var router = express.Router();

//Add a new user
router.post('/', function(req, res) {
    User.findOne({ email: req.body.email }, function(err, user) {
        if (user) return res.status(400).send({ message: 'Email already exists' });

        User.create(req.body, function(err, user) {
            if (err) return res.status(500).send(err);

            return res.send(user);
        });
    });
});

//Get all users. Need to add 'where' based on campus/class/tech
router.post('/search', function(req, res) {
    User.find(req.body, function(err, users) {
        if (err) return res.status(500).send(err);

        return res.send(users);
    });
});

router.route('/:id')
    //Get a single user
    .get(function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err) return res.status(500).send(err);

            return res.send(user);
        });
    })
    //Edit a user
    .put(function(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, { new: true}, function(err, result) {
            if (err) return res.status(500).send(err);

            return res.send(result);
        });
    })
    //Delete a user
    .delete(function(req, res) {
        User.findByIdAndRemove(req.params.id, function(err) {
            if (err) return res.status(500).send(err);

            res.send('User Deleted');
        });
    });

module.exports = router;
