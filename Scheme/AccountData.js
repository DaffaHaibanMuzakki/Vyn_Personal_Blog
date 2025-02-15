const mongoose = require("mongoose"); 
const Account = mongoose.model('Account',{
    email : {type : String},
    name : {type : String} ,
    password : {type : String},
    createdAt : {type: Date },
    role : {type: String}
})

module.exports = Account ;