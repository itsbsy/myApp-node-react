const mongoose = require('mongoose');


const connection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/testDb");
        console.log("Connected sucessfully")
    } catch (error) {
        console.log(error)
    }
}
connection();
module.exports = mongoose;