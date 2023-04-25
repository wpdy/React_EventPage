const Event = require('../models/Event')
const asyncHandler = require('express-async-handler');


// @desc Get Events
// @route GET /api/events
// @access PUBLIC

const getEvents = asyncHandler( async (req, res) => {
    const events = await Event.find();
    res.status(200).json(events)
});


// @desc Set Events
// @route POST /api/events
// @access PUBLIC

const setEvent = asyncHandler( async (req, res) => {

    // if(!req.body.title || !req.body.description || !req.body.img || !req.body.starting_date || !req.body.price){
    //     res.status(400) 
    //     throw new Error("Please fill all fields"); 
    // }
  
   const event = await Event.create({
        title: req.body.title,
        description: req.body.description,
        img: req.body.img,
        starting_date: req.body.starting_date,
        price: req.body.price,
        date: req.body.date
   })
    res.status(200).json(event);

});

module.exports = {
    setEvent,
    getEvents
}