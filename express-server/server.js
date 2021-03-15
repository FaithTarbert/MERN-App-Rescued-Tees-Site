
require('dotenv').config();
const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors');

//connect to mongodb locally (FIRST)
// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// const db = mongoose.connection;
// db.on('error', (error) => console.error(error));
// db.once('open', () => console.log('Connected To Database'));

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
const teesRouter = require('./routes/tees');
app.use('/tees', teesRouter);


// app.listen(3000, () => console.log('Server Started On Port 3000'));

app.listen(process.env.PORT || 3000);