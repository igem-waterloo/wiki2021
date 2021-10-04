import React, { Component } from 'react';
import overallStyles from '../overall.module.scss';
import styles from './engineering.module.scss';

class Engineering extends Component {
    render() {
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
                    <div className={styles.sections}>
                        <div className={styles.section_img}></div>
                        <div className={styles.section_text}>
                            Protein Design
                        </div>
                    </div>
                    <div className={styles.sections}>
                        <div className={styles.section_img}></div>
                        <div className={styles.section_text}>
                            Fusion Design
                        </div>
                    </div>
                    <div className={styles.sections}>
                        <div className={styles.section_img}></div>
                        <div className={styles.section_text}>
                            Process Design
                        </div>
                    </div>
                    <div className={styles.sections}>
                        <div className={styles.section_img}></div>
                        <div className={styles.section_text}>
                            References
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Engineering;