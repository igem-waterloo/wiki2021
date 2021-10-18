import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './scrollToTop.module.scss';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={styles.scroll_to_top}>
      {isVisible && 
        <div onClick={scrollToTop} className={styles.button_div}>
          <FontAwesomeIcon className={styles.arrow_button} icon={faArrowUp} />
        </div>}
    </div>
  );
}