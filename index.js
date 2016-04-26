var express = require('express');
var path = require('path');

// Create a new Express application.
app = express();

// Configure view engine to render EJS templates.
app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',
    function (req, res) {
        res.render('index.html');
    });

app.listen(process.env.PORT || 5000, ()=>console.log('Server started!', process.env.PORT || 5000));

module.exports=app;
