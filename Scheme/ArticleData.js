const mongoose = require("mongoose"); 
const Article = mongoose.model('Article',{
    
    categories : {
        type : String 
    },

    description : {
        type : String
    },

    title : {
        type : String 
    } ,
    time :  {
        date : { type : String} ,
        month : {type: String},
        year : {type: String} 
    } , 
     image:  {
       imgName : {type: String},
       url : {type:String},

    },

    content : {
        type : String
    },

    writer : {type : String}

})

module.exports = Article ;