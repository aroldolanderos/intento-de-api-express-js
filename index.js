const express = require('express')
const bodyParser = require('body-parser')
const usersApiRouter = require('./routes/api/users')
const productsApiRouter = require('./routes/api/products')

// app
const app = express();

// middlewares
app.use(bodyParser.json())

// routes
app.use('/api/users', usersApiRouter)
app.use('/api/products', productsApiRouter)

// redirect
app.get('/', function(req, res) {
    req.redirect('/api/products')
})

const server = app.listen(8000, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
});
