const User = require('../models/User');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${req.user.id}-${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

exports.uploadProfilePicture = [
    upload.single('profilePicture'),
    async (req, res) => {
        const user = await User.findByPk(req.user.id);
        user.profilePicture = req.file.path;
        await user.save();
        res.json({ profilePicture: user.profilePicture });
    }
];
