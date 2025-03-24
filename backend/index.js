const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

app.use(cors({
    origin: [process.env.FRONTEND_URL, "https://trendy-fashion-frontend.onrender.com"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json()); 
app.use(cookieParser());

app.use("/api", router); 

const PORT = process.env.PORT || 8095;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log("✅ Connected to DB");
            console.log(`🚀 Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error("❌ Database connection failed", err);
    });
