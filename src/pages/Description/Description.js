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
                    <span className={styles.heading}>Project Description</span>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/f/f3/T--Waterloo--projectThumbnail.jpeg" alt="Banner" className={styles.banner_img}/>
                </div>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>
                        Overview
                    </span>
                    <div className={overallStyles.description}>
                        Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder characterized by inattentiveness, an inability to focus, and restlessness. Current ADHD diagnosis procedures require a series of psychological assessments that are qualitative in nature and subject to potential clinician bias. 
                    </div>
                    <div className={overallStyles.description}>
                        During the process of project development, we were inspired by the stories of some of our team members who have ADHD and first-hand experience with the diagnosis procedure. Upon further research, we learned about how many biases there are in the ADHD diagnosis process. For example, females are typically underdiagnosed because the assessments upon which ADHD diagnosis relies are based on data from males (Skogli et al., 2013). This, along with other areas of biases inspired us to develop a tool that could quantitatively aid in the diagnosis of ADHD. 
                    </div>
                    <div className={overallStyles.description}>
                        <b>The result of our efforts is NeuroDetech.</b>
                    </div>
                    <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                        NeuroDetech is a quantitative tool that aids in the diagnosis of ADHD and reduces the margin of bias. NeuroDetech consists of a series of microfluidic capillary flow assay (MCFA) lab chips designed using process engineering methods. Each MCFA lab chip contains a binding molecule (a fusion protein or CRISPR-Cas13a complex) that detects an ADHD-associated biomarker or gene marker in urine. Through protein engineering and computational protein redesign methods, the binding molecule can be adapted for the sensitive detection of a variety of ADHD-associated markers. Specifically, we have designed MCFA chips that detect the following:
                    </div>
                    <ul className={overallStyles.description}>
                        <li>
                            A deficiency in phenylethylamine (PEA), which is excreted in the urine and is a known indicator of ADHD. A fusion protein is used to facilitate the detection of urinary PEA.
                        </li>
                        <li>
                            The presence of ADHD-associated mutations in the mRNA transcripts of the <i>DRD4</i> and <i>SNAP25</i> genes. To detect these mutations in mRNA, CRISPR-Cas13a is used. 
                        </li>
                    </ul>
                    <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                        The signal produced by each lab chip can be analyzed by an optical detector, which emits a signal over time that is visualized on a software app. All in all, NeuroDetech provides healthcare professionals with insight into an individual’s risk for ADHD.
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                        <div className={styles.video_text}>Promotion Video</div>
                        <video controls className={styles.video}>
                            <source src="https://2021.igem.org/wiki/images/5/51/T--Waterloo--DescriptionPromotionVideo.mp4"/>
                        </video>
                </div>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>
                        References
                    </span>
                    <ul className={overallStyles.description}>
                        <li>
                            Skogli, E. W., Teicher, M. H., Andersen, P. N., Hovik, K. T., &amp; Øie, M. (2013). ADHD in girls and boys–gender differences in co-existing symptoms and executive function measures. BMC psychiatry, 13(1), 1-12.                     
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Description;