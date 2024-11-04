const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3002;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/sendform', async (req, res) => {
  const { name, email, subject, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'burakd279@gmail.com',
      pass: 'cmau nzht edwf lnqp'
    }
  });

  let mailOptions = {
    from: email, // Gönderen e-posta adresi
    to: 'burakd279@gmail.com', // Mailin gideceği adres
    subject: subject || `Yeni mesaj: ${name}`, 
    text: message 
  };

  // Mail gönderme
  transporter.sendMail(mailOptions, (err,data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'Mail gönderim hatası.' });
    } else {
      console.log('Mail Gönderildi');
      res.status(200).json({ message: 'Mail başarıyla gönderildi!' });
    }
  });
});

// Sunucuyu başlatma
app.listen(port, () => {
  console.log(`Backend ${port} portunda çalışıyor.`);
});
