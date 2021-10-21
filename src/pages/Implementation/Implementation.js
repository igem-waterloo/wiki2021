
import React, { useState } from 'react';
import overallStyles from '../overall.module.scss';
import CurrentChallenges from './CurrentChallenges';
import GeneralSafetyConsiderations from './GeneralSafetyConsiderations';
import ImplementationLabSettings from './ImplementationLabSettings';
import ProperUsage from './ProperUsage';
import References from './References';

const tabs = ["NeuroDetech Implementation in Lab Settings", "Proper Usage of NeuroDetech", "General Safety Considerations for NeuroDetech Usage", "Current Challenges and Future Improvements", "References"];

const Implementation = () => {
        const [active, setActive] = useState(tabs[0]);
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Implementation.</div>
                    </div>
                    <div className={overallStyles.illustration}></div>
                </div>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>Overview</span>
                    <div className={overallStyles.description}>
                        Throughout the entirety of NeuroDetech’s development, we kept its implementation at the forefront of our minds. Continuous stakeholder feedback and thorough research from all 3 subteams allowed us to create a product that could realistically be manufactured and employed in laboratory settings. 
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
                        <ImplementationLabSettings/>
                    )}
                    
                    { active === tabs[1] && (
                        <ProperUsage/>
                    )}
                    { active === tabs[2] && (
                        <GeneralSafetyConsiderations/>
                    )}
                    { active === tabs[3] && (
                        <CurrentChallenges/>
                    )}
                    { active === tabs[4] && (
                        <References/>
                    )}
                </div>
            </div>
        )
}

export default Implementation;