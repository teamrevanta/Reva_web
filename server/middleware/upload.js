const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const path = require('path');
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: (req, file) => {
        console.log(`Processing upload for field: ${file.fieldname}`);
        console.log(`Request body at upload:`, req.body);

        const fullName = req.body.fullName || `upload_${Date.now()}`;
        const sanitizedFileName = fullName
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '_')
            .replace(/_+/g, '_')
            .trim('_') || `upload_${Date.now()}`;

        let folder;
        switch (file.fieldname) {
            case 'idCardImage':
                folder = 'idCardImages';
                break;
            case 'memberImage':
                folder = 'memberImages';
                break;
            case 'paymentScreenshot':
                folder = 'paymentScreenshots';
                break;
            default:
                folder = 'misc';
        }

        return {
            folder: `team-revanta/${folder}`,
            allowed_formats: ['jpg', 'jpeg', 'png'],
            transformation: [{ width: 500, height: 500, crop: 'limit' }],
            public_id: `${sanitizedFileName}_${file.fieldname}_${Date.now()}`,
        };
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        console.log(`File filter for: ${file.fieldname}, mime: ${file.mimetype}, original: ${file.originalname}`);
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }
        const error = new Error(`Only .jpg, .jpeg, and .png files are allowed for ${file.fieldname}`);
        console.error('File filter error:', error.message);
        cb(error);
    }
});

const uploadMiddleware = (req, res, next) => {
    console.log('Entering upload middleware');
    upload.fields([
        { name: 'idCardImage', maxCount: 1 },
        { name: 'memberImage', maxCount: 1 },
        { name: 'paymentScreenshot', maxCount: 1 }
    ])(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            console.error('Multer error:', err);
            return res.status(400).json({ error: `Multer error: ${err.message}` });
        } else if (err) {
            console.error('Upload error:', err);
            return res.status(400).json({ error: err.message });
        }
        console.log('Upload middleware completed, files:', req.files);
        next();
    });
};

module.exports = uploadMiddleware;