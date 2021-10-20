
import React from 'react';
import overallStyles from '../overall.module.scss';

const Contribution = () => {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Contribution.</div>
                    </div>
                    <div className={overallStyles.illustration}></div>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.description}>
                        To meet bronze medal #4, we added documentation to the bottom of parts pages,&nbsp;
                        <a className={overallStyles.text_link} href="http://parts.igem.org/Part:BBa_K2926001" target="_blank" rel="noreferrer">
                                BBa_K2926001 
                        </a>   
                        &nbsp; and &nbsp;
                        <a className={overallStyles.text_link} href="http://parts.igem.org/Part:BBa_K1615022" target="_blank" rel="noreferrer">
                            BBa_K1615022
                        </a>   
                    </div>
                    <div className={overallStyles.description}>
                        Part&nbsp;
                        <a className={overallStyles.text_link} href="http://parts.igem.org/Part:BBa_K2926001" target="_blank" rel="noreferrer">
                            BBa_K2926001 
                        </a>
                        &nbsp;is Cas13a from *Leptotrichia buccalis*. In contributing to this part, we added our findings from the literature regarding the usage of Cas13a, with a focus on its nonspecific RNase activity that is crucial for sensitive RNA detection methods such as SATORI. On that note, we also added documentation regarding the use of Cas13a in diagnostic and quantification contexts (such as detection of SARS-CoV-2 RNA and our project, NeuroDetech), which is another important application of CRISPR-Cas systems.
                    </div>
                    <div className={overallStyles.description}>
                        Part&nbsp;
                        <a className={overallStyles.text_link} href="http://parts.igem.org/Part:BBa_K1615022" target="_blank" rel="noreferrer">
                            BBa_K1615022 
                        </a>
                        &nbsp;is monoamine oxidase A, which was one of the initial ADHD biomarkers that we considered (and later decided to rule out). With that said, the literature research used to inform this decision included information on the structure, function, and stability of monoamine oxidase A. Thus, in contributing to this part, we aimed to utilize this literature research to characterize the structure, function, and stability of this part more thoroughly.
                    </div>
                </div>
            </div>
        )
}

export default Contribution;