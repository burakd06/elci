// controllers/email.controller.js

import { handleEmailSending } from '../services/email.service.js';

export const sendEmailController = async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        await handleEmailSending(name, email, subject, message);
        res.status(200).json({ message: 'Mail başarıyla gönderildi!' });
    } catch (error) {
        console.error('Mail gönderim hatası:', error);
        res.status(500).json({ message: error.message });
    }
};

export const testPost = (req, res) => {
    const { username, surname } = req.body; // Change 'name' to 'username'

    try {
        console.log("Post isteği sırasında gönderilen veriler:", req.body);
        
        if (username && surname) { // Check for 'username' instead of 'name'
            console.log("İşlem başarılı, buraya düştüm");
            res.status(200).json({ message: `Hoşgeldin ${username}` }); // Use 'username' in the response
        } else {
            console.log("İşlem başarısız, buraya düştüm");
            res.status(401).json({ message: 'Hop hemşerim nereye?' });
        }
    } catch (error) {
        console.log("Catch'e düştün! Burayı incele:", error);
        res.status(500).json({ message: '500 hatası' });
    }
};

