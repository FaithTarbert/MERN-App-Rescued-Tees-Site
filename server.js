
require('dotenv').config();
const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors');
const path = require('path');

//connect to mdb cloud (AFTER ALL ROUTES TESTED)
mongoose.connect(process.env.DB_URI,  {
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then((res) => console.log('db connected!'))
    .catch((err) => console.log(err));

app.use(cors());
//this middleware allows us to use json in an element like get/post etc.
app.use(express.json());

//require routes file
const teesRouter = require('./routes/routes');
app.use('/', teesRouter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.listen(process.env.PORT || 5000);