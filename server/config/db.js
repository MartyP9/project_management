const mongoose = require('mongoose');

const connectDB = async()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`MongoDB connected ${conn.connection.host}`.cyan.underline.bold)
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
};

module.exports = connectDB;