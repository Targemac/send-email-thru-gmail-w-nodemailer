const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
const sendEmail = require("./email");

let receiver = "targemac@gmail.com";
let htmlMSG = `
    <div class="body"
    style=" border: .5px solid grey;
    padding: 1rem;
    background-color: rgba(183, 243, 215,.4);">
        <div class="head" style="  font-size: 28px;">
        sending email from nodemailer
        </div>
        <img src='https://cldup.com/P0b1bUmEet.png' alt='email photo'>
        <div class="cont">this is a test body of sending email from nodemailer</div>
        <span>this email was sent from ${process.env.USER} to ${receiver} </span>
    </div>`;
sendEmail(receiver, "sending email from nodemailer", htmlMSG);
