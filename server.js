var express        = require('express'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler   = require('errorhandler'),
    morgan         = require('morgan');
    request        = require('request');

var app = module.exports = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));
app.use(methodOverride());

var API_URL = 'http://localhost:4000';

var env = process.env.NODE_ENV;
if ('development' == env) {
  app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
}

if ('production' == app.get('env')) {
  app.use(errorHandler());
}


app.get('/');

// proxy_pass to backend API
app.get('/api/*', function(req, res) {
  var api_url = API_URL + req.url;
  request(api_url).pipe(res);
});


app.listen(8080);
console.log('Server started on port 8080...');