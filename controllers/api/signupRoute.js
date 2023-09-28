const router = require('express').Router();

router.get('/signup', (req, res) => {
    res.render('signup', {
        layout: 'main',
        // logged_in: req.session.logged_in 
    });
});

module.exports = router;