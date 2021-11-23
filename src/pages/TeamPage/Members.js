import React from 'react';
import overallStyles from '../overall.module.scss';
import HumanPractices from './HumanPractices';
import LabDesign from './LabDesign';
import MathModelling from './MathModelling';
import Wiki from './Wiki';

const Members = () => {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div} style={{marginTop: "70px"}}>
                    <div className={overallStyles.text_heading}>Team Members</div>
                    <div className={overallStyles.page_heading} style={{marginBottom: "-15px"}}>Who We Are</div>
                </div>
                <div className={overallStyles.description}>
                    We proudly present this year’s Waterloo iGEM team! We have three subteams: Lab &amp; Design, Human Practices, and Math &amp; Modelling, and we also have a Wiki team for the wiki development.
                    Get to know our members below by expanding each dropdown!                
                </div>
                <div className={overallStyles.text_div}>
                    <LabDesign/>
                    <HumanPractices/>
                    <MathModelling/>
                    <Wiki/>
                    
                </div>
            </div>
        )
}

export default Members;