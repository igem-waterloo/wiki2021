
import React, { useState } from 'react';
import overallStyles from '../overall.module.scss';
import GreaterWaterlooCommunity from './GreaterWaterlooCommunity';
import IGEMCommunity from './IGEMCommunity';
import UWaterlooCommunity from './UWaterlooCommunity';

const tabs = ["Education Within iGEM Community", "Education Within University of Waterloo Community", "Education Within Greater Waterloo Community"];

const Education = () => {
        const [active, setActive] = useState(tabs[0]);
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Education.</div>
                    </div>
                    <div className={overallStyles.illustration}></div>
                </div>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>Overview</span>
                    <div className={overallStyles.description}>
                        Due to the effects of the global COVID-19 pandemic, many of the ways in which iGEM teams educate the community at large have been hindered. However, we decided to take the continuing pandemic restrictions in stride and to shift our focus to the use of virtual tools to successfully hit our Education goals. As has been outlined in our Communication and Collaborations pages, we took part in a variety of initiatives that aimed to further education within the iGEM community, within our university community and within our greater community as well. 
                    </div>
                </div>
                <div className={overallStyles.sections_div}>
                    {tabs.map(tab => (
                        <div key={tab} active={active === tab} onClick={() => setActive(tab)}>
                            <div className={overallStyles.sections} style={{height: "max-content"}}>
                            <div className={overallStyles.section_img}></div>
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