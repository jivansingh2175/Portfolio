import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_EMAILJS_SERVICE_ID', 
      'YOUR_EMAILJS_TEMPLATE_ID', 
      form.current, 
      'YOUR_EMAILJS_USER_ID'
    )
    .then((result) => {
      alert('Message sent successfully!');
      e.target.reset();
    }, (error) => {
      alert('Failed to send the message, please try again.');
    });
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Feel free to reach out for job opportunities or collaborations!</p>
          <div className="contact-details">
            <p><strong>Email:</strong> jivajuniour1210@gmail.com </p>
            <p><strong>Phone:</strong> 8421419488</p>
            <p><strong>Location:</strong> Pune,Maharastra</p>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" name="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;