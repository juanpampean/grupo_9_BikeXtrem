const User = require('../controllers/userController');

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.userEmail;
	let userFromCookie = User.findByField('email', emailInCookie);

	if (userFromCookie) {
		req.session.usuarioLogueado = userFromCookie;
	}

	if (req.session.usuarioLogueado) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.usuarioLogueado;
	}

	next();
}

module.exports = userLoggedMiddleware;