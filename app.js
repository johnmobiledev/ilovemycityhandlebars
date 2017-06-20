var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var routes = require('./routes/route.js');

app.set('view engine','handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.use(express.static(__dirname+'/public'));

app.get('/', routes.home);
app.get('/:page', routes.page);

var port = process.env.PORT || 8080;

app.listen(port, function(){
   console.log("Server Running at port " + port); 
});
