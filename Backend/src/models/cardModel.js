const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const CardSchema = new mongoose.Schema({
    cardNumber: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    expiryDate: { type: String, required: true },
    cvv: { type: String, required: true },
});

CardSchema.pre("save", async function (next) {
    if (!this.isModified("cvv")) return next();
    this.cvv = await bcrypt.hash(this.cvv, 10);
    next();
});
// chua lam toi cai nay
module.exports = mongoose.model("Card", CardSchema);
