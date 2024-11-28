const mongoose = require("mongoose");
const winston = require("winston");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        winston.info("MongoDB Connected"); // Ghi log khi kết nối thành công
    } catch (err) {
        winston.error(`Error: ${err.message}`);
        process.exit(1); // Dừng ứng dụng nếu không kết nối được
    }
};

module.exports = connectDB;
