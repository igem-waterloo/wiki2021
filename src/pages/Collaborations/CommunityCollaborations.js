import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";

class CommunityCollaborations extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        Community Collaborations
                    </div>
                    <div className={overallStyles.subheading}>
                        High School Outreach
                    </div>
                    <div className={overallStyles.description}>
                        Between May to June, Waterloo iGEM reached out to a multitude of high schools in the city of Waterloo for the opportunity to introduce the students to the field of synthetic biology. To our delight, we received responses from Sir John A. MacDonald Secondary School’s Grade 11 Biology class as well as Cameron Heights Collegiate Institute’s Science Club! Our presentation focused on the story of insulin, focusing not only on the success and advantages of bacterial insulin expression in the production of medicine for diabetes, but also the pitfalls when it came to the lack of regulations and testing of the bacterially produced drug. In this way, we were able to introduce the students to the three major faces of synthetic biology, as incorporated into iGEM today: Lab and Design, Math and Modelling, and Human Practices. The students asked insightful questions about the field of synthetic biology (especially with regard to biotechnology!), and we were both thrilled and humbled at their receptiveness to our presentation! We are very thankful for the science departments of SJAM secondary school and CHISC for collaborating with us and allowing us to share our passion for synthetic biology with their students. 
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/1/1d/T--Waterloo--CollaborationsHighSchool.png" alt="Collaboration with High School"/>
                </div>
            </div>
        )
    }
}

export default CommunityCollaborations;