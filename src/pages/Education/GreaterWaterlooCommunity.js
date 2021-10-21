import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";

class GreaterWaterlooCommunity extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        Education Within Greater Waterloo Community
                    </div>
                    <div className={overallStyles.subheading}>
                        High School Outreach
                    </div>
                    <div className={overallStyles.description}>
                        Many individuals don’t learn about synthetic biology until they reach university, as it is not a field of science commonly talked about in high school environments. However, due to the increase in online classes, we were inspired to host online talks to high school students, teaching them about synthetic biology and exposing them to the world of iGEM. While synthetic biology may not be explicitly talked about in most high school biology courses, insulin is a topic that is taught in both grade 11 and 12 biology courses. Given that insulin production using <i>Escherichia coli</i> cell factories has had major impacts on making medicine for diabetes more accessible, we developed a presentation explaining synthetic biology by using this example. In this way, we could bridge the gap between a concept that high school students already knew about and an area of science that they likely did not know about. We included concepts relating to all three of our subteams so that the students could see just how interdisciplinary the field of synthetic biology can be. We had a great time talking to and answering questions from the students of Sir John A. MacDonald Secondary School’s Grade 11 Biology class as well as Cameron Heights Collegiate Institute’s Science Club and we hope to continue presentations of this kind in the future.
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/c/c6/T--Waterloo--EducationHighSchool.png" alt="High School Outreach"/>
                </div>
            </div>
        )
    }
}

export default GreaterWaterlooCommunity;