function withAuth(req, res, next) {
    if(!req.session.loggedin) {
        res.render('login')
    } else {
        next()
    }
};

module.exports = withAuth;