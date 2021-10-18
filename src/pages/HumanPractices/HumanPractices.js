
import React, { useState } from 'react';
import overallStyles from '../overall.module.scss';
import styles from './humanpractices.module.scss';
import ProjectValues from './ProjectValues';
import CurrentDiagnosis from './CurrentDiagnosis';
import DeterminingImplementation from './DeterminingImplementation';
import References from './References';
import CareersEvent from './CareersEvent';

const HumanPractices = () => {
    const tabs = ['Project Values', 'Understanding Current Diagnosis Process', 'Determining Implementation', 'References'];
    const [active, setActive] = useState(tabs[0]);

    return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>
                            NeuroDetech
                        </div>
                        <div className={overallStyles.page_heading_colored}>
                            Human Practices.
                        </div>
                    </div>
                    <div className={overallStyles.illustration}></div>
                </div>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>
                        Overview
                    </span>
                    <div className={overallStyles.description}>
                        to be determined, and also the tab names
                    </div>
                </div>
                <div className={overallStyles.sections_div}>
                    {tabs.map(tab => (
                        <div key={tab} active={active === tab} onClick={() => setActive(tab)}>
                            <div className={overallStyles.sections}>
                            <div className={overallStyles.section_img}></div>
                            <div className={overallStyles.section_text}>
                                {tab}
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                    <div>
                    { active === tabs[0] && (
                        <ProjectValues/>
                    )}
                    { active === tabs[1] && (
                        <CurrentDiagnosis/>
                    )}
                    { active === tabs[2] && (
                        <DeterminingImplementation/>
                    )}
                    { active === tabs[3] && (
                        <References/>
                    )}
                    </div>
            </div>
        )
}

export default HumanPractices;