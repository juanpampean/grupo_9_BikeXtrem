function guestMiddleware(req,res,next){
    if (req.session.usuarioLogueado){
        return res.redirect('/');
    }
    next();
}
// esta funcion si ya estas logueado te redirige a tu profile y sino lo estas te permite seguir a register.
module.exports = guestMiddleware

// En routes/usersRoutes.js voy a usar este middleware asi:
// const guestMiddleware = require('../middlewares/guestMiddleware');

// router.get('/registro',guestMiddleware,usersController.register)

// router.get('/login',guestMiddleware,usersController.login)

