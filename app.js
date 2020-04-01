import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
// import morgan from 'morgan';
import config from './config';


app.use(bodyParser, JSON())


const db = require('./config').MONGO_URI

mongoose.connect(db)
    .then(() => console.log("database is connected!!!!"))
    .catch((err) => console.log(err))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server started on port ${port} `))