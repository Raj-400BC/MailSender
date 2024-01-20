const nodemailer = require("nodemailer");
// import nodemailer from 'nodemailer';

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "ally.hegmann3@ethereal.email",
      pass: "JcCqkZXUStQGx8BWRa",
    },
  });

  let info = await transporter.sendMail({
    from: '"Vinod Thapa 👻" <mayur1977.be21@chitkara.edu.in>', // sender address
    to: "singhmayurraj97@gmail.com", // list of receivers
    subject: "Server Status", // Subject line
    text: "Run hua ?", // plain text body
    html: "<b>Finally run ho gya/b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;