var nodemailer = require('nodemailer');

var emailSentMethods = {
	forgotPassword: function(email,pass) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'hawkdeveloper5709@gmail.com',
                pass: 'Admin@123'
            }
        });
        
        var mailOptions = {
            from: 'hawkdeveloper5709@gmail.com',
            to: email,
            subject: 'Hawk-Security',
            text: '<h1>Did you forgot your password</h1><p>we got your backs..</p><p>your current password is this ' + pass + '</p>'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
	},
	currentDate: function() {
		console.log('Current Date is: ' + new Date().toISOString().slice(0, 10));
	}
};