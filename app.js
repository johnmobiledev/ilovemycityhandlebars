var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var routes = require('./routes/route.js');

app.set('view engine','handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.use(express.static(__dirname+'/public'));

app.get('/', routes.home);
app.get('/:page', routes.page);


/*
app.get('/', function(req, res){
    res.render('home',{headTitle: 'We belive that every city have something to say', title: 'EJS Template', content: "Home content"});
});


app.get('/:page', function(req, res){
   var headTitle, title, content;
    title = "I Love My City";
    
    if(req.params.page == 'about-us'){
        headTitle = 'AboutUs';
        title = "About Us";
        content = "We are in learning";
    }
     if(req.params.page == 'who-we-are'){
        headTitle = 'Who We Are';
        title = "Who we are";
        content = "Who we are details";
    }
    if(req.params.page == 'what-we-have-done'){
        headTitle = 'What we have done';
        title = "What We Have Done";
        content = "So far what we have done";
    }
    if(req.params.page == 'programmes'){
        headTitle = 'Programmes';
        title = "Programmes";
        content = "Program details";
    }
    if(req.params.page == 'facilities-amenities'){
        headTitle = 'Facilities & Amenties';
        title = "Facilities & Amenties";
        content = "Facilities & Amenties details";
    }
    if(req.params.page == 'admissions'){
        headTitle = 'Admissions';
        title = "Admissions";
        content = "Admissions details";
    }
    
    
    res.render('page', {title: title, headTitle: headTitle, content: content});
});

*/
var port = process.env.PORT || 8080;
app.listen(port, function(){
   console.log("Server Running at port " + port); 
});
