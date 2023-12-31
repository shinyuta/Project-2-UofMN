const router = require('express').Router();
const emailRoute = require('./emailRoute');
const userRoutes = require('./userRoute');
const aboutRoute = require('./aboutRoute');
const signupRoute = require('./signupRoute');
// const loginRoute = require('./loginRoute');

router.use('/users', userRoutes);
router.use('/emailRoute', emailRoute);
router.use('/aboutRoute', aboutRoute);
router.use('/signupRoute', signupRoute);
// router.use('./loginRoute', loginRoutes);


module.exports = router;
