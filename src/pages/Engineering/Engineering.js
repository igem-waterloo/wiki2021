
import React, { useLayoutEffect, useState } from 'react';
import overallStyles from '../overall.module.scss';
import styles from './engineering.module.scss';
import Microfluidic from './Microfluidic';
import Biomarker from './Biomarker';
import ProteinOptimization from './ProteinOptimization';
import GeneMarker from './GeneMarker';
import OpticalDetector from './OpticalDetector';
import References from './References';

const tabs = ['Microfluidic Chip Design', 'Biomarker Detection: Fusion Protein Design', 'Protein Optimization', 'Gene Marker Detection: Design of mRNA-Binding CRISPR-Cas System', 'Optical Detector and Application Development', 'References'];

const Engineering = () => {
        const [active, setActive] = useState(tabs[0]);
        
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Engineering.</div>
                    </div>
                    <div className={overallStyles.illustration}></div>
                </div>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>Overview</span>
                    <div className={overallStyles.description}>
                        <p>The engineering design cycle was used numerous times to facilitate the design of the key components of NeuroDetech, where an engineering design cycle often led into another distinct but related cycle. Firstly, an engineering design cycle was used in the design, CAD modelling, and fluid dynamics testing of the microfluidic assay chip (Microfluidic Chip Design). After finalizing the design of the microfluidic assay, it then became necessary to use the engineering design cycle to design the fusion protein for biomolecule detection (Biomarker Detection: Fusion Protein Design, which leads into Protein Optimization), a CRISPR-Cas system for gene marker detection (Gene Marker Detection: Design of mRNA-Binding CRISPR-Cas System), and the optical detector/app used for signal interpretation and quantification (Optical Detector and Application Development).</p>
                    </div>
                </div>
                <div className={overallStyles.sections_div}>
                    {tabs.map(tab => (
                        <div key={tab} active={active === tab} onClick={() => setActive(tab)} className={styles.section_block}>
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
                { active === 'Microfluidic Chip Design' && (
                    <Microfluidic></Microfluidic>
                )}
                { active === 'Biomarker Detection: Fusion Protein Design' && (
                    <Biomarker></Biomarker>
                )}
                { active === 'Protein Optimization' && (
                    <ProteinOptimization></ProteinOptimization>
                )}
                { active === 'Gene Marker Detection: Design of mRNA-Binding CRISPR-Cas System' && (
                    <GeneMarker></GeneMarker>
                )}
                { active === 'Optical Detector and Application Development' && (
                    <OpticalDetector></OpticalDetector>
                )}
                { active === 'References' && (
                    <References></References>
                )}
                </div>
                {/* <p style={{color: 'white'}}> Your payment selection: {active} </p> */}
            </div>
        )
}

export default Engineering;