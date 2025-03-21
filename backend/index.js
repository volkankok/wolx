import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import multer from 'multer';

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const upload = multer();

app.post('/api/contact', upload.none(), (req, res) => {
    const { name, email, subject, message } = req.body;

    console.log('Received request:', req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'volkankok@gmail.com',
        subject: 'siteden gelen', // Sabit konu
        text: `Ad/Soyad: ${name}\nE-mail: ${email}\nKonu: ${subject}\n\nMesaj: ${message}` // Konu bilgisi e-posta içeriğine eklendi
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send(error.toString());
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Mesaj gönderildi: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});