import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

class Header extends Component {
    render() {
        return (
            <div className={styles.header_container}>
                <img src="./NeuroDetech.png" className={styles.logo_img}></img>
                <div className={styles.links_div}>
                <Link to="/" className={styles.link}>
                    <span className={styles.link_text}>Home</span>
                </Link>
                <Link to="/project" className={styles.link}>
                    <span className={styles.link_text}>Project</span>
                </Link>
                <Link to="/humanpractices" className={styles.link}>
                    <span className={styles.link_text}>Human Practices</span>
                </Link>
                <Link to="/parts" className={styles.link}>
                    <span className={styles.link_text}>Parts</span>
                </Link>
                <Link to="/team" className={styles.link}>
                    <span className={styles.link_text}>Team</span>
                </Link>
                <Link to="/safety" className={styles.link}>
                    <span className={styles.link_text}>Safety</span>
                </Link>
                </div>
            </div>
        )
    }
}

export default Header;