import React, { useState } from 'react';
import overallStyles from '../overall.module.scss';
import Microfluidic from './Microfluidic';
import OpticalDetector from './OpticalDetector';
import styles from "./proofofconcept.module.scss";
import References from './References';
import WetLab from './WetLab';

const tabs = ["Optical Detector and Visualization Application", "Microfluidic Chip", "Wet Lab Experiments", "References"];
const icons = ["https://2021.igem.org/wiki/images/1/1e/T--Waterloo--IconChip.png", "https://2021.igem.org/wiki/images/f/fc/T--Waterloo--IconHardware.png", "https://2021.igem.org/wiki/images/d/db/T--Waterloo--IconWetLab.jpeg", "https://2021.igem.org/wiki/images/c/c5/T--Waterloo--IconReference.png"]


const ProofOfConcept = () => {
        const [active, setActive] = useState(tabs[0]);
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Proof Of Concept.</div>
                    </div>
                    <div className={overallStyles.illustration}>
                        <img src="https://2021.igem.org/wiki/images/1/1e/T--Waterloo--IconChip.png" alt="PoC Icon" className={styles.icon_img}/>
                    </div>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>Overview</div>
                    <div className={overallStyles.description}>
                        We have demonstrated proof of concept of various components of the project, including prototyping the optical detector and visualization application and the design of the microfluidic chip. As well, although we did not have lab access this year, we outline our plan of action to demonstrate the experimental proof of concept for each component of the microfluidic assay, as well as proof of concept for the assay as a whole.
                    </div>
                </div>
                <div className={overallStyles.sections_div}>
                    {tabs.map((tab, index) => (
                        <div key={tab} active={active === tab} onClick={() => setActive(tab)} className={overallStyles.section_block}>
                            <div className={overallStyles.sections}>
                                <div className={overallStyles.section_img}>
                                    <img id={`poc${index}`} src={icons[index]} alt= "Icon"/>
                                </div>
                                <div className={overallStyles.section_text}>
                                    {tab}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    { active === tabs[0] && (
                        <OpticalDetector/>
                    )}
                    { active === tabs[1] && (
                        <Microfluidic/>
                    )}
                    { active === tabs[2] && (
                        <WetLab/>
                    )}
                    { active === tabs[3] && (
                        <References/>
                    )}
                </div>
            </div>
        )
}

export default ProofOfConcept;