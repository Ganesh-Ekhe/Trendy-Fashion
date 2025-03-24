const mongoose = require("mongoose");

async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Database connection failed: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
}

module.exports = connectDB;
