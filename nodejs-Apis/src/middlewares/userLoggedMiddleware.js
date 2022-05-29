const db = require("../database/models")

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	
	if (req.session.usuarioLogueado) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.usuarioLogueado;
		console.log(res.locals.userLogged);	
	}
	next();
}

module.exports = userLoggedMiddleware;