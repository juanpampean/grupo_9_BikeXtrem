function guestMiddleware(req,res,next){
    if (req.session.userLogged){
        return res.redirect('user/profile');
    }
    next();
}
// esta funcion si ya estas logueado te redirige a tu profile y sino lo estas te permite seguir a register.
module.exports = guestMiddleware

// En routes/users.js voy a usar este middleware asi:
// const guestMiddleware = require('../middlewares/guestMiddleware');

// router.get('/register',guestMiddleware,usersController.register)

// router.get('/login',guestMiddleware,usersController.login)

