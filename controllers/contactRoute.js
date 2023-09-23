const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();

app.get('/contact', (req,res)=>{
    res.sendFile(__dirname + '/public/contact')
})

app.post('/contact', (req,res)=>{

    // defining our transporter which will use gmail while passing our credentials which are located elsewhere in our project
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.Email,
            pass: process.env.Password
        }
    })
    const mailOptions = {
        from: req.body.email,
        to: Email,
        subject: `${req.body.email} has sent us a message! ${req.body.subject}`,
        text: req.body.message
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if (error){
            console.log(error);
            res.send('error');
        }else{
            alert('Thank you for sending us an email! A member on our team will get back to you as soon as possible!');
            res.send('success')
        }
    })
})