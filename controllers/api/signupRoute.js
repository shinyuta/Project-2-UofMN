const router = require('express').Router();
const {User} = require('../../models');


router.get('/signup', (req, res) => {
    res.render('signup', {
        layout: 'main',
        // logged_in: req.session.logged_in 
    });
});

<<<<<<< HEAD
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

=======

router.post('/signUserUp', async (req,res) => {
try {
    const userData = User.create(req.body);
    // req.session.save(() => {
        // req.session.user_id = userData.id;
        // req.session.logged_in = true;
  
        res.status(200).json(userData);
    //   });
} catch (err) {
    console.log(err)
}
});
>>>>>>> ef243b2ac0a02ac4c9c9901aa5db9095971c90db
module.exports = router;