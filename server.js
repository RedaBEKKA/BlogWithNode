var express = require('express'),
swig = require('swig'),
path = require('path'),
mongoose = require('mongoose'),
app = express();


app.use(express.logger());//affichier les log du serveur pour debuger par exemple
app.use(express.bodyParser()); //traiter les data posté par les users
app.use(express.static(path.join(__dirname,'public'))) //indiquer tous les fichiers static (css /....)
app.engine('html',swig.renderFile);

app.set('view_engine','html');
app.set('views',__dirname+'/views');

app.get('/',function(req,res){
    data = {title : 'Mon super Blog'};
    res.render('index',data);
})


app.listen(3000);
console.log('App runing http://localhost:3000');