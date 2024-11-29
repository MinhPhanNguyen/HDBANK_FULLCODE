const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const User = require("../models/userModel"); // Import userModel
const { body, validationResult } = require("express-validator");

// Middleware validate
const validateRegister = [
    body("email").isEmail().withMessage("Email không hợp lệ!"),
    body("password")
        .isLength({ min: 8, max: 30 })
        .withMessage("Password phải từ 8-30 ký tự!")
];

const validateLogin = [
    body("email").isEmail().withMessage("Email không hợp lệ!"),
    body("password").notEmpty().withMessage("Password không được để trống!"),
];

const registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email đã được sử dụng!" });
        }

        const newUser = new User({ email, password });
        await newUser.save();
        res.status(201).json({ message: "Đăng ký thành công!", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Mật khẩu từ 8 - 30 ký tự", error: error.message });
    }
};

// Đăng nhập người dùng
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Kiểm tra xem email có tồn tại không
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Email không tồn tại!' });
        }

        // So sánh mật khẩu đã nhập với mật khẩu trong cơ sở dữ liệu
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Mật khẩu không đúng!' });
        }


        // Tạo token và gửi phản hồi về
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

        res.status(200).json({ message: 'Đăng nhập thành công!', token });
    } catch (error) {
        res.status(500).json({ message: 'Đăng nhập thất bại. Vui lòng kiểm tra tài khoản hoặc mật khẩu', error: error.message });
    }
};

module.exports = { registerUser, loginUser, validateRegister, validateLogin };
