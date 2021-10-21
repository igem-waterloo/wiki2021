import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';

class Footer extends Component {
    render() {
        return (
            <div className={styles.footer_container}>
                <img src="https://2021.igem.org/wiki/images/f/f8/T--Waterloo--igemLogo.png" className={styles.igem_img}></img>
                <div className={styles.projects_div}>
                    <span className={styles.heading_text}>Project</span>
                    <Link to="/Team:Waterloo/Description" className={styles.link}>
                        <span className={styles.link_text}>Description</span>
                    </Link>
                    <Link to="/Team:Waterloo/Engineering" className={styles.link}>
                        <span className={styles.link_text}>Engineering</span>
                    </Link>
                    <Link to="/Team:Waterloo/Hardware" className={styles.link}>
                        <span className={styles.link_text}>Hardware</span>
                    </Link>
                    <Link to="/Team:Waterloo/Implementation" className={styles.link}>
                        <span className={styles.link_text}>Implementation</span>
                    </Link>
                    <Link to="/Team:Waterloo/Model" className={styles.link}>
                        <span className={styles.link_text}>Model</span>
                    </Link>
                    <Link to="/Team:Waterloo/Proof_Of_Concept" className={styles.link}>
                        <span className={styles.link_text}>Proof of Concept</span>
                    </Link>
                </div>
                <div className={styles.projects_div}>
                <span className={styles.heading_text}>Parts</span>
                    <Link to="/Team:Waterloo/Parts" className={styles.link}>
                        <span className={styles.link_text}>Parts</span>
                    </Link>
                    <Link to="/Team:Waterloo/Contribution" className={styles.link}>
                        <span className={styles.link_text}>Contribution</span>
                    </Link>
                </div>
                <div className={styles.projects_div}>
                <span className={styles.heading_text}>Human Practices</span>
                    <Link to="/Team:Waterloo/Human_Practices" className={styles.link}>
                        <span className={styles.link_text}>Human Practices</span>
                    </Link>
                    <Link to="/Team:Waterloo/Communication" className={styles.link}>
                        <span className={styles.link_text}>Communication</span>
                    </Link>
                    <Link to="/Team:Waterloo/Education" className={styles.link}>
                        <span className={styles.link_text}>Education</span>
                    </Link>
                    <Link to="/Team:Waterloo/Finance" className={styles.link}>
                        <span className={styles.link_text}>Finance</span>
                    </Link>
                    <Link to="/Team:Waterloo/Inclusivity" className={styles.link}>
                        <span className={styles.url_text}>Inclusivity</span>
                    </Link>
                </div>
                <div className={styles.projects_div}>
                    <span className={styles.heading_text}>Safety</span>
                    <Link to="/Team:Waterloo/Safety" className={styles.link}>
                        <span className={styles.url_text}>Safety</span>
                    </Link>
                </div>
                <div className={styles.projects_div}>
                <span className={styles.heading_text}>Team</span>
                    <Link to="/Team:Waterloo/Team" className={styles.link}>
                        <span className={styles.link_text}>Members</span>
                    </Link>
                    <Link to="/Team:Waterloo/Attributions" className={styles.link}>
                        <span className={styles.link_text}>Attributions</span>
                    </Link>
                    <Link to="/Team:Waterloo/Collaborations" className={styles.link}>
                        <span className={styles.link_text}>Collaborations</span>
                    </Link>
                </div>
                <div className={styles.projects_div}>
                    <span className={styles.heading_text}>Social Media</span>
                    <div className={styles.icons_div}>
                    <a href="https://www.facebook.com/WaterlooiGEM/" target="_blank" rel="noopener noreferrer">
                        <img src="https://2021.igem.org/wiki/images/2/2d/T--Waterloo--facebookLogo.png" alt="Facebook" className={styles.facebook_img} />
                    </a>
                    <a href="https://twitter.com/waterloo_igem?lang=en" target="_blank" rel="noopener noreferrer">
                        <img src="https://2021.igem.org/wiki/images/a/a2/T--Waterloo--twitterLogo.png" alt="Twitter" className={styles.facebook_img} />
                    </a>
                    <a href="https://www.instagram.com/waterloo.igem/?hl=en" target="_blank" rel="noopener noreferrer">
                        <img src="https://2021.igem.org/wiki/images/2/20/T--Waterloo--instagramLogo.png" alt="Instagram" className={styles.facebook_img} />
                    </a>
                    <a href="https://github.com/igem-waterloo" target="_blank" rel="noopener noreferrer">
                        <img src="https://2021.igem.org/wiki/images/0/0d/T--Waterloo--githubLogo.png" alt="Github" className={styles.facebook_img} />
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;