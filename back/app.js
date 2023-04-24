



require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = require('./config/db');
connectDB();

const express = require('express');
const app = express();
app.use(express.json());

const  {
    setEvent,
    getEvents
} = require('./controllers/EventController');


// app.post('/api/user/login', loginUser);
app.post('/api/events', setEvent);
app.get('/api/events', getEvents);
// app.post('/api/transactions', setTransactions);


app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on PORT ${process.env.PORT}`)
});