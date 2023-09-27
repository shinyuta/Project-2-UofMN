const express = require('express');
const router = require('express').Router();
const app = express();
const { User } = require('../models');
const withAuth = require('../middleware/withAuth');
const nodemailer = require('nodemailer');
require('dotenv').config();

router.get('/contact', (req,res)=>{
    res.render('main', { 
        layout: 'contact', 
        // logged_in: req.session.logged_in 
      });
})

router.post('/contact', (req,res)=>{

    // defining our transporter which will use gmail while passing our credentials which are located elsewhere in our project
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.Email,
            pass: process.env.Password
        }
    })

    // object that contains a to and from addressee with the message and title of the email. 
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