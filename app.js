var http = require('http');
var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/json' }));
var twilio = require('twilio');
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token'; 
const client = require('twilio')(accountSid, authToken);
const companyNum = '+12345678910' // Change to your Company's Twillio number provided on your account

app.post('/TextAlerts/:num/:message/:mediaUrl', function(require, response) {
	const Num = require.params.num;
	const Message = require.params.message;
	const MediaUrl = require.params.mediaUrl;

	// Message sending below
	client.messages.create({
    body: Message,
    to: Num,
    from: companyNum,
    mediaUrl: MediaUrl,
    }).then((message) => process.stdout.write(message.sid));
});

app.get('/', function(require, response) {
response.send("Hello World");
});

http.createServer(app).listen(3000, function() {
 	console.log("Server is running");
});

// You will need an twilio account for this 
// This is set up for the current 3.* of Twillio's sdk api