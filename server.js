const express = require('express');
// const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bk = require('./routes/bookRoutes')
const errorHandler = require('./errorHandler');
const app = express();

app.use(bodyParser.json())

const db = require('./config').MONGO_URI

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("database is connected!!!!"))
    .catch((err) => console.log(err))


app.use('/books', bk, errorHandler)
app.use('*', (req, res) => res.status(404).send({ result: 'api route not found' }));

const port = process.env.PORT || 8088

app.listen(port, () => console.log(`server started on port ${port} `))