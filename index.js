//npm install -g nodemon, express, body-parser, ejs

const express = require('express');
const app = express();
const parser = require('body-parser'); //npm install body-parser
app.use(parser.urlencoded({ extended: false }));
app.use(express.static('public')) //css and images

app.set('view engine', 'ejs'); // https://www.npmjs.com/package/ejs. everything is under the view folder

app.get('/list.ejs', (request, response) => {
    response.render('index');
});



const server = app.listen(3000, () => {
    console.log('server started on port', server.address().port);
});