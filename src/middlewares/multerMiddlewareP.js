const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/product"));
	},
    filename: function(req, file, cb) {

        cb(null, file.fieldname + "-" + Date.now() + "-" + path.extname(file.originalname));
	}
})

const uploadProductPhoto = multer({ storage });

module.exports = uploadProductPhoto;
