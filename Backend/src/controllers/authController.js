const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel"); // Import userModel

// Đăng ký tài khoản mới
const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Kiểm tra xem email đã tồn tại hay chưa
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email đã được sử dụng!" });
        }

        // Hash mật khẩu trước khi lưu vào DB
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Mật khẩu đã mã hóa:", hashedPassword);  // Log mật khẩu đã mã hóa

        // Tạo user mới
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "Đăng ký thành công!", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Có lỗi xảy ra!", error: error.message });
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
        console.log("Mật khẩu có khớp không:", isMatch);  // Log kết quả so sánh
        if (!isMatch) {
            return res.status(400).json({ message: 'Mật khẩu không đúng!' });
        }


        // Tạo token và gửi phản hồi về
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

        res.status(200).json({ message: 'Đăng nhập thành công!', token });
    } catch (error) {
        res.status(500).json({ message: 'Có lỗi xảy ra!', error: error.message });
    }
};

module.exports = { registerUser, loginUser };
