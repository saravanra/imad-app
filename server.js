var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title: 'Article One | Saravanan Ramasamy',
        heading: 'Article One',
        date: 'Aug 13, 2017 | 17:45',
        content: ` 
            <p>
                This is Article One content. I need to write something here. I don't know what to write. Hence I am writing Something. Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.
            </p>
            <p>
                This is Article One content. I need to write something here. I don't know what to write. Hence I am writing Something. Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.
            </p>
            <p>
                This is Article One content. I need to write something here. I don't know what to write. Hence I am writing Something. Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.
            </p> `
    },
    'article-two' : {
        title: 'Article two | Saravanan Ramasamy',
        heading: 'Article two',
        date: 'Aug 13, 2017 | 18:00',
        content: ` 
            <p>
                This is Article two content. I need to write something here. I don't know what to write. Hence I am writing Something. Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.
            </p>
    `},    
    'article-three' : {
        title: 'Article Three | Saravanan Ramasamy',
        heading: 'Article Three',
        date: 'Aug 13, 2017 | 18:30',
        content: ` 
            <p>
                This is Article Three content. I need to write something here. I don't know what to write. Hence I am writing Something. Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.
            </p>
            <p>
                This is Article Three content. I need to write something here. I don't know what to write. Hence I am writing Something. Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.Something is nothing.
            </p>
    `}
};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;

    var htmlTemplate = `
        <html>
        <head>
            <title>
                ${title}
            </title>
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                   ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/xtramile.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'xtramile.jpg'));
});

app.get('/ui/go-the-extra-mile-its-never-crowded-quote-1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'go-the-extra-mile-its-never-crowded-quote-1.jpg'));
});

app.get('/ui/saravan.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'saravan.jpg'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
