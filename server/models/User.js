const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    orders: []
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const hashSlingingSlasher = 10;
        this.password = await bcrypt.hash(this.password, hashSlingingSlasher)
    };

    next();
});

userSchema.methods.isCorrectPassord = async function (password) {
    return bcrypt.compare(password, this.password)
};

const User = model('user', userSchema);

module.exports = User;