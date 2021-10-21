
import React, { useState } from 'react';
import overallStyles from '../overall.module.scss';
import ChipDesign from './ChipDesign';
import styles from "./hardware.module.scss";
import OpticalDetector from './OpticalDetector';
import References from './References';

const tabs = ["Microfluidic Capillary Assay Chip Design", "Optical Detector Development", "References"];
const icons = ["https://2021.igem.org/wiki/images/1/1e/T--Waterloo--IconChip.png", "https://2021.igem.org/wiki/images/f/fc/T--Waterloo--IconHardware.png", "https://2021.igem.org/wiki/images/c/c5/T--Waterloo--IconReference.png"]

const Hardware = () => {
        const [active, setActive] = useState(tabs[0]);
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Hardware.</div>
                    </div>
                    <div className={overallStyles.illustration}>
                        <img src="https://2021.igem.org/wiki/images/f/fc/T--Waterloo--IconHardware.png" alt="Hardware Icon" className={styles.icon_img}/>
                    </div>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>Overview</div>
                    <div className={overallStyles.description}>
<<<<<<< HEAD
                        There are two hardware design components to the NeuroDetech project: the microfluidic mechanical chip design and the optical detector electronic design. The final mechanical design of the chip is described and the final breadboard and PCB design for the optical detector are presented. 
=======
                        For many people, having an extra $2,000 dollars in their pocket could mean paying for school tuition, 2 months worth of rent, a laptop,or a flight to Asia. To an individual with possible underlying ADHD symptoms, this could mean covering the cost of an initial clinical assessment, as a first step towards receiving an official diagnosis.
                    </div>
                    <div className={overallStyles.description}>
                        To a working individual earning minimum wage in Ontario, this is equivalent to 140 hours of time at work before tax. Unfortunately, the cost of an ADHD assessment may lead to some individuals having no option but to opt out of the assessment due to affordability issues and financial strain(Centre for ADHD Awareness Canada [CADDAC], 2013). This potential financial hurdle can result in further under-diagnoses of both children and adults with ADHD, preventing them from receiving the treatment they need (CADDAC, 2013). As such, the design process of neuroDetech required us to consider and assess factors such as the financial impact on patients, lab manufacturing, and governmental assistance.
>>>>>>> bcceef6ba64dd6fa6e297fef63f86e7ee6185d27
                    </div>
                </div>
                <div className={overallStyles.sections_div}>
                    {tabs.map((tab, index) => (
                        <div key={tab} active={active === tab} onClick={() => setActive(tab)}>
                            <div className={overallStyles.sections}>
<<<<<<< HEAD
                                <div className={overallStyles.section_img}>
                                    <img id={`hardware${index}`} src={icons[index]} alt= "Icon"/>
                                </div>
                                <div className={overallStyles.section_text}>
                                    {tab}
                                </div>
=======
                            <div id={index} className={overallStyles.section_img}></div>
                            <div className={overallStyles.section_text}>
                                {tab}
                            </div>
>>>>>>> bcceef6ba64dd6fa6e297fef63f86e7ee6185d27
                            </div>
                        </div>
                    ))}
                </div>
                <div>
<<<<<<< HEAD
                    { active === tabs[0] && (
                        <ChipDesign/>
                    )}
                    { active === tabs[1] && (
                        <OpticalDetector/>
                    )}
                    { active === tabs[2] && (
                        <References/>
                    )}
=======
                    {/* { active === tabs[0] && (
                        <PotentialCost/>
                    )}
                    { active === tabs[1] && (
                        <ManufacturingAndLegal/>
                    )}
                    { active === tabs[2] && (
                        <References/>
                    )} */}
>>>>>>> bcceef6ba64dd6fa6e297fef63f86e7ee6185d27
                </div>
            </div>
        )
}

export default Hardware;