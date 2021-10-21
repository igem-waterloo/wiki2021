import React, { useState } from 'react';
import CareersSynBio from './CareersSynBio';
import InstagramOutreach from './InstagramOutreach';
import ColoringBook from './ColoringBook';
import References from './References';
import overallStyles from '../overall.module.scss';

const tabs = ["Careers in Synthetic Biology", "Instagram Outreach ", "Biology Concepts Colouring Book", "References"];

const Communication = () => {
        const [active, setActive] = useState(tabs[0]);
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Communication.</div>
                    </div>
                    <div className={overallStyles.illustration}></div>
                </div>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>Overview</span>
                    <div className={overallStyles.description}>
                        Fundamental to any advancement of synthetic biology as an emerging field is public engagement through education. Ideal circumstances would have permitted collaboration with targeted demographics through workshops, conferences, and studies, as has been done in previous years. Unfortunately, these events were not possible to facilitate  in the 2021 competition season, given jurisdictional health restrictions due to COVID-19. Despite these limitations, the need for community involvement cannot be compromised. As such, education and outreach was approached differently with the aid of digital communication platforms, with an emphasis on the following three categories: professional opportunities in synthetic biology, social media, and educational resource development.
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
                        <CareersSynBio/>
                    )}
                    { active === tabs[1] && (
                        <InstagramOutreach/>
                    )}
                    { active === tabs[2] && (
                        <ColoringBook/>
                    )}
                    { active === tabs[3] && (
                        <References/>
                    )}
                </div>
            </div>
        )
}

export default Communication;