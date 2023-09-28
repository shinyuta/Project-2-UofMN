const express = require('express');
const router = require('express').Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

//localhost::3001/api/emailRoute/contact
router.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'main',
        // logged_in: req.session.logged_in 
    });
});

//api/emailRoute/contact
router.post('/contact', (req, res) => {
    // defining our transporter which will use gmail while passing our credentials which are located elsewhere in our project
    console.log('moo', req.body)
    // res.end();
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'gmail',
        port: 465, // or 587 for STARTTLS
        secure: false, // for SSL/TLS
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.PASSWORD_USERNAME
        }
    });

    // object that contains a to and from addressee with the message and title of the email.
    const mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL_USERNAME,
        subject: `${req.body.email} has sent us a message! ${req.body.subject}`,
        text: `${req.body.name} says: ${req.body.message}`
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Something went wrong sending your message.', error: error.message });
        } else {
            res.status(200).json({ message: 'Thank you for sending us an email! A member on our team will get back to you as soon as possible.' });
        }
    });
});

module.exports = router;







