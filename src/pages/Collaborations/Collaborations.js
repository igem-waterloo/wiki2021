
import React, { useState } from 'react';
import overallStyles from '../overall.module.scss';
import CommunityCollaborations from './CommunityCollaborations';
import MentorshipAndCollaborations from './MentorshipAndCollaborations';
import UWaterlooCollaborations from './UWaterlooCollaborations';

const tabs = ["iGEM Mentorship & Collaborations", "University of Waterloo Collaborations", "Community Collaborations"];

const Collaborations = () => {
        const [active, setActive] = useState(tabs[0]);
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Collaborations.</div>
                    </div>
                    <div className={overallStyles.illustration}></div>
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
                            <div id={index} className={overallStyles.section_img}></div>
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