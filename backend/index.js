const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')

const app = express()

// ✅ CORS Configuration (Multiple Origins Allow)
const allowedOrigins = [
    process.env.FRONTEND_URL,  // Localhost (5173)
    "https://trendy-fashion-hub-5mof.onrender.com"  // Render Live URL
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api", router)

const PORT = process.env.PORT || 8095

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("✅ Connected to DB")
        console.log(`🚀 Server is running on PORT ${PORT}`)
    })
})
