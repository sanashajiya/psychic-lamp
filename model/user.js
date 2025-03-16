const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({  // Use 'new mongoose.Schema'
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (value) => {
                const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
                return re.test(value);
            },
            message: "Please enter a valid email address",
        },
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;

