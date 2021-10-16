import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './collapsible.module.scss';
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Collapsible = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(!open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.header}>
            <div className={styles.title}>{title}</div>
            <div className={styles.button} onClick={handleFilterOpening}>
              {!isOpen ? (
                  <FontAwesomeIcon className={styles.arrow_button} icon={faAngleRight} />
              ) : ( 
                <FontAwesomeIcon className={styles.arrow_button} icon={faAngleDown} />
              )}
            </div>
          </div>
        </div>

        <div className={styles.inner_div}>
            <div>
                {isOpen && 
                    <div style={{margin: '50px 0px', display: "flex", flexDirection: "column"}}>{children}</div>
                }
            </div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;