import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import Dropdown from './Dropdown';
import { useLocation } from 'react-router';

function Header() {
    const [currentUrl, setCurrentUrl] = useState("/");
    const location = useLocation();
    
    let urls_list = [];

    useEffect(() => {
        console.log('Location changed', location.pathname);
        let newLocation = location.pathname.replace('/Team:Waterloo/', '');
        if (newLocation === "/Team:Waterloo") {
            newLocation = "";
        }
        setCurrentUrl(newLocation);

        const urls_list = [
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
                main_url: "Human_Practices",
                sub_urls: ["Human_Practices", "Education", "Inclusion"]
            },
            {
                main_url: "Team",
                sub_urls: ["Team", "Attributions", "Collaborations"]
            },
            {
                main_url: "Safety",
                sub_urls: ["Safety"]
            },
            {
                main_url: "Finance",
                sub_urls: ["Finance"]
            }
        ];

        urls_list.forEach(item => {
            if (item.sub_urls.includes(newLocation)) {
                setCurrentUrl(item.main_url);
            }
        });
    }, [location, urls_list]);

    return(
        <div className={styles.header_container}>
            <Link to="/Team:Waterloo">
                <img src="https://2021.igem.org/wiki/images/6/6d/T--Waterloo--neuroDetech.png" className={styles.logo_img}/>
            </Link>
            <div className={styles.links_div}>
                { currentUrl === "Home" ? 
                    <Link to="/Team:Waterloo" className={styles.link}>
                        <Dropdown open={true} title="Home">
                        </Dropdown>
                    </Link>
                    :
                    <Link to="/Team:Waterloo" className={styles.link}>
                        <span className={styles.url_text}>Home</span>
                    </Link>
                }
                { currentUrl === "Project" ?
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
                { currentUrl === "Human_Practices" ?
                    <Link to="/Team:Waterloo/Human_Practices" className={styles.link}>
                    <Dropdown open={true} title="Human Practices">
                        <div className={styles.inner_links_div}>
                            <Link to="/Team:Waterloo/Human_Practices" className={styles.sub_link}>
                                <span className={styles.link_text}>Human Practices</span>
                            </Link>
                            <Link to="/Team:Waterloo/Education" className={styles.sub_link}>
                                <span className={styles.link_text}>Education</span>
                            </Link>
                            <Link to="/Team:Waterloo/Inclusivity" className={styles.sub_link}>
                                <span className={styles.link_text}>Inclusivity</span>
                            </Link>
                        </div>
                    </Dropdown>
                    </Link>
                    :
                    <Link to="/Team:Waterloo/Human_Practices" className={styles.link}>
                        <span className={styles.url_text}>Human Practices</span>
                    </Link>
                }
                { currentUrl === "Parts" ?
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
                { currentUrl === "Team" ?
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
                { currentUrl === "Safety" ?
                    <Link to="/Team:Waterloo/Safety" className={styles.link}>
                    <Dropdown open title="Safety">
                    </Dropdown>
                    </Link>
                    :
                    <Link to="/Team:Waterloo/Safety" className={styles.link}>
                        <span className={styles.url_text}>Safety</span>
                    </Link>
                }
                { currentUrl === "Finance" ?
                    <Link to="/Team:Waterloo/Finance" className={styles.link}>
                    <Dropdown open title="Finance">
                    </Dropdown>
                    </Link>
                    :
                    <Link to="/Team:Waterloo/Finance" className={styles.link}>
                        <span className={styles.url_text}>Finance</span>
                    </Link>
                }
            </div>
        </div>
        )
}

export default Header;