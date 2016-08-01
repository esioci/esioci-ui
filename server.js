var express        = require('express'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler   = require('errorhandler'),
    morgan         = require('morgan');

var app = module.exports = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));
app.use(methodOverride());

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

app.listen(8080);
console.log('Server started on port 8080...');