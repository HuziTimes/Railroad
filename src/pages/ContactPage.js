import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <Header />
      <main className="contact-page">
        <div className="breadcrumb-container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Contact us</span>
          </div>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-method">
              <div className="contact-icon call-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h3>Call To Us</h3>
                <p>We are here to help you out</p>
                <p className="contact-info-line">Phone: <a href="tel:+19792552014">+1 (979) 255-2014</a></p>
              </div>
            </div>
            
            <div className="divider"></div>
            
            <div className="contact-method">
              <div className="contact-icon email-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Write To US</h3>
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p className="contact-info-line">Email: <a href="mailto:order@railroadcotton.com">order@railroadcotton.com</a></p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Get in touch with us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone *" 
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  rows="5"
                ></textarea>
              </div>
              <div className="form-actions">
                <button type="submit" className="send-message-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage; 