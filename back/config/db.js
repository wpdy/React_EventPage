

const mongoose = require('mongoose');

// mongoose.set('strictQuery', true)

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB);
        console.log(`Connected to MongoDB ${conn.connection.host}`)
    } catch (err) {
        console.error('Could not connect to MongoDB...', err)
    }
}


module.exports = connectDB;