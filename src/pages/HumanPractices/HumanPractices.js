
import React, { useState } from 'react';
import overallStyles from '../overall.module.scss';
import "./humanpractices.module.scss";
import ProjectValues from './ProjectValues';
import CurrentDiagnosis from './CurrentDiagnosis';
import DeterminingImplementation from './DeterminingImplementation';
import References from './References';

const tabs = ['Project Values', 'Understanding Current Diagnosis Process', 'Determining Implementation', 'References'];
const icons = ["", "", "", "https://2021.igem.org/wiki/images/c/c5/T--Waterloo--IconReference.png"]

const HumanPractices = (props) => {
    const [active, setActive] = useState(tabs[0]);

    return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Human Practices.</div>
                    </div>
                    <div className={overallStyles.illustration}></div>
                </div>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>
                        Overview
                    </span>
                    <div className={overallStyles.description}>
                        The development of NeuroDetech is a synthetic biology and scientific endeavour, which is deeply interwoven with societal, economic, and regulatory implications. To truly assess optimal user experiences, biomarker detection and hardware configuration, what is now coined “integrated human practices” is essential. From initial project selection to various implementation options, current frameworks and legislative precedents were characterized and evaluated. Stakeholder consultations from medical professionals and diagnostic equipment manufacturers shaped project direction along each and every stage. The following page dives deep into the impact of human practices on this year's project, which allows Neurodetech to extend beyond a synthetic biology proof of concept. 
                    </div>
                </div>
                <div className={overallStyles.sections_div}>
                    {tabs.map((tab, index) => (
                        <div key={tab} active={active === tab} onClick={() => setActive(tab)}>
                            <div className={overallStyles.sections}>
                                <div className={overallStyles.section_img}>
                                    <img id={`hp${index}`} src={icons[index]} alt= "Icon"/>
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