const express = require('express');
var expressLayouts = require('express-ejs-layouts');
const mongoose  = require('mongoose') ; 
const methodOverride = require('method-override');
const app = express() ; 
const Article = require('./Scheme/ArticleData.js');
const Account = require('./Scheme/AccountData.js');
const bcrypt = require('bcrypt')
const multer = require('multer');
const path = require('path') ;
const nodemailer = require("nodemailer");
const otpGenerator = require('otp-generator') ;
const Otp = require('./Scheme/OtpData.js') ;
const express_session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash') ; 
const storage = multer.diskStorage({
  destination : (req,file,cb) =>{
    
    cb(null, './public/images')
  },
  filename: (req, file, cb) => {
    
    cb(null,file.originalname);
}
}) ;


app.use(cookieParser('secret')) ; 
app.use(flash());
app.use(express_session({
  secret: 'your_secret_key', 
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 1000 }
}));

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "daffahaibanmuzakki@gmail.com",
    pass: "xwnu kzus mzji clrj",
  },
});
const upload = multer({storage: storage})

//UTILITY
const CurrentTime = require("./Utility/currentTimeData.js") ; 
const pickTheNewest = require('./Utility/pickThenews.js') ; 
const generateArticle = require('./Utility/randomArticle.js') ;
const pagination = require('./Utility/pagination.js') ;
const TitleLink = require('./Utility/makeTitleLink.js') ;
const { name } = require('ejs');
const { log } = require('console');
const { url } = require('inspector');
const { writer } = require('repl');
require('./Utility/db.js') ; 






// const Artikel1 = new Article({
//   title: "WILL ROBOT TAKE US JOB IN THE FUTURE ON ?" ,
//   time : {
//     date : 1,
//     month : 12,
//     year : 2029
// } ,
//   categories : "science",
//   image: {
//     imgName : "MISAL",
//     url : "./Public/Alan_Watts.png"
//   },
//   content : "Lorem ipsum adalah kata-kata yang berasal dari italia yang berarti bahwa lorem adalah itu dan ipsum adalah itu",
//   writer : "John",
//   description : "Derskripsi ini tidak berguna karena ini hanyalah pajangan belaka"
// })





app.use(express.static('public'));
app.set('view engine','ejs') ; 
app.use(expressLayouts);
app.use(express.urlencoded()) ;
app.use(methodOverride('_method')); 


app.get('/', async function (req, res) {
    const latestArticle=  await Article.find().then(e => pickTheNewest(e , 4)) ;
    const articleLink1 = TitleLink(latestArticle) ;
    console.log("terbaruu");
    console.log(latestArticle);
    const generate_article = await Article.find().then(e => generateArticle(e) ) ;
    
    const articleLink2 = TitleLink(generate_article) ; 
    console.log(articleLink2);
    res.render('main-menu',{layout:'layouts/Navbar' , latestArticle , generate_article, articleLink1, articleLink2  }) ; 
  }) ; 

app.get('/menu2', async function (req, res) {
    const latestArticle=  await Article.find().then(e => pickTheNewest(e , 4)) ;
    const articleLink1 = TitleLink(latestArticle) ;
    console.log("terbaruu");
    console.log(latestArticle);
    const generate_article = await Article.find().then(e => generateArticle(e) ) ;
    
    const articleLink2 = TitleLink(generate_article) ; 
    console.log(articleLink2);
    res.render('main-menu2',{layout:'layouts/Navbar' , latestArticle , generate_article, articleLink1, articleLink2  }) ; 
  }) ; 
  
  

// http://localhost:3000/categories/science?page=1&limit=6
// http://localhost:3000/article_data?page=1&limit=6

app.delete('/article_data', async function(req,res) {
  await Article.deleteMany(req.body)
  console.log("Delete complete");
  res.redirect('http://localhost:3000/article_data?page=1&limit=6');
})



app.get('/button', async function (req, res) {
  res.render('testButton',{layout:'layouts/Navbar'}) ;
  }) ; 



app.get('/categories/:name', async function (req, res) {
  let data = (await Article.find()).filter(e => e.categories == req.params.name) ;
  console.log("data awal :");
  console.log(data);
  let {totalPage, filteredArticle}  = pagination(data,req.query.page,req.query.limit)  ; 
  console.log("filtered article");
  console.log(filteredArticle.length);
  let pickNewest = pickTheNewest(filteredArticle) ; 
  const articleLink3 = TitleLink(pickNewest) ;
  if(filteredArticle.length == 0){
    res.send("404");
  } ;

  let title = req.params.name

  let background = null

  if(title == "science"){
    background = '/images/background_c.png'
  }else{
    background = '/images/background_c2.png'
  }
  
  
  res.render('categories',{layout:'layouts/Navbar' , totalPage , pickNewest, articleLink3 , title, currentPage : parseInt(req.query.page),background} ) ;
})




app.get('/create_article', async function (req, res) {
  res.render('createNewarticle',{layout:'layouts/Navbar'}) ;
  }) ; 

