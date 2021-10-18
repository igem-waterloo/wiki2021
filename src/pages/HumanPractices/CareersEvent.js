import React, { Component } from 'react';
import styles from './careersevent.module.scss';
import overallStyles from "../overall.module.scss";

class CareersEvent extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>Determining Implementation</span>
                </div>
                <div className={styles.promo_div}>
                    <img src="https://2021.igem.org/wiki/images/9/92/T--Waterloo--CareersInSynBioIGPromo.png" alt="Careers in SynBio IG Promo" className={styles.promo_img}/>
                </div>
                <div className={overallStyles.description}>
                    As part of Waterloo iGEM's outreach strategy this year, we wanted to create an educational event focusing on professional development and diversity in the synthetic biology industry, as well as a discussion on how participation in iGEM can aid in preparation for a future career in the SynBio industry. The Human Practices team recognized that post-secondary students participate in extracurricular activities to develop skills and gain opportunities to advance their careers. We wanted to leverage this shared interest and iGEM’s strong connection to the SynBio industry in our outreach efforts this year through the execution of a speaker panel and networking event. 
                </div>
                <div className={overallStyles.description}>
                    Our goals for this event were three-fold:
                </div>
                <ul className={overallStyles.description}>
                    <li> 
                        To showcase various career paths available to life science students
                    </li>
                    <li> 
                        To demonstrate how iGEM can be a beneficial way to build a relevant network and experience
                    </li>
                    <li> 
                        To share stories from underrepresented groups in STEM
                    </li>
                    <ul>
                        <li>
                            More specifically, we wanted to bring more awareness into specific challenges individuals from underrepresented demographics may face, and encourage students of similar backgrounds to pursue careers in SynBio. As our project focuses significantly on how to improve ADHD testing and diagnosis, especially for children in under-diagnosed groups, it was important to us that we included an outreach initiative exploring diversity in scientific research as well. 
                        </li>
                    </ul>
                </ul>
                <div className={overallStyles.description}>
                    To execute this event, we reached out to several individuals of underrepresented demographics in the SynBio industry to invite them for a discussion surrounding their professional experiences, as well as about the role of diversity in STEM. We also made an effort to illustrate the diversity of job opportunities and industries that SynBio is incorporated into. Afterwards, audience members were invited to participate in a Q&A period. This event was marketed towards university students across Canada interested in careers in biology, as well as those with an interest in the intersection of social impact and STEM. To assist with our marketing efforts, we collaborated with UWashington iGEM to help us promote our event to their audience base. 
                </div>
            </div>
        )
    }
}

export default CareersEvent;