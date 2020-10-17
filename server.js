// import
const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

// configuration
const app = express();
const db = config.get('mongoURL')
const port = process.env.PORT || 5000

// routes

// Middleware

// Run nodejs App
app.listen(port, console.log(`Listening to port ${port}`))

// Connect to Mongodb
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));
