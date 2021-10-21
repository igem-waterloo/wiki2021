
import React, { useState } from 'react';
import overallStyles from '../overall.module.scss';
import HardwareModelling from './HardwareModelling';
import Microfluidic from './Microfludic';
import ProteinOptimization from './ProteinOptimization';

const tabs = ['Microfluidic Chip Modelling', 'Hardware Design Modelling', 'Protein Optimization Modelling', "References"];

const Model = () => {
        const [active, setActive] = useState(tabs[0]);
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Model.</div>
                    </div>
                    <div className={overallStyles.illustration}></div>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>Overview</div>
                    <div className={overallStyles.description}>
                        Various models have been built during the year. The following sections present the construction and analysis on various models including: microfluidic chip modelling, hardware design modelling, and protein optimization modelling. 
                    </div>
                </div>
                <div className={overallStyles.sections_div}>
                    {tabs.map((tab, index) => (
                        <div key={tab} active={active === tab} onClick={() => setActive(tab)}>
                            <div className={overallStyles.sections}>
                            <div id={index} className={overallStyles.section_img}></div>
                            <div className={overallStyles.section_text}>
                                {tab}
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    { active === tabs[0] && (
                        <Microfluidic/>
                    )}
                    { active === tabs[1] && (
                        <HardwareModelling/>
                    )}
                    
                    { active === tabs[2] && (
                        <ProteinOptimization/>
                    )}
                </div>
            </div>
        )
}

export default Model;