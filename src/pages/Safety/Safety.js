
import React, { useState } from 'react';
import overallStyles from '../overall.module.scss';
import Laboratory from './Laboratory';
import ProjectSafety from './ProjectSafety';
import SafetyGuidelines from './SafetyGuidelines';

const tabs = ["Project Safety Considerations", "Laboratory", "Safety Guidelines"];

const Safety = () => {
        const [active, setActive] = useState(tabs[0]);
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Safety.</div>
                    </div>
                    <div className={overallStyles.illustration}></div>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>Overview</div>
                    <div className={overallStyles.description}>
                        Due to unforeseen circumstances (one of which was a global pandemic, and the other of which was unforeseen maintenance and construction of our lab space by the University), we unfortunately did not have lab access this year. Although we were unable to perform any experiments, we still considered safety when writing our suggested procedures. We also state our lab’s safety equipment and the university and national guidelines we must follow while working in it.
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
                        <ProjectSafety/>
                    )}
                    { active === tabs[1] && (
                        <Laboratory/>
                    )}
                    { active === tabs[2] && (
                        <SafetyGuidelines/>
                    )}
                </div>
            </div>
        )
}

export default Safety;