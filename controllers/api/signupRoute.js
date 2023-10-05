const router = require('express').Router();
const {User} = require('../../models');


router.get('/signup', (req, res) => {
    res.render('signup', {
        layout: 'main',
        // logged_in: req.session.logged_in 
    });
});


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
module.exports = router;