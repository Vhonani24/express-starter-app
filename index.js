const express = require('express');
const exphbs = require('express-handlebars');

const PizzaCart = require('./pizzaCart');

const pizzaCart = PizzaCart();

const app = express();
const PORT = process.env.PORT || 3017;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
var smallPizzaTotal = 0;
var mediumPizzaTotal = 0;
var largePizzaTotal = 0;

var smallCounter = 0;
var mediumCounter = 0;
var largeCounter = 0;

var total = 0;


app.get('/', function (req, res) {
	console.log('smallPizzaTota'+smallPizzaTotal)
	var small = smallPizzaTotal.toFixed(2);
	var medium = mediumPizzaTotal.toFixed(2);
	var large = largePizzaTotal.toFixed(2);

	

	res.render('index', {
		small,
		total,
		smallCounter,
		medium,
		large,
		mediumCounter,
		largeCounter


	


	});
});


app.post('/small', function (req, res) {
	smallPizzaTotal += 35;
	total += 35
	smallCounter++;
	console.log(smallPizzaTotal);
	res.redirect('/');


});
app.post('/medium', function (req, res) {
	mediumPizzaTotal += 65;
	total += 65
	mediumCounter++;
	//mediumCounter++;
	console.log(mediumPizzaTotal);
	res.redirect('/');


});
app.post('/large', function (req, res) {
	largePizzaTotal += 85;
	total += 85;
	largeCounter++;
	//mediumCounter++;
	console.log(largePizzaTotal);
	res.redirect('/');


});
app.get('/order', function (req, res) {
	var orderId = 0;
	var orderList = [];
	var orderObj = {
		"Id":orderId + 1,
		"status": "Payment due",
		"total":total
	}



})


// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function () {
	console.log(`App started on port ${PORT}`)
});