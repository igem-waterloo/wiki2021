
import React, { useLayoutEffect, useState } from 'react';
import overallStyles from '../overall.module.scss';
import styles from './engineering.module.scss';
import ProcessDesign from './ProcessDesign';
import ProteinDesign from './ProteinDesign';
import FusionDesign from './FusionDesign';
import References from './References';

const tabs = ['Protein Optimization', 'Fusion Design', 'Process Design', 'References'];

const Engineering = () => {
        const [active, setActive] = useState(tabs[0]);
        
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Engineering.</div>
                    </div>
                    <div className={overallStyles.illustration}></div>
                </div>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>Overview</span>
                    <div className={overallStyles.description}>
                        Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder. Current diagnosis procedures require qualitative psychological tests, thus diagnoses are subject to clinician bias. NeuroDetech aims to create a quantitative tool to aid ADHD diagnosis and reduce the margin of bias.
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
                { active === 'Protein Optimization' && (
                    <ProteinDesign></ProteinDesign>
                )}
                { active === 'Fusion Design' && (
                    <FusionDesign></FusionDesign>
                )}
                { active === 'Process Design' && (
                    <ProcessDesign></ProcessDesign>
                )}
                { active === 'References' && (
                    <References></References>
                )}
                </div>
                {/* <p style={{color: 'white'}}> Your payment selection: {active} </p> */}
            </div>
        )
}

export default Engineering;