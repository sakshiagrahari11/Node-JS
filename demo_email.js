var nodemailer = require('nodemailer');
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sakshiagrahari156@gmail.com',
    pass: 'hkkt qsef crkk havf'
  }
});

var mailOptions = {
  from: 'sakshiagrahari156@gmail.com',
  to: 'shubhpriytiwari@gmail.com, agraharisanjay681@gmail.com',
  subject: 'Sending Email using Node.js',
  //text: 'Hi How are you!!!',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
return res.end("Email Sent");
}).listen(8080);