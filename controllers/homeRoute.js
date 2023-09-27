const router = require('express').Router();
const { Cup, Launch , User, UserCup} = require('../models/index');
const withAuth =  require('../middleware/withAuth');


// GET all Cups for homepage
router.get('/', async (req, res) => {
  try {
    const cupData = await Cup.findAll({
      include: [
        // {model: User, 
        //      attributes: ['username']
        //   },
        {model: Launch,
            attributes: ['name']
        },
      ],
      
    });

    const cups = cupData.map((cups) =>
      cups.get({ plain: true })
    );


    res.render('cup', {
      cups,
      // logged_in: req.session.logged_in,
    });
    // res.json(cupData)
    // res.status(200).json(cups)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// write a get route for users to get all assoiated cups


// GET one Cup
router.get('/cup/:id' , async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  // If the user is logged in, allow them to view one cup
  try {
  const dbCupData = await Cup.findByPk(req.params.id);

  const cup = dbCupData.get({ plain: true });

  res.render('onecup', { cup });
  } catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});
    // try {
    //   const cupData = await Cup.findByPk(req.params.id ,{ 
    //     include: [
    //       {model:Launch, attributes:['name', 'launch_date']},
    //       {model: User, attributes: ['username','email']}
    //     ]
    //   });
    //   const cups = cupData.get({ plain: true });

    //   res.render('cup', {
    //     cups,});

    //   // res.status(200).json(cups)
    //   // res.render('homepage', { cups, loggedIn: req.session.loggedIn });
    // } catch (err) {
    //   console.log(err);
    //   res.status(500).json(err);
    // }
// });

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Get's user's cups and all the cups data
router.get('/userCups/:id' , async (req,res) => {
  try {
    const userData = await  User.findByPk(req.params.id, {include: [
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

      // {all: true, nested: true}});

    const user = userData.get({ plain:true});

    res.render('user', {user});

    // const userCups =  await userData.map((allData) => {allData.get({force:true})});

    // res.status(200).json(userData);
    // res.render('users', {userCups});

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})
module.exports = router;
