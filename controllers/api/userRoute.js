const router = require('express').Router();
const { User } = require('../../models');



//get request that routes to handlebar template 
router.get('/login', async(req, res) => {
  try{
    const userData = await User.create(req.body);
  } catch(err){
    res.status(400).json(err);
  }
  // res.render('login', {
  //     layout: 'main',
  //     // logged_in: req.session.logged_in 
  // });
});


router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password
    });

    // req.session.save(() => {
    //   req.session.logged_in = true;
      res.status(200).json(userData);
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await UserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id=userData.id;
      req.session.logged_in = true;

      res
        .status(200)
        .json({ user: UserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
