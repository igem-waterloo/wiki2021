import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import Dropdown from './Dropdown';

class Header extends Component {
    render() {
        let title = window.location.pathname;
        title = title.replace('/Team:Waterloo/', '');
        console.log("Title: ", title);

        let urls_list = [
            {
                main_url: "Project",
                sub_urls: ["Description", "Engineering", "Model", "Implementation", "Proof_Of_Concept"]
            },
            {
                main_url: "Home",
                sub_urls: [""]
            },
            {
                main_url: "Parts",
                sub_urls: ["Parts", "Contribution", "Improvement"]
            },
            {
                main_url: "Human",
                sub_urls: ["Human_Practices", "Education", "Inclusion"]
            },
            {
                main_url: "Team",
                sub_urls: ["Team", "Attributions", "Collaborations"]
            },
            {
                main_url: "Safety",
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
                <Link to="/Team:Waterloo">
                    <img src="https://2021.igem.org/wiki/images/6/6d/T--Waterloo--neuroDetech.png" className={styles.logo_img}/>
                </Link>
                <div className={styles.links_div}>
                    { current_url === "Home" ? 
                        <Link to="/Team:Waterloo" className={styles.link}>
                            <Dropdown open title="Home">
                            </Dropdown>
                        </Link>
                        :
                        <Link to="/Team:Waterloo" className={styles.link}>
                            <span className={styles.url_text}>Home</span>
                        </Link>
                    }
                    { current_url === "Project" ?
                        <Link to="/Team:Waterloo/Description" className={styles.link}>
                        <Dropdown open={true} title="Project">
                            <div className={styles.inner_links_div}>
                                <Link to="/Team:Waterloo/Description" className={styles.sub_link}>
                                    <span className={styles.link_text}>Description</span>
                                </Link>
                                <Link to="/Team:Waterloo/Engineering" className={styles.sub_link}>
                                    <span className={styles.link_text}>Engineering</span>
                                </Link>
                                <Link to="/Team:Waterloo/Model" className={styles.sub_link}>
                                    <span className={styles.link_text}>Model</span>
                                </Link>
                                <Link to="/Team:Waterloo/Implementation" className={styles.sub_link}>
                                    <span className={styles.link_text}>Implementation</span>
                                </Link>
                                <Link to="/Team:Waterloo/Proof_Of_Concept" className={styles.sub_link}>
                                    <span className={styles.link_text}>Proof of Concept</span>
                                </Link>
                            </div>
                        </Dropdown>
                        </Link>
                        :
                        <Link to="/Team:Waterloo/Description" className={styles.link}>
                            <span className={styles.url_text}>Project</span>
                        </Link>
                    }
                    { current_url === "Human_Practices" ?
                        <Link to="/Team:Waterloo/Human_Practices" className={styles.link}>
                        <Dropdown open={true} title="Human Practices">
                            <div className={styles.inner_links_div}>
                                <Link to="/Team:Waterloo/Human_Practices" className={styles.sub_link}>
                                    <span className={styles.link_text}>Human Practices</span>
                                </Link>
                                <Link to="/Team:Waterloo/Education" className={styles.sub_link}>
                                    <span className={styles.link_text}>Education</span>
                                </Link>
                                <Link to="/Team:Waterloo/Inclusion" className={styles.sub_link}>
                                    <span className={styles.link_text}>Inclusion</span>
                                </Link>
                            </div>
                        </Dropdown>
                        </Link>
                        :
                        <Link to="/Team:Waterloo/Human_Practices" className={styles.link}>
                            <span className={styles.url_text}>Human Practices</span>
                        </Link>
                    }
                    { current_url === "Parts" ?
                        <Link to="/Team:Waterloo/Parts" className={styles.link}>
                        <Dropdown open title="Parts">
                            <div className={styles.inner_links_div}>
                                <Link to="/Team:Waterloo/Parts" className={styles.sub_link}>
                                    <span className={styles.link_text}>Parts</span>
                                </Link>
                                <Link to="/Team:Waterloo/Contribution" className={styles.sub_link}>
                                    <span className={styles.link_text}>Contribution</span>
                                </Link>
                                <Link to="/Team:Waterloo/Improvement" className={styles.sub_link}>
                                    <span className={styles.link_text}>Improvement</span>
                                </Link>
                            </div>
                        </Dropdown>
                        </Link>
                        :
                        <Link to="/Team:Waterloo/Parts" className={styles.link}>
                            <span className={styles.url_text}>Parts</span>
                        </Link>
                    }
                    { current_url === "Team" ?
                        <Link to="/Team:Waterloo/Team" className={styles.link}>
                        <Dropdown open title="Team">
                            <div className={styles.inner_links_div}>
                                <Link to="/Team:Waterloo/Team" className={styles.sub_link}>
                                    <span className={styles.link_text}>Members</span>
                                </Link>
                                <Link to="/Team:Waterloo/Attributions" className={styles.sub_link}>
                                    <span className={styles.link_text}>Attributions</span>
                                </Link>
                                <Link to="/Team:Waterloo/Collaborations" className={styles.sub_link}>
                                    <span className={styles.link_text}>Collaborations</span>
                                </Link>
                            </div>
                        </Dropdown>
                        </Link>
                        :
                        <Link to="/Team:Waterloo/Team" className={styles.link}>
                            <span className={styles.url_text}>Team</span>
                        </Link>
                    }
                    { current_url === "Safety" ?
                        <Link to="/Team:Waterloo/Safety" className={styles.link}>
                        <Dropdown open title="Safety">
                        </Dropdown>
                        </Link>
                        :
                        <Link to="/Team:Waterloo/Safety" className={styles.link}>
                            <span className={styles.url_text}>Safety</span>
                        </Link>
                    }
                </div>
            </div>
        )
    }
}

export default Header;