import "./Contact.scss";
import { BsChevronDoubleDown } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__main">
        <h1 className="contact__heading">{`// Contact Me`}</h1>
        <p className="contact__text">
          I am interested in full-time and freelance opportunities- especially
          on ambitious or large projects. If you have any other requests or
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
      </div>
      <a className="more-arrow bounce" href="#footer">
        <BsChevronDoubleDown />
      </a>
      
    </section>
  );
};

export default Contact;
