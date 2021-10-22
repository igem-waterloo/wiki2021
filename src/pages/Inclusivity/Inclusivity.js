
import React, { useState } from 'react';
import overallStyles from '../overall.module.scss';
import styles from "./inclusivity.module.scss";
import References from './References';
import WikiDesign from './WikiDesign';

const tabs = ["Wiki Design", "References"];
const icons = ["https://2021.igem.org/wiki/images/1/1d/T--Waterloo--IconWikiDesign.png", "https://2021.igem.org/wiki/images/c/c5/T--Waterloo--IconReference.png"]
const Improvement = () => {
        const [active, setActive] = useState(tabs[0]);
        
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Inclusivity.</div>
                    </div>
                    <div className={overallStyles.illustration}>
                        <img src="https://2021.igem.org/wiki/images/thumb/5/54/T--Waterloo--iconInclusivityMainTop.png/653px-T--Waterloo--iconInclusivityMainTop.png" alt="Inclusivity Icon" className={styles.icon_img}/>
                    </div>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>Overview</div>
                    <div className={overallStyles.description}>
                        iGEM Waterloo takes pride in furthering inclusion through a holistic approach, starting with our annual hiring process, community outreach, and wiki design. Rather than materializing a targeted project, accessibility is deeply integrated in each and every aspect of the team, as a foundational pillar.
                    </div>
                    <div className={overallStyles.description}>
                        The recruitment process is completed in partnership with UW BASE (Black Association for Student Expression), WiSTEM (Women in STEM), QTPOC-KW (Queer, Trans, People of Colour), in an effort to maximize accessibility to underrepresented groups. Additionally, we strive for transparency in our evaluation process by making qualities and information readily available on both social media platforms and our website. Finally, the interview selection process is conducted ‘blind’—i.e. an individual’s responses are separated from identifying information to reduce subconscious bias.
                    </div>
                    <div className={overallStyles.description}>
                        Outreach events are designed to highlight people of various experiences—whether it be through the conferences we host or opportunities with local partners. It is important to have guest speakers of different backgrounds for youth in the audience to self-identify with.
                    </div>
                    <div className={overallStyles.description}>
                        Finally, the previous years’ work of wiki design accessibility has been improved upon with additional considerations in response to our project problem space. Font, text sizing, colour, and layout were selected to improve contrast, ease of use, and the overall experience for users with ADHD. Building off last year’s design, different language options, text-to-speech, and other features are redesigned to improve accessibility.
                    </div>
                </div>
                <div className={overallStyles.sections_div}>
                    {tabs.map((tab, index) => (
                        <div key={tab} active={active === tab} onClick={() => setActive(tab)}>
                            <div className={overallStyles.sections}>
                                <div className={overallStyles.section_img}>
                                    <img id={`inclusivity${index}`} src={icons[index]} alt= "Icon"/>
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
                        <WikiDesign/>
                    )}
                    { active === tabs[1] && (
                        <References/>
                    )}
                </div>
            </div>
        )
}

export default Improvement;