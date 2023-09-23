const express = require('express');
const app = express();
const withAuth = require('../middleware/withAuth');
const nodemailer = require('nodemailer');
require('dotenv').config();

app.get('/contact', withAuth, (req,res)=>{
    res.render('contact', { 
        //!SOMETHING GOES HERE , 
        logged_in: req.session.logged_in 
      });
})

app.post('/contact', withAuth, (req,res)=>{

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
        to: process.env.Email,
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