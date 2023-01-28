import "./Footer.scss";
import { v4 as uuidv4 } from "uuid";
import { handleEventTracking } from "../../utils/utils";

const Footer = () => {

  const handleClick = (label: string) => {
    handleEventTracking("Footer", "click", label)
  }
  
  // Number of times infinite text carousel repeats
  const n = 4;

  return (
    <div id="footer" className="footer">
      <a className="footer__home" href="/">
        nicholashuynh.
      </a>
      <ul className="footer__list">
        <li onClick={() => handleClick("github")}>
          <a
            className="footer__list-item"
            href="https://github.com/nickhuynhq"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            GitHub
          </a>
        </li>
        <li onClick={() => handleClick("linkedin")}>
          <a
            className="footer__list-item"
            href="https://www.linkedin.com/in/nickhuynhq/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li onClick={() => handleClick("resume")}>
          <a
            className="footer__list-item"
            href="https://drive.google.com/file/d/18KPOt3RvsMSh0vexUwiL1elDauW5dwwb/view?usp=share_link"
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
                  onClick={() => handleClick("linkedin")}
                >
                  {" "}
                  LinkedIn{" "}
                </a>
                <span>|</span>
                <a
                  href="https://github.com/nickhuynhq"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleClick("github")}
                >
                  {" "}
                  GitHub{" "}
                </a>
                <span>|</span>
                <a
                  href="https://drive.google.com/file/d/18KPOt3RvsMSh0vexUwiL1elDauW5dwwb/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleClick("resume")}
                >
                  {" "}
                  Resume{" "}
                </a>
                <span>|</span>
                &nbsp;
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
