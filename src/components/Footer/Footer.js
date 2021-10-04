import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';

class Footer extends Component {
    render() {
        return (
            <div className={styles.footer_container}>
                <img src="https://2021.igem.org/wiki/images/f/f8/T--Waterloo--igemLogo.png" className={styles.igem_img}></img>
                <div className={styles.projects_div}>
                    <span className={styles.heading_text}>Projects</span>
                    <Link to="/description" className={styles.link}>
                        <span className={styles.link_text}>Description</span>
                    </Link>
                    <Link to="/engineering" className={styles.link}>
                        <span className={styles.link_text}>Engineering</span>
                    </Link>
                    <Link to="/model" className={styles.link}>
                        <span className={styles.link_text}>Model</span>
                    </Link>
                    <Link to="/measurement" className={styles.link}>
                        <span className={styles.link_text}>Measurement</span>
                    </Link>
                    <Link to="/implementation" className={styles.link}>
                        <span className={styles.link_text}>Implementation</span>
                    </Link>
                    <Link to="/proofofconcept" className={styles.link}>
                        <span className={styles.link_text}>Proof of Concept</span>
                    </Link>
                </div>
                <div className={styles.projects_div}>
                <span className={styles.heading_text}>Parts</span>
                    <Link to="/parts" className={styles.link}>
                        <span className={styles.link_text}>Parts</span>
                    </Link>
                    <Link to="/contribution" className={styles.link}>
                        <span className={styles.link_text}>Contribution</span>
                    </Link>
                    <Link to="/improvement" className={styles.link}>
                        <span className={styles.link_text}>Improvement</span>
                    </Link>
                </div>
                <div className={styles.projects_div}>
                <span className={styles.heading_text}>Human Practices</span>
                    <Link to="/humanpractices" className={styles.link}>
                        <span className={styles.link_text}>Human Practices</span>
                    </Link>
                    <Link to="/education" className={styles.link}>
                        <span className={styles.link_text}>Education</span>
                    </Link>
                    <Link to="/excellence" className={styles.link}>
                        <span className={styles.link_text}>Excellence</span>
                    </Link>
                </div>
                <div className={styles.projects_div}>
                <span className={styles.heading_text}>Team</span>
                    <Link to="/members" className={styles.link}>
                        <span className={styles.link_text}>Members</span>
                    </Link>
                    <Link to="/attributions" className={styles.link}>
                        <span className={styles.link_text}>Attributions</span>
                    </Link>
                    <Link to="/collaborations" className={styles.link}>
                        <span className={styles.link_text}>Collaborations</span>
                    </Link>
                </div>
                <div className={styles.projects_div}>
                    <span className={styles.heading_text}>Social Media</span>
                    <div className={styles.icons_div}>
                    <a href="https://www.facebook.com/uottawaessaeg" target="_blank" rel="noopener noreferrer">
                        <img src="./facebook.png" alt="Facebook Icon" className={styles.facebook_img} />
                    </a>
                    <a href="https://www.facebook.com/uottawaessaeg" target="_blank" rel="noopener noreferrer">
                        <img src="./twitter.png" alt="Twitter Icon" className={styles.facebook_img} />
                    </a>
                    <a href="https://www.facebook.com/uottawaessaeg" target="_blank" rel="noopener noreferrer">
                        <img src="./instagram.png" alt="Instagram Icon" className={styles.facebook_img} />
                    </a>
                    <a href="https://www.facebook.com/uottawaessaeg" target="_blank" rel="noopener noreferrer">
                        <img src="./github.png" alt="Github Icon" className={styles.facebook_img} />
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;