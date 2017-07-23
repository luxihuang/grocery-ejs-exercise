//npm install -g nodemon, express, body-parser, ejs

const express = require('express');
const app = express();

const parser = require('body-parser'); 
app.use(parser.urlencoded({ extended: false }));

app.set('view engine', 'ejs'); // https://www.npmjs.com/package/ejs. everything is under the view folder
app.use(express.static('public')) //css and images


const groceries =['bananas', 'milk', 'lettuce']

app.get('/', (request, response) => {
    response.render('index',groceries);
});

const server = app.listen(3010, () => {
    console.log('server started on port', server.address().port);
});