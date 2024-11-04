// models/email.model.js

import nodemailer from 'nodemailer';

const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'burakd279@gmail.com',
            pass: 'cmau nzht edwf lnqp', // Use environment variables for security
        },
    });
};

export const sendEmail = async (mailOptions) => {
    const transporter = createTransporter();
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return reject(error);
            }
            resolve(info);
        });
    });
};
