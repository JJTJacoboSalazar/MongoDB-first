const express = require('express');
const router = express.Router();
const userSchema = require('../models/user');

// create a new user
router.post('/users', (req, res) => {
    const user = new userSchema(req.body);
    user
    .save()
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// get all users

router.get('/users', (req, res) => {
    userSchema.find()
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// get a user by id

router.get('/users/:id', (req, res) => {
    userSchema.findById(req.params.id)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// update a user by id

router.put('/users/:id', (req, res) => {
    userSchema.findByIdAndUpdate(req.params.id, 
    req.body, { new: true })
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
}
);

// delete a user by id

router.delete('/users/:id', (req, res) => {
    userSchema.findByIdAndDelete(req.params.id)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});



module.exports = router;