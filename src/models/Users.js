const mongoose = requure('mongoose');

const UserShema = new mongoose.Shema({
    Id :{
        typeof: 'string',
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 20
    },

    Username : {
        typeof: 'string',
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 20
    },

    Password : {
        typeof: 'string',
        required: true,
        minlength: 8,
        maxlength: 200
    },

    Email : {
        typeof: 'string',
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },

    Numberphone : {
        typeof: 'string',
        required: true,
        unique: true,
        match: /^\+?\d{1,4}\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/
    },

    CreatedAt: {

    }
});

const User = mongoose.model('User',UserShema);

module.exports = User;