import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";
import styles from "./careerssynbio.module.scss";

class CareersSynBio extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>Careers in Synthetic Biology</span>
                    <div className={overallStyles.description}>
                        As part of Waterloo iGEM's outreach strategy this year, we wanted to create an educational event focusing on professional development and diversity in synthetic biology, as well as a discussion on how participation in iGEM can aid in preparation for a future career in the synthetic biology industry. The Human Practices team recognized that post-secondary students participate in extracurricular activities to develop skills and gain opportunities to advance their careers. We wanted to leverage this shared interest and iGEM’s strong connection to the synthetic biology industry in our outreach efforts this year through the execution of a speaker panel and networking event. 
                    </div>
                    <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                        Our goals for this event were three-fold:
                    </div>
                    <ul className={overallStyles.description}>
                        <li> 
                            To showcase various career paths available to life science students. 
                        </li>
                        <li> 
                            To demonstrate how iGEM can be a beneficial way to build a relevant network and experience.                     </li>
                        <li> 
                            To share stories from underrepresented groups in STEM.
                        </li>
                        <ul>
                            <li>
                                More specifically, we wanted to bring more awareness into specific challenges individuals from underrepresented demographics may face, and encourage students of similar backgrounds to pursue careers in synthetic biology. As our project focuses significantly on how to improve ADHD testing and diagnosis, especially for children in under-diagnosed groups, it seemed pertinent that we include an outreach initiative exploring diversity in synthetic biology as well. 
                            </li>
                        </ul>
                    </ul>
                    <div className={overallStyles.description}>
                        To execute this event, we reached out to several individuals of underrepresented demographics in the synthetic biology industry to invite them for a discussion surrounding their professional experiences, as well as about the role of diversity in STEM. We were able to secure 3 speakers, 2 of whom were previously involved in iGEM during their undergraduate studies. Throughout the moderated discussion, we made an effort to illustrate the diversity of job opportunities and industries that synthetic biology is incorporated into. Afterwards, audience members were invited to participate in a Q&A period. This event was marketed towards university students across Canada interested in careers in biology, as well as those with an interest in the intersection of social impact and STEM. To assist with our marketing efforts, we collaborated with UWashington iGEM to help us promote our event to their audience base. 
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/8/89/T--Waterloo--CareersInSynBioIGZoom.png" alt="Careers In Syn Bio Zoom" className={styles.zoom_img} />
                </div>
            </div>
        )
    }
}

export default CareersSynBio;