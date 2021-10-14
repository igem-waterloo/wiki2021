import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import Dropdown from './Dropdown';

class Header extends Component {
    render() {
        let title = window.location.pathname;
        title = title.replace('/', '');
        console.log("Title: ", title);

        let urls_list = [
            {
                main_url: "project",
                sub_urls: ["Description", "Engineering", "Model", "Measurement", "Implementation", "Proof_Of_Concept"]
            },
            {
                main_url: "home",
                sub_urls: [""]
            },
            {
                main_url: "parts",
                sub_urls: ["Parts", "Contribution", "improvement"]
            },
            {
                main_url: "human",
                sub_urls: ["Human_Practices", "Education", "Inclusion"]
            },
            {
                main_url: "team",
                sub_urls: ["Team", "Attributions", "Collaborations"]
            },
            {
                main_url: "safety",
                sub_urls: ["Safety"]
            }
        ]

        var current_url;

        urls_list.forEach(item => {
            if (item.sub_urls.includes(title)) {
                current_url = item.main_url;
            }
        });

        console.log("Current URL: ", current_url);
        return (
            <div className={styles.header_container}>
                <img src="./NeuroDetech.png" className={styles.logo_img}></img>
                <div className={styles.links_div}>
                { current_url === "home" ? 
                    <Link to="/" className={styles.link}>
                        <Dropdown open title="Home">
                        </Dropdown>
                    </Link>
                    :
                    <Link to="/" className={styles.link}>
                        <span className={styles.url_text}>Home</span>
                    </Link>
                }
                { current_url === "project" ?
                    <Link to="/Description" className={styles.link}>
                    <Dropdown open={true} title="Project">
                        <div className={styles.inner_links_div}>
                            <Link to="/Description" className={styles.sub_link}>
                                <span className={styles.link_text}>Description</span>
                            </Link>
                            <Link to="/Engineering" className={styles.sub_link}>
                                <span className={styles.link_text}>Engineering</span>
                            </Link>
                            <Link to="/Model" className={styles.sub_link}>
                                <span className={styles.link_text}>Model</span>
                            </Link>
                            <Link to="/Measurement" className={styles.sub_link}>
                                <span className={styles.link_text}>Measurement</span>
                            </Link>
                            <Link to="/Implementation" className={styles.sub_link}>
                                <span className={styles.link_text}>Implementation</span>
                            </Link>
                            <Link to="/Proof_Of_Concept" className={styles.sub_link}>
                                <span className={styles.link_text}>Proof of Concept</span>
                            </Link>
                        </div>
                    </Dropdown>
                    </Link>
                    :
                    <Link to="/Description" className={styles.link}>
                        <span className={styles.url_text}>Project</span>
                    </Link>
                }
                { current_url === "human" ?
                    <Link to="/Human_Practices" className={styles.link}>
                    <Dropdown open={true} title="Human Practices">
                        <div className={styles.inner_links_div}>
                            <Link to="/Human_Practices" className={styles.sub_link}>
                                <span className={styles.link_text}>Human Practices</span>
                            </Link>
                            <Link to="/Education" className={styles.sub_link}>
                                <span className={styles.link_text}>Education</span>
                            </Link>
                            <Link to="/Inclusion" className={styles.sub_link}>
                                <span className={styles.link_text}>Inclusion</span>
                            </Link>
                        </div>
                    </Dropdown>
                    </Link>
                    :
                    <Link to="/Human_Practices" className={styles.link}>
                        <span className={styles.url_text}>Human Practices</span>
                    </Link>
                }
                { current_url === "parts" ?
                    <Link to="/Parts" className={styles.link}>
                    <Dropdown open title="Parts">
                        <div className={styles.inner_links_div}>
                            <Link to="/Parts" className={styles.sub_link}>
                                <span className={styles.link_text}>Parts</span>
                            </Link>
                            <Link to="/Contribution" className={styles.sub_link}>
                                <span className={styles.link_text}>Contribution</span>
                            </Link>
                            <Link to="/Improvement" className={styles.sub_link}>
                                <span className={styles.link_text}>Improvement</span>
                            </Link>
                        </div>
                    </Dropdown>
                    </Link>
                    :
                    <Link to="/Parts" className={styles.link}>
                        <span className={styles.url_text}>Parts</span>
                    </Link>
                }
                { current_url === "team" ?
                    <Link to="/Team" className={styles.link}>
                    <Dropdown open title="Team">
                        <div className={styles.inner_links_div}>
                            <Link to="/Team" className={styles.sub_link}>
                                <span className={styles.link_text}>Members</span>
                            </Link>
                            <Link to="/Attributions" className={styles.sub_link}>
                                <span className={styles.link_text}>Attributions</span>
                            </Link>
                            <Link to="/Collaborations" className={styles.sub_link}>
                                <span className={styles.link_text}>Collaborations</span>
                            </Link>
                        </div>
                    </Dropdown>
                    </Link>
                    :
                    <Link to="/Team" className={styles.link}>
                        <span className={styles.url_text}>Team</span>
                    </Link>
                }
                { current_url === "safety" ?
                    <Link to="/Safety" className={styles.link}>
                    <Dropdown open title="Safety">
                    </Dropdown>
                    </Link>
                    :
                    <Link to="/Safety" className={styles.link}>
                        <span className={styles.url_text}>Safety</span>
                    </Link>
                }
                </div>
            </div>
        )
    }
}

export default Header;