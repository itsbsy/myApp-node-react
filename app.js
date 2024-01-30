const express = require('express');
const mongoose = require('./dbConn')
const mainRoutes = require('./routes/index');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
const port = 3000
app.listen(port, ()=> {
    console.log(`Your server is up on port ${port}`)
}
)

app.use('/', mainRoutes);
