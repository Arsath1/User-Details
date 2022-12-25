const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const userSchema = new Schema({
    first_name: {
        type : String,
        require: true
    },
    last_name: {
        type : String,
        require: true
    },
    phoneNo:{
        type: Number,
        require: true

    }

        
    

})

const User = mongoose.model("User", userSchema);

module.exports = User;