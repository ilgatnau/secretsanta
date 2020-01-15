const sgMail = require('@sendgrid/mail');
const nodemailer = require('nodemailer');

let key = "";

/*let transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
     user: 'gatnau.home@gmail.com',
     pass: 'gatnauvera'
  }
});*/

module.exports = class SendGridAdapter {

  constructor (opts, fromAddress) {
    this.fromAddress = fromAddress;
    sgMail.setApiKey(opts['api-key']);
    key = opts['api-key'];
    //console.log(opts['api-key']);
  }

  send (messages) {

    sgMail.setApiKey(key);
    //console.log(key);

    messages.forEach((message) => {
      message.from = this.fromAddress;
      //console.log(message.name + " :: " + message.recipientName);
      //sgMail.send(messages);
    });

    return sgMail.sendMultiple(messages);
  }
};
