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
                        <img src="https://2021.igem.org/wiki/images/f/fd/T--Waterloo--hardwareTopMainIcon.png" alt="Hardware Icon" className={styles.icon_img}/>
                    </div>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>Overview</div>
                    <div className={overallStyles.description}>
                        There are two hardware design components to the NeuroDetech project: the microfluidic mechanical chip design and the optical detector electronic design. The final mechanical design of the chip is described and the final breadboard and PCB design for the optical detector are presented. 
                    </div>
                </div>
                <div className={overallStyles.sections_div}>
                    {tabs.map((tab, index) => (
                        <div key={tab} active={active === tab} onClick={() => setActive(tab)}>
                            <div className={overallStyles.sections}>
                                <div className={overallStyles.section_img}>
                                    <img id={`hardware${index}`} src={icons[index]} alt= "Icon"/>
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
                        <ChipDesign/>
                    )}
                    { active === tabs[1] && (
                        <OpticalDetector/>
                    )}
                    { active === tabs[2] && (
                        <References/>
                    )}
                </div>
            </div>
        )
}

export default Hardware;