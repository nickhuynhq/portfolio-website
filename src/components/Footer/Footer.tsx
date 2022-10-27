import "./Footer.scss"

const Footer = () => {
  return (
    <section className="footer">
      <a className="footer__home" href="/">
        nicholashuynh.
      </a>
      <ul className="footer__list">
        <li>
          <a className="footer__list-item" href="https://github.com/nickhuynhq">
            GitHub
          </a>
        </li>
        <li>
          <a className="footer__list-item" href="https://www.linkedin.com/in/nickhuynhq/">
            LinkedIn
          </a>
        </li>
        <li>
          <a className="footer__list-item" href="#contact">
            Resume
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
