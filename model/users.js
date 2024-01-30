const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    age: {
        type: Number,
        min: 0,
    },
});
userSchema.add({ createdAt: { type: Date, default: Date.now.getTime } });
userSchema.add({ updatedAt: { type: Date, default: Date.now.getTime } });

// Define a pre-save hook to update updatedAt
userSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});
const User = mongoose.model('User', userSchema);
module.exports = User;