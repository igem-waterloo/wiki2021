import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './dropdown.module.scss';
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  let dropdownArrow = true;

  if (title === "Home" || title === "Safety") {
    dropdownArrow = false;
  }

  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.header}>
            <div className={styles.title}>{title}</div>
            {dropdownArrow &&
              <div className={styles.button} onClick={handleFilterOpening}>
                {!isOpen ? (
                    <FontAwesomeIcon className={styles.arrow_button} icon={faAngleUp} />
                ) : ( 
                  <FontAwesomeIcon className={styles.arrow_button} icon={faAngleDown} />
                )}
              </div>
            }
          </div>
        </div>

        <div className={styles.inner_div}>
            <div>
                {isOpen && 
                    <div>{children}</div>
                }
            </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;