
import React, { useState } from 'react';
import overallStyles from '../overall.module.scss';
import GreaterWaterlooCommunity from './GreaterWaterlooCommunity';
import IGEMCommunity from './IGEMCommunity';
import UWaterlooCommunity from './UWaterlooCommunity';
import styles from "./education.module.scss"

const tabs = ["Education Within iGEM Community", "Education Within University of Waterloo Community", "Education Within Greater Waterloo Community"];
const icons = ["https://2021.igem.org/wiki/images/thumb/c/c0/T--Waterloo--IconEducationWithiniGEM.png/600px-T--Waterloo--IconEducationWithiniGEM.png", "https://2021.igem.org/wiki/images/thumb/c/c0/T--Waterloo--IconEducationWithinUW.png/599px-T--Waterloo--IconEducationWithinUW.png", "https://2021.igem.org/wiki/images/thumb/a/a6/T--Waterloo--IconEducationWithinWaterloo.png/599px-T--Waterloo--IconEducationWithinWaterloo.png"]

const Education = () => {
        const [active, setActive] = useState(tabs[0]);
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Education.</div>
                    </div>
                    <div className={overallStyles.illustration}>
                    <img src="https://2021.igem.org/wiki/images/thumb/5/55/T--Waterloo--IconEducationTopMain.png/599px-T--Waterloo--IconEducationTopMain.png" alt="Education Icon" className={styles.icon_img}/>
                    </div>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>Overview</div>
                    <div className={overallStyles.description}>
                        Due to the effects of the global COVID-19 pandemic, many of the ways in which iGEM teams educate the community at large have been hindered. However, we decided to take the continuing pandemic restrictions in stride and to shift our focus to the use of virtual tools to successfully hit our Education goals. As has been outlined in our Communication and Collaborations pages, we took part in a variety of initiatives that aimed to further education within the iGEM community, within our university community and within our greater community as well. 
                    </div>
                </div>
                <div className={overallStyles.sections_div}>
                    {tabs.map((tab, index) => (
                        <div key={tab} active={active === tab} onClick={() => setActive(tab)} className={overallStyles.section_block}>
                            <div className={overallStyles.sections}>
                            <div id={index} className={overallStyles.section_img}>
                                <img id={`education${index}`} src={icons[index]} alt= "Icon"/>
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
                        <IGEMCommunity/>
                    )}
                    { active === tabs[1] && (
                        <UWaterlooCommunity/>
                    )}
                    
                    { active === tabs[2] && (
                        <GreaterWaterlooCommunity/>
                    )}
                </div>
            </div>
        )
}

export default Education;