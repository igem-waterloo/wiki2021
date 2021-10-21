
import React, { useState } from 'react';
import overallStyles from '../overall.module.scss';

const tabs = ['Tab 1', 'Tab 2', 'References'];

const Attributions = () => {
        const [active, setActive] = useState(tabs[0]);
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Attributions.</div>
                    </div>
                    <div className={overallStyles.illustration}></div>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.description}>
                        The completion of NeuroDetech would not have been possible without guidance from our staff advisors, stakeholder feedback, and devoted team members. We would like to take thank the following people for their contributions:
                    </div>
                    <div className={overallStyles.subheading}>
                        Advisors                    
                    </div>
                    <div className={overallStyles.description} style={{marginBottom: "-3%"}}>
                        Professor Brian Ingalls, PhD | Department of Applied Mathematics 
                    </div>
                    <ul className={overallStyles.description}>
                        <li>
                            Assessed feasibility in project selection process
                        </li>
                        <li>
                            Aided in administrative and financial upkeep
                        </li>
                        <li>
                            Provided feedback for Jamboree presentation
                        </li>
                    </ul>
                    <div className={overallStyles.description} style={{marginBottom: "-3%"}}>
                        Professor Trevor Charles, PhD | Department of Biology
                    </div>
                    <ul className={overallStyles.description}>
                        <li>
                            Specializes in bacterial genetics and functional metagenomics
                        </li>
                        <li>
                            Provided insight on project direction and development
                        </li>
                        <li>
                            Acted as liaison with external organizations
                        </li>
                    </ul>
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
                    {/* { active === tabs[0] && (
                        <PotentialCost/>
                    )}
                    { active === tabs[1] && (
                        <ManufacturingAndLegal/>
                    )}
                    { active === tabs[2] && (
                        <References/>
                    )} */}
                </div>
            </div>
        )
}

export default Attributions;