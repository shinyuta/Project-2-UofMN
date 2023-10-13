const router = require('express').Router();
const { Cup, Launch , User, UserCup} = require('../models/index');
const withAuth = require("../middleware/withAuth");

// GET all Cups for homepage
router.get('/', async (req, res) => {
  try {
    const cupData = await Cup.findAll({
      include: [
        {model: User, 
             attributes: ['username']
          },
        {model: Launch,
            attributes: ['name','id', 'launchDate'],
        },
      ],
      
    });

    const cups = cupData.map((cups) =>
      cups.get({ plain: true })
    );


    res.render('Cup', {
      cups,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// write a get route for users to get all assoiated cups
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get('/users', async (req, res) => {
  try {
    const dbUserData = await User.findAll({
      include: [
        {
          model: Cup,
          attributes: ['filename', 'name'],
          // model: UserCup,
          // attributes: ['user_id', 'cup_id', 'id'],
        },
      ],
    });

    const users = dbUserData.map((User) =>
    User.get({ plain: true })
    );

    res.render('user', {
      users,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET one Cup
router.get('/cup/:id' , async (req, res) => {
  try {
  const dbCupData = await Cup.findByPk(req.params.id);

  const cup = dbCupData.get({ plain: true });

  res.render('onecup', { cup, logged_in:req.session.logged_in });
  } catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});


// Get's user's cups and all the cups data
router.get('/userCups/:id' , withAuth, async (req,res) => {
  try {
    const userData = await  User.findByPk(req.params.id, {
      include: [
      {
        model:Cup,
        attributes: [
          'name',
          'filename',
          'launch'
        ],
      },
    ],
    });

    const user = userData.get({ plain:true });

    res.render('user', {user});
    // res.status(200).json(userData);
    // res.render('users', {userCups});

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})

module.exports = router;
