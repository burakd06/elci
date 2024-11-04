// services/email.service.js

import { sendEmail } from '../models/email.model.js';

export const handleEmailSending = async (name, email, subject, message) => {
    const mailOptions = {
        from: email,
        to: 'elciyazilim34@gmail.com',
        subject: subject || `Yeni mesaj: ${name}`,
        text: `${message} ${email}`,
    };

    try {
        const result = await sendEmail(mailOptions);
        return result;
    } catch (error) {
        throw new Error('Mail gönderim hatası: ' + error.message);
    }
};
