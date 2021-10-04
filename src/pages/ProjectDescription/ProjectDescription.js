import React, { Component } from 'react';
import styles from './projectdescription.module.scss';
import overallStyles from '../overall.module.scss';

class ProjectDescription extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.text_div}>
                    <span className={overallStyles.page_heading}>Project Description</span>
                    {/* <br className={styles.title_bottom} /> */}
                </div>
                <div className={styles.img_header}>
                    <img src="./Project/description_header.png"></img>
                </div>
                <div className={styles.text_div}>
                    <span className={styles.page_heading}>Overview</span>
                    <div className={styles.description}>
                        Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder. Current diagnosis procedures require qualitative psychological tests, thus diagnoses are subject to clinician bias. NeuroDetech aims to create a quantitative tool to aid ADHD diagnosis and reduce the margin of bias.
                    </div>
                </div>
                <div className={styles.videos_div}>
                    <div>
                        <span className={styles.page_heading}>Promotion Video</span>
                        <div className={styles.video}></div>
                    </div>
                    <div>
                        <span className={styles.page_heading}>Presentation Video</span>
                        <div className={styles.video}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectDescription;