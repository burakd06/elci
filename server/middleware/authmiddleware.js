// middleware/authmiddleware.js
import jwt from 'jsonwebtoken';

export const authenticate = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer token kısmını ayıkla

    if (!token) {
        return res.status(403).json({ message: 'Token gerekli' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Token'ı doğrula
        req.user = decoded;  // Kullanıcı bilgilerini request'e ekle
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Token geçersiz11' });
    }
};
