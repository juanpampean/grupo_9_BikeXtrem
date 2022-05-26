const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/avatars"));
	},
    filename: function(req, file, cb) {
        let filename = `${ file.fieldname + "-" + Date.now() + "-" + path.extname(file.originalname)}`
        cb(null, filename);
	}
})

const uploadFile = multer({ storage });

module.exports = uploadFile;

