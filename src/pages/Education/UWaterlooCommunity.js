import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";
import styles from "./uwaterloocommunity.module.scss";

class UWaterlooCommunity extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        Education Within University of Waterloo Community 
                    </div>
                    <div className={overallStyles.description}>
                        The iGEM community at Waterloo is strong, but synthetic biology is still an area that not many individuals know about. For this reason, we collaborated with multiple clubs within the University of Waterloo community, to bring further awareness to the field of synthetic biology.
                    </div>
                    <div className={overallStyles.subheading}>
                        WiSTEM
                    </div>
                    <div className={overallStyles.description}>
                        Early on in the year, we collaborated with Waterloo’s Women in STEM club to host a conference to bring awareness to different scientific fields. Our iGEM team focused on preparing 2 different presentations to educate the attendees on the field of synthetic biology. One of our presentations focused on describing our 2020 project, REMINE, and explaining how the work that each subteam did came together to form a finalized product. In particular, we emphasized how interdisciplinary synthetic biology can be.  Our second presentation was on GMOs and the impact of science communication. Using the example of Golden Rice, we went through how the product was developed and why it has ultimately not been widely distributed. WIth this presentation we wanted to bring the focus towards the importance of doing science with a purpose and not just for the sake of simply doing science. For this, we emphasized the role that stakeholder feedback plays in project development.
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/6/60/T--Waterloo--WiSTEMGoldenRice.png" alt="Golden Rice" className={styles.rice_img}/>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.subheading}>
                        BioTEC Conference
                    </div>
                    <div className={overallStyles.description}>
                        In previous years, we have hosted in-person workshops and seminars, but these types of educational initiatives were not a possibility due to pandemic restrictions. Instead, we collaborated with the annual Biotechnology and Bioengineering Conference (BioTEC) at Waterloo to co-host the Create Workshop, a two hour long technical seminar. Participants were introduced to the concepts that lay the foundation for the type of work done in the field of synthetic biology, through real life examples and previous iGEM projects. Furthermore, we hosted an introductory session on using Rosetta and GROMACS software as tools for rational protein design. Additionally, we spoke on hardware components (microcontrollers, photodiodes, lateral flow assays) and how these technologies are used to turn synthetic biology ideas into products that can be taken to market.
                    </div>
                </div>
            </div>
        )
    }
}

export default UWaterlooCommunity;