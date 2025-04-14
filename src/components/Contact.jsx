import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 data-aos="fade-up">Contact Me</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Interested in working together or just want to say hi? Reach out anytime.
      </p>
      <div data-aos="fade-up" data-aos-delay="200">
        <a href="mailto:belalamr330@gmail.com" className="email-button">
          Say Hello 👋
        </a>
      </div>

      <div className="contact-socials" data-aos="fade-up" data-aos-delay="300">
        <a href="https://github.com/Eng-belal-amr" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/belal-amr-6a1bb3315/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;
