import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// CORS ayarları
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Güvenlik başlıkları
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

const upload = multer();

// Global hata yönetimi
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Bir hata oluştu' });
});

app.post('/api/contact', upload.none(), async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Tüm alanlar gereklidir' });
        }

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
            subject: 'Siteden gelen mesaj',
            text: `Ad/Soyad: ${name}\nE-mail: ${email}\nKonu: ${subject}\n\nMesaj: ${message}`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email başarıyla gönderildi' });
    } catch (error) {
        console.error('Email gönderme hatası:', error);
        res.status(500).json({ error: 'Email gönderilemedi' });
    }
});

// Production ortamında statik dosyaları servis et
if (process.env.NODE_ENV === 'production') {
    const frontendBuildPath = path.join(__dirname, '../frontend/dist');
    app.use(express.static(frontendBuildPath));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(frontendBuildPath, 'index.html'));
    });
}

// 404 yönetimi
app.use((req, res) => {
    res.status(404).json({ error: 'Sayfa bulunamadı' });
});

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor`);
});