
import React, { useState } from 'react';
import overallStyles from '../overall.module.scss';
import styles from "./collaborations.module.scss";
import CommunityCollaborations from './CommunityCollaborations';
import MentorshipAndCollaborations from './MentorshipAndCollaborations';
import UWaterlooCollaborations from './UWaterlooCollaborations';
const tabs = ["iGEM Mentorship & Collaborations", "University of Waterloo Collaborations", "Community Collaborations"];
const icons = ["", "https://2021.igem.org/wiki/images/3/33/T--Waterloo--ResearchTalkSeries.png", ""]

const Collaborations = () => {
        const [active, setActive] = useState(tabs[0]);
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Collaborations.</div>
                    </div>
                    <div className={overallStyles.illustration}>
                        <img src="https://2021.igem.org/wiki/images/0/0b/T--Waterloo--IconCollaborationMainTop.jpeg" alt="Collaborations Icon" className={styles.icon_img}/>
                    </div>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>Overview</div>
                    <div className={overallStyles.description}>
                    This year, collaborations included a large array of organizations both within and outside of the iGEM community. Although in-person events could not be completed, the team takes pride in the impactful work through online platforms in order to foster opportunities in synthetic biology. The collaborations are documented and described in the following categories: iGEM collaborations, internal university collaborations and collaborations with the greater community.
                    </div>
                </div>
                <div className={overallStyles.sections_div}>
                    {tabs.map((tab, index) => (
                        <div key={tab} active={active === tab} onClick={() => setActive(tab)}>
                            <div className={overallStyles.sections}>
                                <div className={overallStyles.section_img}>
                                    <img id={`collaborations${index}`} src={icons[index]} alt= "Icon"/>
                                </div>
                                <div className={overallStyles.section_text}>
                                    {tab}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    { active === tabs[0] && (
                        <MentorshipAndCollaborations/>
                    )}
                    
                    { active === tabs[1] && (
                        <UWaterlooCollaborations/>
                    )}
                    
                    { active === tabs[2] && (
                        <CommunityCollaborations/>
                    )}
                </div>
            </div>
        )
}

export default Collaborations;