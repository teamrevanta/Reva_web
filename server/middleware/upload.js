
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

console.log('Cloudinary Config:', {
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY
}); // Debug log

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: (req, file) => {
        // Sanitize fullName for use as filename
        const fullName = req.body.fullName || 'default';
        const sanitizedFileName = fullName
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '_') // Replace non-alphanumeric characters with underscores
            .replace(/_+/g, '_') // Replace multiple underscores with a single one
            .trim('_'); // Remove leading/trailing underscores
        // Determine folder based on fieldname
        const folder = file.fieldname === 'idCardImage' ? 'idCardImage' : 'memberImage';
        console.log('Uploading to folder:', folder, 'with filename:', sanitizedFileName); // Debug log
        return {
            folder: folder,
            allowed_formats: ['jpg', 'jpeg', 'png'],
            transformation: [{ width: 500, height: 500, crop: 'limit' }],
            public_id: sanitizedFileName // Rename file to sanitized fullName
        };
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        console.log('File validation:', { file: file.originalname, mimetype, extname }); // Debug log
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error('Only .jpg, .jpeg, and .png files are allowed!'));
    }
});

module.exports = upload;