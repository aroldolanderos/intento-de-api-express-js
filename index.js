const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer(); // Para datos tipo multipart/form-data
const usersApiRouter = require('./routes/api/users');
const productsApiRouter = require('./routes/api/products');
const mongo = require("./db/connect");

async function initDB(){
    const db = await mongo.connect();
    if (db) {
        const server = app.listen(8000, function() {
            console.log(`Listening http://localhost:${server.address().port}`);
        });
    }
}


// app
const app = express();

// middlewares
app.use(bodyParser.json()); // Para datos tipo application/json
app.use(bodyParser.urlencoded({ extended: true })); // Para datos tipo application/x-www-form-urlencoded

// routes
app.use('/api/v1/users', upload.array(), usersApiRouter);
app.use('/api/v1/products', upload.array(), productsApiRouter);

// redirect
app.get('/', function(req, res) {
    res.redirect('/api/products')
});

initDB();


