import React, { Component } from 'react';
import overallStyles from '../overall.module.scss';
import styles from './homepage.module.scss';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

class HomePage extends Component {
    
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.heading_div}>
                    <div className={styles.title}>
                        <div className={styles.main_heading_text}>Reducing the Bias in ADHD Diagnoses</div>
                        <div className={styles.heading_desc_text}>NeuroDetech consists of a microfluidic capillary flow assay (MCFA) lab chip.</div>
                        <div className='mt-3'>
                            <Link to="/Team:Waterloo/Description" className={styles.project_button_link}>
                                <button className={styles.project_button}>Project</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.header_img_div}>
                        <img src="https://2021.igem.org/wiki/images/c/c1/T--Waterloo--chip.png" alt="Chip" className={styles.header_img}/>
                    </div>
                </div>
                <div className={styles.center_content_div}>
                    <div className={styles.intro_text}>
                    Attention-Deficit/Hyperactivity Disorder, or ADHD, is a neurodevelopmental disorder characterized either by <b>inattentiveness</b> and <b>an inability to focus</b>, or <b>restlessness</b> and <b>impulsive decision-making</b>
                    </div>
                </div>
                <div className={styles.center_content_div}>
                    <div className={styles.categories_intro_text}>
                        Affects individuals on
                    </div>
                    <ScrollAnimation animateIn='fadeInRight' className={styles.categories}>
                        <img src="https://2021.igem.org/wiki/images/3/3c/T--Waterloo--school.png" alt="School" className={styles.categories_img}/>
                        <div className={styles.categories_text}>School</div>
                    </ScrollAnimation>
                    <ScrollAnimation delay={800}
                        animateIn='fadeInRight'
                        className={styles.categories}>
                        <img src="https://2021.igem.org/wiki/images/1/14/T--Waterloo--work.png" alt="Work" className={styles.categories_img}/>
                        <div className={styles.categories_text}>Work</div>
                    </ScrollAnimation>
                    <ScrollAnimation delay={1600}
                        animateIn='fadeInRight'
                        className={styles.categories}>
                        <img src="https://2021.igem.org/wiki/images/7/76/T--Waterloo--relationships.png" alt="Relationships" className={styles.categories_img}/>
                        <div className={styles.categories_text}>Relationships</div>
                    </ScrollAnimation>
                </div>
                <div className={styles.center_content_div}>
                <div className={styles.intro_text}>
                    A 2017 study by the <b>World Health Organization</b> showed that the prevalence of ADHD is
                </div>
                </div>
            </div>
        )
    }
}

export default HomePage;