import "./Footer.scss";
import { v4 as uuidv4 } from 'uuid';

const Footer = () => {
  // Number of times infinite text carousel repeats
  const n = 4;

  return (
    <section id="footer" className="footer">
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
            {[...Array(n)].map((element) => (
              <h1 key={uuidv4()}>
                <a
                  href="https://www.linkedin.com/in/nickhuynhq/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}LinkedIn{" "}
                </a>
                <span>|</span>
                <a
                  href="https://github.com/nickhuynhq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}GitHub{" "}
                </a>
                <span>|</span>
                <a
                  href="https://drive.google.com/file/d/1ME2ZlOizp6n8fAJHS9WRQmQllAw20WYs/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}Resume{" "}
                </a>
                <span>|</span>
                &nbsp;
              </h1>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
