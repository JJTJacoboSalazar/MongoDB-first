require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { MONGODB_URI } = process.env;
const app = express();
const port = 3000;
const userRouter = require('./routes/user');

// Middleware
app.use(express.json());
app.use('/api', userRouter );

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error(err));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


// npm install express --save
// npm install -g nodemon
// nodemon index.js