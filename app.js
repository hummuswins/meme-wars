var express = require('express');
var app = express();
var mongoose = require('mongoose');
var memeRoute = require('./routes/meme')
var port =  process.env.PORT || 3000;
var ip = process.env.IP || null;
var dbuser = process.env.DBUSER;
var dbpassword = process.env.DBPASSWORD;

//connect to mongoDB
if(process.env.PORT && process.env.IP){
    console.log('production');
    mongoose.connect('mongodb://'+dbuser+':'+dbpassword+'@ds113785.mlab.com:13785/memeshack4',{useMongoClient:true});
} else {
    console.log('not production');
    mongoose.connect("mongodb://localhost/memeDB",{useMongoClient:true});


//sets up the view engine to ejs and views folder
app.set('view engine', 'ejs');
app.set('views', './views');

//setups stylesheet in public
app.use(express.static(__dirname + '/public'));

//use routes from routes folder
app.use('/', memeRoute);





//starts the server
app.listen(port, ip, function(){ console.log('server online')})