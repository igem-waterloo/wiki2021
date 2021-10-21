import React, { Component } from 'react';
import styles from "./igemcommunity.module.scss";
import overallStyles from "../overall.module.scss";

class IGEMCommunity extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        Education Within iGEM Community 
                    </div>
                    <div className={overallStyles.description}>
                        This year, we wanted part of our educational efforts to be directed towards the iGEM community. We focused on contributing to efforts that will help other teams in the future, as well as providing individuals with information on how they can turn synthetic biology into a long-term career path, even after iGEM ends.
                    </div>
                    <div className={overallStyles.subheading}>
                        iGEM Guide for Beginners
                    </div>
                    <div className={overallStyles.description}>
                        This year, the newly formed iGEM Bolivia team spearheaded the creation of an iGEM for beginners manual. This educational and collaborative resource includes input from iGEM teams all around the world. Together, we hope that this guide provides help for teams that are just starting out in iGEM. We discussed things like how we go from an idea to a full project, tips for successfully contacting stakeholders, how to use math and modelling to make an iGEM project stronger and how to integrate stakeholder feedback into project development. We are very fortunate to have collaborated with iGEM Bolivia and many other iGEM teams on this and we hope that this guide will continue to be useful for new iGEM teams in the years to come. For more information, check out iGEM Bolivia’s wiki page, or download the pdf of the guide&nbsp; 
                        <a href="https://2021.igem.org/wiki/images/2/25/T--Bolivia--collaborations_handbo1.pdf" download> 
                            here
                        </a>
                        . 
                    </div>
                    <div className={overallStyles.subheading}>
                        Careers in Synthetic Biology
                    </div>
                    <div className={overallStyles.description}>
                        Waterloo iGEM has been around since 2005 and has had some team members go on to pursue careers in the field of synthetic biology. This inspired some of the Human Practices team members to plan an event surrounding what careers in synthetic biology and biotechnology are like. The goal of this initiative was to educate members of the iGEM community on how they could continue to contribute to the synthetic biology community after iGEM. We had a great turn out, with students from a variety of universities attending and contributing many questions to our panel of speakers, two of which were Waterloo iGEM alumni. Our diverse speaker panel contributed to the event attendees learning about how a career in synthetic biology can be achieved through industry, academia and start-up opportunities. In the end, we hope that we were able to provide students with insight into how they can turn synthetic biology into a long-term career path! 
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/9/92/T--Waterloo--CareersInSynBioIGPromo.png" alt="Careers In Syn Bio IG Promo" className={styles.promo_img}/>
                </div>
            </div>
        )
    }
}

export default IGEMCommunity;