const router = require('express').Router();

router.get('/about', (req, res) => {
    res.render('about', {
        layout: 'main',
        // logged_in: req.session.logged_in 
    });
});

module.exports = router;