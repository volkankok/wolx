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
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('subject', formData.subject);
        data.append('message', formData.message);

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'https://volkankok.dev';
            const response = await fetch(`${apiUrl}/api/contact`, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const result = await response.json();

            if (response.ok) {
                alert('Mesajınız başarıyla gönderildi!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                navigate('/');
            } else {
                throw new Error(result.error || 'Mesaj gönderilirken bir hata oluştu.');
            }
        } catch (error) {
            console.error('Form gönderme hatası:', error);
            alert(error.message || 'Sunucuya bağlanırken bir hata oluştu.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        if (!isSubmitting) {
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            navigate('/');
        }
    };

    const handleOutsideClick = (e) => {
        if (e.target.className === 'contact-modal') {
            handleClose();
        }
    };

    return (
        <div className="contact-modal" onClick={handleOutsideClick}>
            <div className="contact-container">
                <button 
                    className="contact-closeButton" 
                    onClick={handleClose}
                    disabled={isSubmitting}
                >
                    X
                </button>
                <form onSubmit={handleSubmit} className="contact-form">
                    <h1>İletişim Formu</h1>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ad/Soyad"
                        value={formData.name}
                        onChange={handleChange}
                        className="contact-input"
                        required
                        disabled={isSubmitting}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-input"
                        required
                        disabled={isSubmitting}
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Konu"
                        value={formData.subject}
                        onChange={handleChange}
                        className="contact-input"
                        required
                        disabled={isSubmitting}
                    />
                    <textarea
                        name="message"
                        placeholder="Mesaj"
                        value={formData.message}
                        onChange={handleChange}
                        className="contact-textarea"
                        required
                        disabled={isSubmitting}
                    />
                    <button 
                        type="submit" 
                        className="contact-button"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                    </button>
                </form>
            </div>
        </div>
    );
}