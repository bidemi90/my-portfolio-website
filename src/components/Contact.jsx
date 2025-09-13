import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:sodiqabdullahi431@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      formData.message + "\n\nFrom: " + formData.email
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-form ">
          <div className="contact-info">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-text">
              I'm currently open to new opportunities and would love to hear
              from you. Whether you have a question, a project idea, or just
              want to say hello, feel free to reach out!
            </p>
            <p>
              You can also contact me directly on
              <ul>
                <li>
                  Phone/WhatsApp: 
                  <a
                    href="https://wa.me/qr/SHMTRAN767SIJ1"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="phone-link"
                  >
                    +234 088 313 5400
                  </a>
                </li>
                <li>
                  LinkedIn: 
                  <a
                    href="https://www.linkedin.com/in/abdullahi-sodiq-596940219/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="phone-link"
                  >
                    Sodiq Abdullahi
                  </a>
                </li>
                <li>
                  GitHub: 
                  <a
                    href="https://github.com/bidemi90"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="phone-link"
                  >
                    bidemi90
                  </a>
                </li>
              </ul>
            </p>
          </div>
          <hr />
          <form className="" onSubmit={handleSubmit}>
            <h3 className="contact-title">
              Or Send Me a Message Directly Here
            </h3>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-input"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="contact-input"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="contact-textarea"
            ></textarea>

            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
