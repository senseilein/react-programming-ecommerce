import React from "react";
import ContactForm from "../components/ContactForm";
// import "../styles/About.css";
import "../styles/oldHome.css";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <>
      <section className="Hero">
        <div className="heroOpacity">
          <h1 id="contact-page-h1">
            We deliver quality tech
            <br />[ <span>byte by byte</span> ]
          </h1>
        </div>
      </section>
      <section id="contact-section">
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
