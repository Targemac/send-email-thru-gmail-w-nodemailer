const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: 587,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: "TC DEV ENGR 😎 <process.env.USER>",
      to: email,
      subject: subject,
      html: text,
    });

    console.log("email sent successfully");
  } catch (error) {
    console.log(error, "email not sent");
  }
};

module.exports = sendEmail;
