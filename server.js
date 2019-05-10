//load in requirements
const express = require('express');
var app = express();

//set the view engine to ejs
app.set('view engine', 'ejs');

//index page
app.get('/', (req, res) => {
    //use res.render to load up an ejs view file
    res.render('pages/index');
});

//orders page
app.get('/orders', (req, res) => {
    var orders = [
        {
            id: 01,
            contents: ['Chicken Little', 'Mashed Potatoes', 'Potato Wedges', 'Small Drink']
        },
        {
            id: 02,
            contents: ['Popcorn Chicken', 'Corn', 'Medium Drink']
        },
        {
            id: 03,
            contents: ['2 Piece Meal Dark', 'Fries', 'Mashed Potatoes w/ Gravy']
        }
    ];

    res.render('pages/orders', { 
        orders: orders
    });
});

app.listen(8080);
console.log('EJS Application listening on port 8080...');