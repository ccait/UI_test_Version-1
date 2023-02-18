const express = require('express');
const bodyParser =require('body-parser');
const routesHandler = require('./controllers/handler.js');
const mongoose = require('mongoose');
const connectDB = require('./config/DbConnect');
require('dotenv/config');


// Connect to MongoDB
connectDB();

//TODO: User / Admin Login?
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// routes
app.use('/', routesHandler);


/*
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'frontend/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'frontend/build', routesHandler));
    });
}
*/



const PORT = process.env.PORT || 4000;
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});


