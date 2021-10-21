import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";
import styles from "./mentorshipandcollaborations.module.scss";

class MentorshipAndCollaborations extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        iGEM Mentorship &amp; Collaborations                    
                    </div>
                    <div className={overallStyles.subheading}>
                        iGEM Bolivia            
                    </div>
                    <div className={overallStyles.description}>
                        This year, we mentored the newly formed Bolivia iGEM team. Their 2021 project had some similarities to our 2020 project, and some returning team members met with iGEM Bolivia early on in the year to provide some insight into how we approached developing a project based around metal-binding proteins. We continued to meet with iGEM Bolivia throughout the year to collaborate on an iGEM for Beginners Guide. This collaboration was facilitated by Spanish-speaking Waterloo iGEM members. We are very thankful that iGEM Bolivia reached out to us and collaborated with us throughout the year.
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/2/22/T--Waterloo--CollaborationsBolivia.png" alt="Collaboration with Bolivia"/>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.subheading}>
                        Washington       
                    </div>
                    <div className={overallStyles.description}>
                        In April, we had the opportunity to meet with Washington iGEM to discuss our 2020 project, REMINE. At the time, Washington iGEM was hoping to pursue a project focusing on the removal of metals from wastewater, which was also the focus of REMINE. As a result, we discussed the mechanisms, novelties, and limitations of REMINE, and discussed the parallels of REMINE to their project design plan (at the time). We also discussed general aspects of running an iGEM team, such as recruitment. We were charmed by their enthusiasm and energy, and we are glad to have had the chance to chat!
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/5/55/T--Waterloo--CollaborationsWashington.png" alt="Collaboration with Washington" className={styles.washington_img} />
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.subheading}>
                        Laurier       
                    </div>
                    <div className={overallStyles.description}>
                        Wilfrid Laurier University is a neighbouring university in the city of Waterloo, and year after year, Waterloo iGEM has always had a few Laurier students inquire about joining our team. This year, after noticing the consistent interest in iGEM from Laurier students, we suggested that Laurier start their own iGEM team - and so they did! We stayed in contact with them throughout the year and provided advice as they navigated the waters of member recruitment, funding, project selection, and obtaining laboratory space and advisors/PIs. After a multitude of video calls and e-mail exchanges throughout the year, we are excited to hear that Laurier iGEM is planning to compete in next year’s iGEM competition!
                    </div>
                    <div className={overallStyles.subheading}>
                        Northern BC       
                    </div>
                    <div className={overallStyles.description}>
                        Early in the year, we were able to chat with iGEM Northern BC. In the previous year, most of their team members graduated from the team, leaving a small group to take the helm. As a result, our discussions with iGEM Northern BC revolved around team structure, funding sources, and how we were preparing for the competition (encompassing recruitment as well as project selection and inspiration). Our discussions with Northern BC were insightful and humbling, and we were glad to have had the opportunity to chat!
                    </div>
                    <div className={overallStyles.subheading}>
                        iGEM Düsseldorf Postcard Project
                    </div>
                    <div className={overallStyles.description}>
                        For the second year in a row, we participated in iGEM Düsseldorf’s postcard initiative. We designed and sent postcards off to Germany and from there they were sent off to a variety of places all over the globe! This collaboration experience was a great way to learn about other teams’ projects before the Jamboree. We are very thankful to iGEM Düsseldorf for having included us! Check out some of the postcards involved in this initiative below!
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/7/77/T--Waterloo--CollaborationsPostcards.png" alt="Collaboration Postcard Project"/>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.subheading}>
                        JulyGEM       
                    </div>
                    <div className={overallStyles.description}>
                        This year, we participated in iGEM Calgary’s JulyGEM conference. This was a great experience, as we were able to present our project and receive feedback from a judging panel, as well as from fellow iGEM teams. Teams from all around the world participated in this conference, which allowed us to learn about iGEM projects from many different countries. We are very thankful to iGEM Calgary for providing us with this wonderful opportunity. 
                    </div>
                    <div className={overallStyles.subheading}>
                        cGEM       
                    </div>
                    <div className={overallStyles.description}>
                        This year, we participated in the second annual cGEM (Canadian iGEM) conference. During this 2-day event, we were able to watch presentations from different Canadian iGEM teams and hear panels from speakers directly involved in the field of synthetic biology. It was a great experience and we thank cGEM for allowing us to participate!
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/7/73/T--Waterloo--CollaborationscGEM.png" alt="Collaboration cGEM"/>
                </div>
            </div>
        )
    }
}

export default MentorshipAndCollaborations;