require('dotenv').config;
const mongoose = require('mongoose');

const mongoDB = process.env.DB_URI;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = global.Promise;
const db =  mongoose.connection;
db.on('error', console.error.bind(console,'MONGODB connection error:'));