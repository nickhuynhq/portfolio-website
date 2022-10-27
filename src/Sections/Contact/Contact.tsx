import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h1>{`// Contact Me`}</h1>
      <p className="contact__text">
        I am interested in full-time and freelance oppertunities- especially on
        ambitious or large projects. If you have any other requests or
        questions, please don't hesitate to reach me using the form below.
      </p>

      <div className="contact__container">
        <form
          className="contact__form"
          action={`https://formsubmit.co/${process.env.REACT_APP_EMAIL}`}
          method="POST"
        >
          <div className="contact__form-top">
            <input
              className="contact__form-input"
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
            <input
              className="contact__form-input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <input
            className="contact__form-input"
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
          <textarea
            className="contact__form-textarea"
            name="message"
            placeholder="Message"
            required
          />
          <button className="contact__form-button" type="submit">
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
