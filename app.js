const express = require('express') ;
var expressLayouts = require('express-ejs-layouts');
const app = express() ; 






app.set('view engine','ejs') ; 
app.use(expressLayouts);

app.get('/', function (req, res) {
    res.render('main-menu',{layout:'layouts/Navbar'}) ; 
  }) ; 




app.listen(3000, () =>{
    console.log("Server Berjalan di 3000");
})