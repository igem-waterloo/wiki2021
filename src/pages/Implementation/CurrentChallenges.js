import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import overallStyles from "../overall.module.scss";

class CurrentChallenges extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        Current Challenges and Future Improvements                    
                    </div>
                    <div className={overallStyles.description}>
                        While we have worked hard over the course of the past year to explore every aspect of NeuroDetech’s implementation, there are always areas that can be improved. Understanding the costs associated with NeuroDetech is an area that we explored this year (check out our&nbsp;
                        <Link to="/Team:Waterloo/Finance" className={overallStyles.text_link}>
                            Finance
                        </Link> 
                        &nbsp;page!), but in the future we would like to deepen the extent of this analysis. Efforts to reach out to stakeholders at life sciences technology companies such as Bio-Rad Laboratories and Thermo Fisher Scientific for were unfortunately unsuccessful. This prevented us from having direct conversations about the manufacturing costs of a product like NeuroDetech, which could have provided us with real-life estimates. As such, we believe that this is an area that merits further investigation.
                    </div>
                    <div className={overallStyles.description}>
                        Secondly, receiving first-hand feedback from individuals with ADHD is something we would like to explore in the future. Due to complexities surrounding patient privacy, we were unable to get ethics approval to conduct interviews with individuals with ADHD to get their first-hand feedback on NeuroDetech. For us, it is important to know how a product like this would impact individuals undergoing ADHD diagnosis procedures. Would the product make them feel more secure about their diagnosis? Would they be indifferent? These are questions that we consider to be worth asking, because a product like ours is just as much about the individuals receiving the diagnosis as it is about the individuals determining the diagnosis.  
                    </div>
                    <div className={overallStyles.subheading}>
                        Lab Access: What We Would Have Done...
                    </div>
                    <div className={overallStyles.description}>
                        Due to unforeseen circumstances (one of which was a global pandemic, and the other of which was unforeseen maintenance and construction of our lab space by the University), we unfortunately did not have lab access this year. As a result, though we were able to model and test some of the components of NeuroDetech using computational methods and prototyping, we were not able to physically test and demonstrate a proof of concept for NeuroDetech. 
                    </div>
                    <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                        Given lab access, we would have liked to have done the following:
                    </div>
                    <ul className={overallStyles.description}>
                        <li>
                            We would have tested our microfluidic assay chip in terms of proper functionality and sample fluid manipulation. 
                        </li>
                        <li>
                            We would have characterized and tested the functionality of our phenylethylamine (PEA) binding fusion protein. This would have included cloning, expression, purification, and activity assays of our PEA-binding fusion protein, to confirm that the fusion protein is stable in urine conditions, that the fusion protein can bind PEA, and that the fusion protein can produce a predictable, quantifiable signal when reacted with Amplex Red (the chemiluminescent substrate). 
                        </li>
                        <li>
                            We would have tested that our affinity-improved versions of the streptavidin and trypsin proteins did, in fact, display improved affinity in wet lab experiments.
                        </li>
                        <li>
                            We would have demonstrated the success of the CRISPR-Cas13a system as a quantification method for ADHD-associated urinary mRNA, using a simulated urine sample spiked with the target RNA sequence of interest. 
                        </li>
                    </ul>
                    <div className={overallStyles.description}>
                        Methodologies related to how we would have performed the above tests given lab access are outlined in our&nbsp;
                        <Link to="/Team:Waterloo/Engineering" className={overallStyles.text_link}>
                            Engineering
                        </Link>
                        &nbsp;page.
                    </div>
                    <div className={overallStyles.description}>
                        Finally, as a proof of concept, we would have liked to put it all together by testing the ability of our set of microfluidic assay chips to quantify our target ADHD-associated biomarkers and gene markers, where the microfluidic assay chip contains all of the necessary components and is tested using a simulated urine sample spiked with the ADHD-associated biomarkers/gene markers. This would be the proof of concept to demonstrate the functionality of NeuroDetech. Our methodology related to how we would have demonstrated our proof of concept given lab access is outlined in our&nbsp;
                        <Link to="/Team:Waterloo/Proof_Of_Concept" className={overallStyles.text_link}>
                            Proof of Concept
                        </Link>
                        &nbsp;page.
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrentChallenges;