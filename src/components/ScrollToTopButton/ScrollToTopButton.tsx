import { useState } from "react";
import { BsChevronBarUp } from "react-icons/bs";
import "./ScrollToTopButton.scss";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <a
      className="scroll-to-top-button"
      href="#hero"
      style={{ display: visible ? "inline" : "none" }}
    >
      <BsChevronBarUp className="scroll-to-top-button__cheveron" />
    </a>
  );
};

export default ScrollToTopButton;
