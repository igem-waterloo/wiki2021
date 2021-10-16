
import React, { Component, useState } from 'react';
import overallStyles from '../overall.module.scss';
import styles from './engineering.module.scss';
import ProcessDesign from './ProcessDesign';
import ProteinDesign from './ProteinDesign';
import FusionDesign from './FusionDesign';
import References from './References';

const tabs = ['Protein Design', 'Fusion Design', 'Process Design', 'References'];

const Engineering = () => {
        const [active, setActive] = useState(tabs[0]);
        return (
            <div className={styles.container}>
                <div className={styles.header_div}>
                    <div className={styles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Engineering.</div>
                    </div>
                    <div className={styles.illustration}></div>
                </div>
                <div className={styles.text_div}>
                    <span className={overallStyles.text_heading}>Overview</span>
                    <div className={overallStyles.description}>
                        Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder. Current diagnosis procedures require qualitative psychological tests, thus diagnoses are subject to clinician bias. NeuroDetech aims to create a quantitative tool to aid ADHD diagnosis and reduce the margin of bias.
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
                { active === 'Protein Design' && (
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