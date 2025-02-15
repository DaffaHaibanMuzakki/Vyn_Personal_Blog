const mongoose = require("mongoose"); 
const Otp = mongoose.model('Otp',{
    email: { type: String, required: true },
    username : { type: String, required: true } , 
    password : { type: String, required: true } ,
    otp: { type: String, required: true },
    createdAt: { 
        type: Date, 
        default: Date.now, 
        expires: 60 // Expire after 60 seconds (1 minute)
    } 
});

module.exports = Otp ;