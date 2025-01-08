const express = require('express') ;
var expressLayouts = require('express-ejs-layouts');
const mongoose  = require('mongoose') ; 
const app = express() ; 
const Article = require('./Scheme/ArticleData.js');


//UTILITY
const CurrentTime = require("./Utility/currentTimeData.js") ; 
const pickTheNewest = require('./Utility/pickThenews.js') ; 
const generateArticle = require('./Utility/randomArticle.js') ;
require('./Utility/db.js') ; 





const Artikel1 = new Article({
  title: "WILL ROBOT TAKE US JOB IN THE FUTURE ON ?" ,
  time : {
    date : 1,
    month : 12,
    year : 2029
} ,
  categories : "science",
  image: {
    imgName : "MISAL",
    url : "./Public/Alan_Watts.png"
  },
  content : "Lorem ipsum adalah kata-kata yang berasal dari italia yang berarti bahwa lorem adalah itu dan ipsum adalah itu",
  writer : "John",
  description : "Derskripsi ini tidak berguna karena ini hanyalah pajangan belaka"
})





app.use(express.static('public'));
app.set('view engine','ejs') ; 
app.use(expressLayouts);

app.get('/', async function (req, res) {
    const latestArticle=  await Article.find().then(e => pickTheNewest(e)) ;
    const generate_article = await Article.find().then(e => generateArticle(e) ) ; 
    res.render('main-menu',{layout:'layouts/Navbar' , latestArticle , generate_article  }) ; 
  }) ; 
  
  
app.get('/categories/:title_categories', async function (req, res) {
  
  res.render('categories',{layout:'layouts/Navbar', title_categories : req.params.title_categories}) ; 
  }) ; 


app.get('/login', async function (req, res) {
    
  }) ; 




app.listen(3000, () =>{
    console.log("Server Berjalan di 3000");
})