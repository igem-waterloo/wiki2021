
import React, { useState } from 'react';
import overallStyles from '../overall.module.scss';
import "./finance.module.scss";
import PotentialCost from './PotentialCost';
import ManufacturingAndLegal from './ManufacturingAndLegal';
import References from './References';

const tabs = ['Potential Cost to Patients', 'Manufacturing and Legal Considerations', 'References'];
const icons = ["", "", "https://2021.igem.org/wiki/images/c/c5/T--Waterloo--IconReference.png"]

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
                        For many people, having an extra $2,000 dollars in their pocket could mean paying for school tuition, 2 months worth of rent, a laptop, or a flight to Asia. To an individual with possible underlying ADHD symptoms, this could mean covering the cost of an initial clinical assessment, as a first step towards receiving an official diagnosis. We knew that implementing NeuroDetech into the diagnosis procedures for ADHD would contribute an additional cost to the patient. As such, we decided to investigate what that cost would be and whether we could minimize it through the use of health insurance.
                    </div>
                </div>
                <div className={overallStyles.sections_div}>
                    {tabs.map((tab, index) => (
                        <div key={tab} active={active === tab} onClick={() => setActive(tab)}>
                            <div className={overallStyles.sections}>
                                <div className={overallStyles.section_img}>
                                    <img id={`finance${index}`} src={icons[index]} alt= "Icon"/>
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
                        <PotentialCost/>
                    )}
                    { active === tabs[1] && (
                        <ManufacturingAndLegal/>
                    )}
                    { active === tabs[2] && (
                        <References/>
                    )}
                </div>
                </div>
        )
}

export default Finance;