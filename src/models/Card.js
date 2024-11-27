const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema ({
    CardId :{
        typeof: 'string',
        required: true,
        unique: true,
    },

    CardType : {
        typeof: 'string',
        required: true,
        enum: ['MasterCard', 'Visa', 'American Express']
    },

    CardNumber : {
        typeof: 'string',
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 20
    }
})

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;