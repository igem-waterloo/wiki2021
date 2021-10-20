import React, { Component } from 'react';
import styles from './description.module.scss';
import overallStyles from '../overall.module.scss';

class Description extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.page_heading}>Project Description</span>
                    {/* <br className={styles.title_bottom} /> */}
                </div>
                <div className={styles.img_header}>
                    <img src="https://2021.igem.org/wiki/images/a/a4/T--Waterloo--projectDescription.png"></img>
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

export default Description;