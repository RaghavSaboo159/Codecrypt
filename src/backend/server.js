// // const express = require('express');
// // const bodyParser = require('body-parser');
const cors = require('cors');
// // const mongoose = require('mongoose')

// // const app = express();
// // const PORT = 4000;
// // const userRoutes = express.Router();

// // let User = require('./models/user');
// // app.use(bodyParser.json());

// // // Connection to mongodb
// // mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true });
// // const connection = mongoose.connection;
// // connection.once('open', function() {
// //     console.log("MongoDB database connection established succesfully.");
// // })

// // // API endpoints

// // // Getting all the users
// // userRoutes.route('/').get(function(req, res) {
// //     User.find(function(err, users) {
// //         if (err) {
// //             console.log(err);
// //         } else {
// //             res.json(users);
// //         }
// //     });
// // });

// // // Adding a new user
// // userRoutes.route('/add').post(function(req, res) {
// //     let user = new User(req.body);
// //     user.save()
// //         .then(user => {
// //             res.status(200).json({'User': 'User added successfully'});
// //         })
// //         .catch(err => {
// //             res.status(400).send('Error');
// //         });
// // });

// // // Getting a user by id
// // userRoutes.route('/:id').get(function(req, res) {
// //     let id = req.params.id;
// //     User.findById(id, function(err, user) {
// //         res.json(user);
// //     });
// // });

// // app.use('/', userRoutes);

// // app.listen(PORT, function() {
// //     console.log("Server is running on port: " + PORT);
// // });
// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
   
//     var sql = require("mssql");

//     // config for your database
//     var config = {
//        user: 'root',
//     password: 'qwerty1@',
//     server: 'localhost',
//     driver: 'tedious',
//     database: 'geek',
//     options: {
//         instanceName: 'sql'
//     }
//     };

//     // connect to your database
//     sql.connect(config, function (err) {
    
//         if (err) console.log(err);

//         // create Request object
//         var request = new sql.Request();
           
//         // query to the database and get the records
//         request.query('select * from Student', function (err, recordset) {
            
//             if (err) console.log(err)

//             // send records as a response
//             res.send(recordset);
            
//         });
//     });
// });

// var server = app.listen(5000, function () {
//     console.log('Server is running..');
// });




var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'qwerty1@',
	database : 'geek'
});

var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	console.log(username)
	console.log(password)

	if (username && password) {
		connection.query("SELECT * FROM accounts WHERE username = '" + request.body.username +"' AND password = '" + request.body.password + "'", function(error, results, fields) {
			// console.log(query)
			console.log(results)
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.send('correct');

				// response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(5000);