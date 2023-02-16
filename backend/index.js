const express = require('express');
const bodyParser =require('body-parser');
const routesHandler = require('./routes/handler.js');
const mongoose = require('mongoose');
require('dotenv/config');


const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesHandler);


//DB connection
mongoose.connect(process.env.DB_URI)
.then(() => {
    console.log('DB Connected');
})
.catch( (err) => {
    console.log(err);
});
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
app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}.`);
});


