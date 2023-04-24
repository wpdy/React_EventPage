const mongoose = require('mongoose');

const Event = mongoose.model('Event', new mongoose.Schema({
    title: { 
        type: String, 
        required: true
    }, 
    description: { 
        type: String, 
        required: true
    }, 
    img: { 
        type: String, 
        required: true
    }, 
    starting_date: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: { 
        type: Date, 
        default: Date.now
    }, 
}))

module.exports = Event; 