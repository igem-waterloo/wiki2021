
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
            <div className={styles.container}>
                <div className={styles.heading_div}>
                    <div className={styles.title}>
                        <div className={overallStyles.page_heading}>
                            NeuroDetech
                        </div>
                        <div className={overallStyles.page_heading_colored}>
                            Human Practices.
                        </div>
                    </div>
                    <div className={styles.illustration}></div>
                </div>
                <div className={styles.text_div}>
                    <span className={overallStyles.text_heading}>
                        Overview
                    </span>
                    <div className={overallStyles.description}>
                        to be determined, and also the tab names
                    </div>
                </div>
                <div className={styles.sections_div}>
                    {tabs.map(tab => (
                        <div key={tab} active={active === tab} onClick={() => setActive(tab)}>
                            <div className={styles.sections}>
                            <div className={styles.section_img}></div>
                            <div className={styles.section_text}>
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