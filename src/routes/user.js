const express = require('express');
const router = express.Router();

// create a new user
router.post('/users', (req, res) => {
    res.send('Creating a new user');
});



module.exports = router;