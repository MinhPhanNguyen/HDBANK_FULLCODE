const mongoose = require('mongoose')

const DiscountSchema = new mongoose.Schema ({
    IdDiscount : {
        type: String,
        required: true,
        unique: true,
    },

    TitleDiscount : {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },

    DescriptionDiscount : {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 256,
    }
})

const Discount = mongoose.model('Discount', DiscountSchema)

module.exports = Discount