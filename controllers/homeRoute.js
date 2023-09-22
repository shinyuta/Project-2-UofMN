const router = require('express').Router();
const { Cup } = require('../models/index');
const withAuth =  require('../middleware/withAuth')


// GET all Cups for homepage
router.get('/', async (req, res) => {
  try {
    const cupData = await Cup.findAll();

    const cups = cupData.map((cups) =>
      cups.get({ plain: true })
    );

    res.render('homepage', {
      cups,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Cup
router.get('/cup/:id', withAuth , async (req, res) => {
    try {
      const cupData = await Cup.findByPk(req.params.id);
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
