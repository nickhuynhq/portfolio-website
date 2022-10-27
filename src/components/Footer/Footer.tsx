import "./Footer.scss"

const Footer = () => {
  return (
    <section className="footer">
      <a className="footer__home" href="/">
        nicholashuynh.
      </a>
      <ul className="footer__list">
        <li>
          <a className="footer__list-item" href="https://github.com/nickhuynhq" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a className="footer__list-item" href="https://www.linkedin.com/in/nickhuynhq/"target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a className="footer__list-item" href="https://drive.google.com/file/d/1ME2ZlOizp6n8fAJHS9WRQmQllAw20WYs/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
