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
        password: { type: String, required: true },
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
    console.log('Mật khẩu nhập vào:', enteredPassword); // Log mật khẩu nhập vào
    console.log('Mật khẩu trong cơ sở dữ liệu:', this.password); // Log mật khẩu trong cơ sở dữ liệu
    return await bcrypt.compare(enteredPassword, this.password);  // So sánh mật khẩu
};



const User = mongoose.model("User", UserSchema);

module.exports = User;