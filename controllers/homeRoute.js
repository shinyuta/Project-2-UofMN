const router = require('express').Router();
const { Cup, Launch , User} = require('../models/index');
const withAuth =  require('../middleware/withAuth')


// GET all Cups for homepage
router.get('/', async (req, res) => {
  try {
    const cupData = await Cup.findAll({
      include: [
        {model: User, 
          // through: {
            //  attributes: 'username'
            // }
          },
        
        {model: Launch,
          //  through: {
          //   attributes: 'name'}
        }
      ],
      
    });

    const cups = cupData.map((cups) =>
      cups.get({ plain: true })
    );

    // res.render('homepage', {
    //   cups,
    //   loggedIn: req.session.loggedIn,
      
    // });
    res.status(200).json(cupData)
    // res.status(200).json(cups)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Cup
router.get('/cup/:id', withAuth , async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  // If the user is logged in, allow them to view one cup
    try {
      const cupData = await Cup.findByPk(req.params.id ,{ 
        include: {
          model:Launch,

        }
      });
      const cups = cupData.get({ plain: true });
      res.render('homepage', { cups, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
