import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";

class UWaterlooCollaborations extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        University of Waterloo Collaborations
                    </div>
                    <div className={overallStyles.description}>
                        Over the course of the year, the team partnered with the university to showcase synthetic biology opportunities, past accomplishments, and future recruitment events. Due to the unique interdisciplinarity of iGEM, such collaborations were accomplished across departments and faculties:
                    </div>
                    <div className={overallStyles.subheading}>
                        Iron Warrior Interviews: IW Club Interview Series: iGEM
                    </div>
                    <div className={overallStyles.description}>
                        To kick off the 2021 iGEM season, leads Teodora Vujovic and Clare Wei were asked to share their experiences on a synthetic biology design team with the engineering faculty’s newspaper, the Iron Warrior. Chatting about the community dynamic and the recruitment process sparks interest in synthetic biology for later recruitment, as well as promoting the opportunity to first years.&nbsp; 
                        <a href="https://iwarrior.uwaterloo.ca/2021/02/15/50076/iw-club-interview-series-igem/" target="_blank" rel="noreferrer">
                        https://iwarrior.uwaterloo.ca/2021/02/15/50076/iw-club-interview-series-igem/
                        </a>
                    </div>
                    <div className={overallStyles.subheading}>
                        Sedra Design Centre Showcases
                    </div>
                    <div className={overallStyles.description}>
                        Design teams are an integral component to the University of Waterloo’s vibrant entrepreneurial space. The Sedra Design Centre (SDC) provides a workspace and platform for clubs to connect with first years and prospective members, so that students can learn more about a team that best suits their interest. Along with other notable groups such as Midnight Sun Solar Racing and Engineers Without Borders, iGEM Waterloo presented our 2020 project REMiNE at various showcase events as an outreach initiative.
                    </div>
                    <div className={overallStyles.subheading}>
                        Renison University College Student Design Showcase
                    </div>
                    <div className={overallStyles.description}>
                        Renison University College at the University of Waterloo hosts periodic design team showcases for incoming students (typically international). This opportunity provided Waterloo iGEM the ability to introduce incoming first years to synthetic biology through an educational session about our team and past projects followed by a question and answer session. These sessions provide a unique opportunity for incoming international students to become interested in the field of synthetic bio and become possible future members of the Synbio and iGEM community!
                    </div>
                    <div className={overallStyles.subheading}>
                        Engineering Orientation Student Teams Showcase
                    </div>
                    <div className={overallStyles.description}>
                        The faculty of Engineering typically wraps up O-Week with a showcase to pique interest and build community for incoming first years. iGEM Waterloo took this opportunity to share the technical specs of this year’s microfluidic assay autoCAD, demonstrating the interdisciplinarity of synthetic biology. On top of the design aspect, the field of computational biology and protein modelling is an area of interest for many engineering students, which was emphasized as well. 
                    </div>
                    <div className={overallStyles.subheading}>
                        WiSTEM
                    </div>
                    <div className={overallStyles.description}>
                        This year, we decided to work with other clubs at Waterloo to engage different groups in science and synthetic biology. We worked with the University of Waterloo Women in STEM club to create a mini conference with speakers from various different scientific fields. Our team presented two presentations over the course of the conference. We spoke on the importance of GMOs and science communication as well as what synthetic biology is with reference to our 2020 project REMINE. Waterloo has a large Women In STEM community and we felt it was important that there was synthetic biology representation.
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/3/33/T--Waterloo--ResearchTalkSeries.png" alt="WiSTEM Talk Series"/>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.subheading}>
                        BioTEC Conference
                    </div>
                    <div className={overallStyles.description}>
                        The annual Biotechnology and Bioengineering Conference (BioTEC) aims to empower youth to improve human health and well-being. By connecting 1000+ students with over 50 speakers and industry leaders across North America, delegates are exposed to cutting-edge advancements and opportunities in the biomedical field. This year, iGEM Waterloo co-hosted the Create Workshop, which was a two hour long technical seminar. Participants were introduced to conceptual ideas of synthetic biology through real life and project-related examples. Additionally, an overview of the software (Rosetta, GROMACS, etc.) and hardware (microcontrollers, photodiodes, lateral flow assays, etc.) was showcased in greater depth in a follow-up breakout session.
                    </div>
                    <div className={overallStyles.subheading}>
                        MUBO
                    </div>
                    <div className={overallStyles.description}>
                        In January of this year the Waterloo iGEM leads spoke with a Laurier student interested in creating an accessible space where university students could obtain hands-on lab experience outside of a classroom or formal research lab. Through some discussion we were able to provide some valuable information on how to form/lead a group, accessing funding and lab space, and other important details of creating a successful club. Several Waterloo iGEM members have also taken on leadership roles in the newly formed University of Waterloo MUBO chapter as this is a unique opportunity to connect members of the community and also further education about synbio outside of just the iGEM community.
                    </div>
                </div>
            </div>
        )
    }
}

export default UWaterlooCollaborations;