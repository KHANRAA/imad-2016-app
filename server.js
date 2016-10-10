var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var nameOne={
    title: 'Name one.Akash',
    heading:'Name Two',
    date:'October 10,2016',
content:`       <p>
                    My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.
                </p>
                <p>
                    My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.
                </p>
                <p>
                    My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.  My Name is Akash Khanra.
               </p> '
    
    
};

var creatTemplate(data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;

var htmlTemplate='
<html>
<head>
    <title>
       ${title}
    </title>
    <meta name ="viewport" content="width=device-width initial-scale=1"/>
    <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
<div class="element">
<div>
<a href="/">Home</a>
</div>
<div>
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
</div>
</body>
</html>


';
return htmlTemplate
}
    



app.get('/name-one', function (req, res) {
  res.send(craatTemplate(nameOnme));
});

app.get('/name-two', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'name-two.html'));
});

app.get('/name-three', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'name-three.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
