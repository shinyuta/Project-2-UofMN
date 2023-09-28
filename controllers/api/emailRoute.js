const express = require('express');
const router = require('express').Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

//localhost::3001/api/emailRoute/contact
router.get('/contact', (req,res)=>{
    res.render('contact', { 
        layout: 'main', 
        // logged_in: req.session.logged_in 
      });
})

//api/emailRoute/contact
router.post('/contact', (req,res)=>{

    // defining our transporter which will use gmail while passing our credentials which are located elsewhere in our project
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    // object that contains a to and from addressee with the message and title of the email. 
    const mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL_USERNAME,
        subject: `${req.body.email} has sent us a message! ${req.body.subject}`,
        text: req.body.message
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if (error){
            console.log(error);
            res.send('error');
        }else{
            res.send('Thank you for sending us an email! A member on our team will get back to you as soon as possible!');
        }
    })
})

module.exports = router;