const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

//! placeholder until we have routes set up.
app.get('/contact', (req,res)=>{
    res.sendFile(__dirname + '')
})

app.post('/', (req,res)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'starbscupcorner@gmail.com',
            pass: 'lorem' //TODO: create environment variable for this password
        }
    })
    const mailOptions = {
        from: req.body.email,
        to: 'starbscupcorner@gmail.com',
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