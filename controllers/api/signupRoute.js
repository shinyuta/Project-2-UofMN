const router = require('express').Router();

router.get('/signup', (req, res) => {
    res.render('signup', {
        layout: 'main',
        // logged_in: req.session.logged_in 
    });
});

router.post('/signup', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;