app.post('/create_article',upload.single("image"),  async function (req, res) {
  let data  = req.body  ;
  let time = CurrentTime() ;
  console.log(req.file.filename);
  Object.assign(data, {
    image : {
      imgName : req.file.filename,
      url : req.file.path
    },
    time : {
      date : time.date,
      month : time.month ,
      year : time.year
    }
  }) ;

  data.image.url = data.image.url.replaceAll("\\","/").replaceAll("public","");
  Article.insertMany(data) ;
  res.send("IMAGE UPLOADED"); 
  }) ; 

app.get('/article/:title', async function (req,res) {
  
  let title = req.params.title.replaceAll("-"," ");
  let data = await Article.findOne({title : title});
  const generate_article = await Article.find().then(e => generateArticle(e) )
  const articleLink = TitleLink(generate_article)
  console.log(generate_article);

  res.render('article',{layout:'layouts/Navbar',articleLink , title, content : data.content , image : data.image.url, categories : data.categories,generate_article,description : data.description,writer : data.writer} ) ;
})

app.get('/article_data', async function (req,res) {
  let data = await Article.find() ; 
  let {totalPage, filteredArticle}  = pagination(data,req.query.page,req.query.limit)  ;
  let result = pickTheNewest(filteredArticle) ; 
  const articleLink= TitleLink(result)  ;
  console.log(articleLink);
  console.log(result.length);
  res.render('article_collection',{layout:'layouts/Navbar', totalPage,result, articleLink} ) ;
})





app.get('/signup', async function (req, res) {
  const misal = req.flash('failed')[0] ; 
  console.log(misal);
  res.render('SignUp',{layout:'layouts/Navbar', failed: misal}) ;
}) ; 


app.get('/verify_otp', async function (req, res) {
  res.render('verify_otp',{layout:'layouts/Navbar'}) ;
}) ; 

app.post('/verify_otp', async function (req, res) {
  console.log("cekk");
  console.log(req.session.email);

  if(typeof req.session.email == 'undefined'){
    req.flash('failed','Your Otp Code Is Expired, try again') ;
    return res.redirect('/signup') ;
  }

  let otp_db = await Otp.findOne(req.session.email) ;
  console.log(req.session.email);
  console.log("Req session");
  console.log("Di database");
  console.log(otp_db);

  if(!otp_db){
    req.flash('failed','Your Otp Code Is Expired, try again') ;
    return res.redirect('/signup') ;
  } ;

  if(otp_db.otp != req.body.otp ){
    await Otp.deleteOne() ; 
    req.flash('failed','Your Otp Code Is Wrong, try again') ;
    return res.redirect('/signup') ; 
  };

  await Account.insertMany({
    email : otp_db.email , 
    username :  otp_db.username , 
    password :  otp_db.password ,
    createdAt : Date.now(),
    role : "User"
  })
  
  req.flash("succes","The Account has been created, please login below")
  res.redirect('/login'); 
  
}) ; 

app.get('/login', async function (req, res) {
  res.render('login',{layout:'layouts/Navbar', succes: req.flash("succes")[0] , failed: req.flash("failed")[0]} ) ;
}) ; 

app.post('/login', async function (req, res) {
    const account = await Account.findOne({ email: req.body.email });

    if (!account) {
      req.flash('failed', 'Account not found');
      return res.redirect('/login');  
    }
    let checkPassword = await bcrypt.compare(req.body.password, account.password);
    
    if (!checkPassword) {
      req.flash('failed', 'Wrong Password');
      return res.redirect('/login');  
    }

    res.send('Success');
  }) ;




app.post("/preview_article",upload.single("image"),async (req,res)=>{
  let data  = req.body  ;
  let time = CurrentTime() ;
 
  Object.assign(data, {
    image : {
      imgName : req.file.filename,
      url : req.file.path
    },
    time : {
      date : time.date,
      month : time.month ,
      year : time.year
    }
  }) ;
  data.image.url = data.image.url.replaceAll("\\","/").replaceAll("public","");
  console.log(data)

  res.render('preview_article',{layout:'layouts/Navbar', title : data.title , writer : data.writer , categories : data.categories, description : data.description, content : data.content,image : data.image.url} ) ;

  
  
})



// const salt = await bcrypt.genSalt();
// const hash = await bcrypt.hash(req.body.password,salt);

app.post('/signup', async function (req, res) {
  const otpCode = otpGenerator.generate(6);
  const info = await transporter.sendMail({
    from: '"saya',
    to: req.body.email, 
    subject: "Mas Mas", 
    text: otpCode, 
  });
  
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(req.body.password,salt);

  req.session.email = { email : req.body.email };
  Otp.insertMany({email : req.body.email , username : req.body.username , password : hash,otp : otpCode});
  res.redirect('/verify_otp'); 
  }) ; 


app.listen(3000, () =>{
    console.log("Server Berjalan di 3000");
})