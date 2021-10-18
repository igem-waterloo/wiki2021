
import React, { useLayoutEffect, useState } from 'react';
import overallStyles from '../overall.module.scss';
import styles from './finance.module.scss';
import PotentialCost from './PotentialCost';
import ManufacturingAndLegal from './ManufacturingAndLegal';

const tabs = ['Potential Cost to Patients', 'Manufacturing and Legal Considerations'];

const Finance = () => {
        const [active, setActive] = useState(tabs[0]);
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Finance.</div>
                    </div>
                    <div className={overallStyles.illustration}></div>
                </div>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>Overview</span>
                    <div className={overallStyles.description}>
                    For many people, having an extra $2,000 dollars in their pocket could mean paying for school tuition, 2 months worth of rent, a laptop,or a flight to Asia. To an individual with possible underlying ADHD symptoms, this could mean covering the cost of an initial clinical assessment, as a first step towards receiving an official diagnosis.
                    To a working individual earning minimum wage in Ontario, this is equivalent to 140 hours of time at work before tax. Unfortunately, the cost of an ADHD assessment may lead to some individuals having no option but to opt out of the assessment due to affordability issues and financial strain(Centre for ADHD Awareness Canada [CADDAC], 2013). This potential financial hurdle can result in further under-diagnoses of both children and adults with ADHD, preventing them from receiving the treatment they need (CADDAC, 2013). As such, the design process of neuroDetech required us to consider and assess factors such as the financial impact on patients, lab manufacturing, and governmental assistance.
                    </div>
                </div>
                <div className={overallStyles.sections_div}>
                    {tabs.map(tab => (
                        <div key={tab} active={active === tab} onClick={() => setActive(tab)}>
                            <div className={overallStyles.sections}>
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
                        <PotentialCost/>
                    )}
                    { active === tabs[1] && (
                        <ManufacturingAndLegal/>
                    )}
                </div>
                {/* <p style={{color: 'white'}}> Your payment selection: {active} </p> */}
            </div>
        )
}

export default Finance;