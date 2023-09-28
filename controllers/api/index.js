const router = require('express').Router();
const emailRoute = require('./emailRoute');
const userRoutes = require('./userRoute');

router.use('/users', userRoutes);
router.use('/emailRoute', emailRoute);

module.exports = router;
