import React, { Component } from 'react';
import overallStyles from '../overall.module.scss';
import styles from './homepage.module.scss';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class HomePage extends Component {
    
    // componentDidMount() {
    //     window.scrollTo(0, 0);
    // }
    
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.heading_div}>
                    <div className={styles.title}>
                        <div className={styles.main_heading_text}>
                            <b>NeuroDetech</b>: Reducing the Bias in ADHD Diagnoses
                        </div>
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
                    <div className={styles.intro_text} style={{maxWidth: "75%"}}>
                        Attention-Deficit/Hyperactivity Disorder, or ADHD, is a neurodevelopmental disorder characterized either by <b>inattentiveness</b> and <b>an inability to focus</b>, or <b>restlessness</b> and <b>impulsive decision-making</b>
                    </div>
                </div>
                <div className={styles.center_content_div}>
                    <div className={styles.categories_intro_text}>
                        Impacts aspects of an individual's life such as:
                    </div>
                    <ScrollAnimation animateIn='fadeInRight' className={styles.categories}>
                        <img src="https://2021.igem.org/wiki/images/3/3c/T--Waterloo--school.png" alt="School" className={styles.categories_img}/>
                        <div className={styles.categories_text}>School</div>
                    </ScrollAnimation>
                    <ScrollAnimation delay={800} animateIn='fadeInRight' className={styles.categories}>
                        <img src="https://2021.igem.org/wiki/images/1/14/T--Waterloo--work.png" alt="Work" className={styles.categories_img}/>
                        <div className={styles.categories_text}>Work</div>
                    </ScrollAnimation>
                    <ScrollAnimation delay={1600} animateIn='fadeInRight' className={styles.categories}>
                            <img src="https://2021.igem.org/wiki/images/7/76/T--Waterloo--relationships.png" alt="Relationships" className={styles.categories_img}/>
                            <div className={styles.categories_text}>Relationships</div>
                    </ScrollAnimation>
                </div>
                <div className={styles.center_content_div}>
                    <div className={styles.intro_text} style={{maxWidth: "50%"}}>
                        A 2017 study by the <b>World Health Organization</b> showed that the prevalence of ADHD is
                    </div>
                    <div className={styles.categories}>
                        <VisibilitySensor partialVisibility>
                            {({ isVisible }) => (
                            <div>
                                <div className={styles.count_up_div}>
                                    {isVisible ? <CountUp end={2} duration={0.5}/> : 0}
                                    -
                                    {isVisible ? <CountUp end={4} duration={0.5}/> : 0}
                                    %
                                    <div className={styles.count_up_text}>in adults</div>
                                </div>
                                <div className={styles.count_up_div}>
                                    {isVisible ? <CountUp end={10} duration={1}/> : 0}
                                    %
                                    <div className={styles.count_up_text}>in children</div>
                                </div>
                            </div>
                            )}
                        </VisibilitySensor>
                    </div>
                </div>
                <div className={styles.center_content_div}>
                    <div className={styles.intro_text} style={{maxWidth: "50%"}}>
                        Current ADHD diagnosis procedures require a series of <b>psychological assessments</b> conducted and interpreted by healthcare professionals.
                    </div>
                    <div className="mt-5"></div>
                    <div className={styles.intro_text} style={{maxWidth: "50%", paddingTop: "3%"}}>
                        Which can be influenced by the patient's <b>gender</b>, <b>race</b> and <b>culture</b>.
                    </div>
                </div>
                <div className={styles.heading_div} style={{marginTop: "-5%"}}>
                    <div className={styles.pie_chart_text}>
                        Gender biases are especially prevalent, with males being <b>3 times</b> more likely to be diagnosed than females.
                    </div>
                    <img src="https://2021.igem.org/wiki/images/3/3f/T--Waterloo--pieChart.png" alt="Pie Chart" className={styles.pie_chart_img}/>
                </div>
                <div className={styles.goal_background_div}>
                    <div className={styles.goal_background}>
                    <div className={styles.goal_text}>
                        The goal of <b>NeuroDetech</b> is to create a quantitative tool to aid the diagnosis of ADHD and reduce the margin of bias.
                    </div>
                    </div>
                </div>
                <div className={styles.heading_div}>
                    <div className={styles.question_text}>
                        How do we reduce bias in ADHD diagnoses?
                    </div>
                    <img src="https://2021.igem.org/wiki/images/9/93/T--Waterloo--lightbulb.png" alt="Lightbulb" className={styles.lightbulb_img}/>
                </div>
                <div className={styles.heading_div}>
                    <img src="https://2021.igem.org/wiki/images/0/02/T--Waterloo--biomarkers.png" alt="Biomarkers" className={styles.biomarkers_img}/>
                    <div className={styles.pie_chart_text}>
                        ADHD can be correlated to a statistically significant <b>lack or surplus</b> of specific biomarkers.
                    </div>
                </div>
                <div className={styles.center_content_div}>
                    <div className={styles.intro_text} style={{maxWidth: "75%"}}>
                    By quantifying the concentration of these biomarkers in urine, a non-invasive assessment of the risk of having ADHD can be provided.

                    </div>
                </div>
                <div className={styles.center_content_div} style={{marginBottom: "3%"}}>
                    <div className={styles.discover_text}>
                        Click below to learn more: 
                    </div>
                </div>
                <div className={styles.icons_div}>
                    <Link to="/Team:Waterloo/Engineering" className={styles.icons} style={{ marginLeft: "-30%", marginRight: "30%"}}>
                        <div className={styles.icons_img} style={{backgroundImage: "var(--main-page-engineering-icon)"}}/>
                        <div className={styles.icons_text}>Engineering</div>
                    </Link>
                    <Link to="/Team:Waterloo/Human_Practices" className={styles.icons} style={{ marginLeft: "30%", marginRight: "-30%"}}>
                        <div className={styles.icons_img} style={{backgroundImage: "var(--main-page-human-practices-icon)"}}/>
                        <div className={styles.icons_text}>Human Practices</div>
                    </Link>
                </div>
                <div className={styles.icons_div}>
                    <Link to="/Team:Waterloo/Description" className={styles.icons}>
                        <div className={styles.icons_img} style={{backgroundImage: "var(--main-page-project-description-icon)"}}/>
                        <div className={styles.icons_text} >Project Description</div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default HomePage;