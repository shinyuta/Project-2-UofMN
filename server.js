const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const nodemailer = require('nodemailer');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./middleware/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// app.get('/contact', (req,res)=>{
//   res.render('contact', { 
//       layouts: 'main', 
//       // logged_in: req.session.logged_in 
//     });
// })

// app.post('/contact', (req,res)=>{

//     // defining our transporter which will use gmail while passing our credentials which are located elsewhere in our project
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth:{
//             user: process.env.Email,
//             pass: process.env.Password
//         }
//     })

//     // object that contains a to and from addressee with the message and title of the email. 
//     const mailOptions = {
//         from: req.body.email,
//         to: process.env.Email,
//         subject: `${req.body.email} has sent us a message! ${req.body.subject}`,
//         text: req.body.message
//     }
//     transporter.sendMail(mailOptions,(error,info)=>{
//         if (error){
//             console.log(error);
//             res.send('error');
//         }else{
//             alert('Thank you for sending us an email! A member on our team will get back to you as soon as possible!');
//             res.send('success')
//         }
//     })
// })

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
