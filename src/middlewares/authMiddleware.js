function authMiddleware(req,res,next){
    if (!req.session.userLogged){
        return res.redirect('users/login');
    }
    next();
}
// esta funcion si no estas logueado te redirige a login y si lo estas te permite seguir.
module.exports = authMiddleware

// En routes va a intervenir asi:
// const authMiddleware = require('../middlewares/authMiddleware');

// router.get('/profile',authMiddleware,usersController.profile)