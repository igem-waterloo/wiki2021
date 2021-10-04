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
                    <Link to="/Team:Waterloo/description" className={styles.link}>
                        <span className={styles.link_text}>Description</span>
                    </Link>
                    <Link to="/Team:Waterloo/engineering" className={styles.link}>
                        <span className={styles.link_text}>Engineering</span>
                    </Link>
                    <Link to="/Team:Waterloo/model" className={styles.link}>
                        <span className={styles.link_text}>Model</span>
                    </Link>
                    <Link to="/Team:Waterloo/measurement" className={styles.link}>
                        <span className={styles.link_text}>Measurement</span>
                    </Link>
                    <Link to="/Team:Waterloo/implementation" className={styles.link}>
                        <span className={styles.link_text}>Implementation</span>
                    </Link>
                    <Link to="/Team:Waterloo/proofofconcept" className={styles.link}>
                        <span className={styles.link_text}>Proof of Concept</span>
                    </Link>
                </div>
                <div className={styles.projects_div}>
                <span className={styles.heading_text}>Parts</span>
                    <Link to="/Team:Waterloo/parts" className={styles.link}>
                        <span className={styles.link_text}>Parts</span>
                    </Link>
                    <Link to="/Team:Waterloo/contribution" className={styles.link}>
                        <span className={styles.link_text}>Contribution</span>
                    </Link>
                    <Link to="/Team:Waterloo/improvement" className={styles.link}>
                        <span className={styles.link_text}>Improvement</span>
                    </Link>
                </div>
                <div className={styles.projects_div}>
                <span className={styles.heading_text}>Human Practices</span>
                    <Link to="/Team:Waterloo/humanpractices" className={styles.link}>
                        <span className={styles.link_text}>Human Practices</span>
                    </Link>
                    <Link to="/Team:Waterloo/education" className={styles.link}>
                        <span className={styles.link_text}>Education</span>
                    </Link>
                    <Link to="/Team:Waterloo/excellence" className={styles.link}>
                        <span className={styles.link_text}>Excellence</span>
                    </Link>
                </div>
                <div className={styles.projects_div}>
                <span className={styles.heading_text}>Team</span>
                    <Link to="/Team:Waterloo/members" className={styles.link}>
                        <span className={styles.link_text}>Members</span>
                    </Link>
                    <Link to="/Team:Waterloo/attributions" className={styles.link}>
                        <span className={styles.link_text}>Attributions</span>
                    </Link>
                    <Link to="/Team:Waterloo/collaborations" className={styles.link}>
                        <span className={styles.link_text}>Collaborations</span>
                    </Link>
                </div>
                <div className={styles.projects_div}>
                    <span className={styles.heading_text}>Social Media</span>
                    <div className={styles.icons_div}>
                    <a href="https://www.facebook.com/uottawaessaeg" target="_blank" rel="noopener noreferrer">
                        <img src="https://2021.igem.org/wiki/images/2/2d/T--Waterloo--facebookLogo.png" alt="Facebook" className={styles.facebook_img} />
                    </a>
                    <a href="https://www.facebook.com/uottawaessaeg" target="_blank" rel="noopener noreferrer">
                        <img src="https://2021.igem.org/wiki/images/a/a2/T--Waterloo--twitterLogo.png" alt="Twitter" className={styles.facebook_img} />
                    </a>
                    <a href="https://www.facebook.com/uottawaessaeg" target="_blank" rel="noopener noreferrer">
                        <img src="https://2021.igem.org/wiki/images/2/20/T--Waterloo--instagramLogo.png" alt="Instagram" className={styles.facebook_img} />
                    </a>
                    <a href="https://www.facebook.com/uottawaessaeg" target="_blank" rel="noopener noreferrer">
                        <img src="https://2021.igem.org/wiki/images/0/0d/T--Waterloo--githubLogo.png" alt="Github" className={styles.facebook_img} />
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;