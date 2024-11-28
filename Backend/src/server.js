const express = require("express");
const cors = require('./middleware/cors');  
const { loginUser, registerUser } = require("./controllers/authController");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const cardRoutes = require("./routes/cardRoutes");

const app = express();

// Kết nối MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (err) {
        console.error("MongoDB connection failed:", err.message);
        process.exit(1);
    }
};
connectDB();

// Middleware
app.use(cors); // Để gọi API từ frontend
app.use(express.json()); // Xử lý JSON payload
app.use(express.urlencoded({ extended: true })); // Xử lý URL-encoded payload
app.post('/api/auth/login', loginUser);  
app.post('/api/auth/signup', registerUser);  

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/card", cardRoutes);

// Cổng server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
