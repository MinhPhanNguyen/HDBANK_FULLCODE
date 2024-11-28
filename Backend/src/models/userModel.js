const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        email: { 
            type: String, 
            required: true, 
            unique: true, 
            match: [
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                "Email không hợp lệ"
            ],
        },
        password: { 
            type: String, 
            required: true, 
            match: [
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/,
                "Password phải từ 8-30 ký tự, bao gồm chữ thường, chữ hoa, số và ký tự đặc biệt"
            ],
        },
    },
);

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);  // So sánh mật khẩu
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
