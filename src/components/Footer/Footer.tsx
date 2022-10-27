import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <a className="footer__home" href="/">
        nicholashuynh.
      </a>
      <ul className="footer__list">
        <li>
          <a
            className="footer__list-item"
            href="https://github.com/nickhuynhq"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="footer__list-item"
            href="https://www.linkedin.com/in/nickhuynhq/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className="footer__list-item"
            href="https://drive.google.com/file/d/1ME2ZlOizp6n8fAJHS9WRQmQllAw20WYs/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
      <div className="m-scroll">
        <div className="m-scroll__title">
          <div>
            <h1>
              <a
                href="https://github.com/nickhuynhq"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn |
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/nickhuynhq/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub |
              </a>{" "}
              {" "}
              <a
                href="https://drive.google.com/file/d/1ME2ZlOizp6n8fAJHS9WRQmQllAw20WYs/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume |{" "}
              </a>
              &nbsp;
            </h1>
            <h1>
              <a
                href="https://github.com/nickhuynhq"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn |
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/nickhuynhq/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub |
              </a>{" "}
              <a
                href="https://drive.google.com/file/d/1ME2ZlOizp6n8fAJHS9WRQmQllAw20WYs/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume |{" "}
              </a>
            </h1>
            <h1>
              <a
                href="https://github.com/nickhuynhq"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn |
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/nickhuynhq/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub |
              </a>{" "}
              <a
                href="https://drive.google.com/file/d/1ME2ZlOizp6n8fAJHS9WRQmQllAw20WYs/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume |{" "}
              </a>
              &nbsp;
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
