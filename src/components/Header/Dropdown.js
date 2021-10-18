import React, { useState } from "react";
import styles from './dropdown.module.scss';
import Collapse from 'react-bootstrap/Collapse';

const Dropdown = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);
  const [arrow, setArrow] = useState("▲");

  const toggleVisibility = () => {
      if (isOpen) {
          setArrow("▼");
      } else {
          setArrow("▲");
      }
      setIsOpen(!isOpen);
  }

  return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button className={styles.close_button} onClick={() => toggleVisibility()}>
                    <div className={styles.title}>{title}</div>
                    <div style={{marginTop: "2%"}}>{arrow}</div>
                </button>
            </div>
            <Collapse in={isOpen}>
                    <div>{children}</div>
                </Collapse>
            
        </div>
    )
};

export default Dropdown;