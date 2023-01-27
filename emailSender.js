const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rmhedhly@gmail.com',
      pass: 'rexsuxmhadozheqf'
    }
  });
  
  const mailOptions = {
    from: 'rmhedhly@gmail.com',
    to: 'mzaouchi@gmail.com',
    subject: 'test',
    text: 'test test'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
   console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      // do something useful
    }
  });