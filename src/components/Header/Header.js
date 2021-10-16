import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

class Header extends Component {
    render() {
        return (
            <div className={styles.header_container}>
                <Link to="/Team:Waterloo">
                    <img src="https://2021.igem.org/wiki/images/6/6d/T--Waterloo--neuroDetech.png" className={styles.logo_img}/>
                </Link>
                <div className={styles.links_div}>
                <Link to="/Team:Waterloo" className={styles.link}>
                    <span className={styles.link_text}>Home</span>
                </Link>
                <Link to="/Team:Waterloo/Description" className={styles.link}>
                    <span className={styles.link_text}>Project</span>
                </Link>
                <Link to="/Team:Waterloo/Human_Practices" className={styles.link}>
                    <span className={styles.link_text}>Human Practices</span>
                </Link>
                <Link to="/Team:Waterloo/Parts" className={styles.link}>
                    <span className={styles.link_text}>Parts</span>
                </Link>
                <Link to="/Team:Waterloo/Team" className={styles.link}>
                    <span className={styles.link_text}>Team</span>
                </Link>
                <Link to="/Team:Waterloo/Safety" className={styles.link}>
                    <span className={styles.link_text}>Safety</span>
                </Link>
                </div>
            </div>
        )
    }
}

export default Header;