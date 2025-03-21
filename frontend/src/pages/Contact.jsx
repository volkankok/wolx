import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('subject', formData.subject);
        data.append('message', formData.message);

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                body: data
            });

            if (response.ok) {
                alert('Mesajınız başarıyla gönderildi!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                navigate('/'); // Ana sayfaya yönlendirme
            } else {
                alert('Mesaj gönderilirken bir hata oluştu.');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            alert('Sunucuya bağlanırken bir hata oluştu.');
        }
    };

    const handleClose = () => {
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        navigate('/');
    };

    const handleOutsideClick = (e) => {
        if (e.target.className === 'contact-modal') {
            handleClose();
        }
    };

    return (
        <div className="contact-modal" onClick={handleOutsideClick}>
            <div className="contact-container">
                <button className="contact-closeButton" onClick={handleClose}>X</button>
                <form onSubmit={handleSubmit} className="contact-form">
                    <h1>İletişim Formu</h1>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ad/Soyad"
                        value={formData.name}
                        onChange={handleChange}
                        className="contact-input"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-input"
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Konu"
                        value={formData.subject}
                        onChange={handleChange}
                        className="contact-input"
                    />
                    <textarea
                        name="message"
                        placeholder="Mesaj"
                        value={formData.message}
                        onChange={handleChange}
                        className="contact-textarea"
                    />
                    <button type="submit" className="contact-button">Gönder</button>
                </form>
            </div>
        </div>
    );
}