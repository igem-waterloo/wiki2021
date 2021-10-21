import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";

class ImplementationLabSettings extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        NeuroDetech Implementation in Lab Settings
                    </div>
                    <div className={overallStyles.description}>
                        From the beginning of NeuroDetech’s development, we were focused on creating an efficient assay that could provide high accuracy results, while still being minimally invasive. Our team had the goal of developing a project that would serve as a resource for healthcare workers providing ADHD diagnoses. Initially, we were unsure of whether NeuroDetech would be most effective as a pre-screening tool or as a tool used in medical laboratory settings. Through our Integrated Human Practices work, stakeholder testimonials helped us determine that the strength of NeuroDetech was in its ability to provide a quantitative metric as a part of standardized lab testing, instead of as a pre-screening. 
                    </div>
                    <div className={overallStyles.description}>
                        Once stakeholder feedback pointed us away from the direction of a pre-screening tool, we began looking at the different ways in which we could develop a tool that would be used in medical laboratory settings.The first major decision was choosing a method of testing.  Both <i>in vivo</i> and <i>in vitro</i> methods of analysis were advertised as favourable approaches.  However, it became clear that an <i>in vivo</i> method would likely entail cell culture, an expensive, time inefficient, and inaccessible approach given restricted lab access. In addition, the circulation of a test containing products from cell culture would be locked behind professional distribution and expensive mass production given the high level of maintenance required, contradicting our goals for accessibility (O’Neill et al., 2021).  Therefore, it was decided that an <i>in vitro</i> method of testing, namely a lateral flow assay (LFA), would be preferred.
                    </div>
                    <div className={overallStyles.description}>
                        Once we had our initial LFA idea, we began exploring the specifics of what our product would look like. Copious amounts of research done on biomarkers related to ADHD eventually led us to phenylethylamine (PEA). We also decided on using a microfluidic assay, rather than a traditional lateral flow assay, due to their increased accuracy and sensitivity (Cui & Wang, 2019). When developing the chip itself, we made decisions such as using a Polydimethylsiloxane (PMDS) microfluidic chip for its ease of fabrication and affordability. We also wanted to increase the amount of information that NeuroDetech could provide, as using more than 1 biomarker would improve the efficacy of our bioassay and our confidence in the ADHD risk assessment (Araz, Tentori & Herr, 2013). By using a CRISPR-Cas13a system, we could also provide information regarding the detection of ADHD-associated mutations in mRNA transcripts via the quantification of gene markers. Lastly, our team focused on ensuring that the test would be minimally invasive and decided to use urine analysis for metabolites. Feedback from Dr. Janet Patterson (MD) informed us that in inpatient units, psychiatrists will often ask for certain tests (such as liver function, renal function, and thyroid function tests, as well as urinalysis and an electrocardiogram) to be conducted on the patient, os that medical, as well as psychological, information can be available for the diagnosis process. This allows us to easily implement NeuroDetech as part of the medical work-up procedure that is already in place. The setup of the device also requires minimal device supply from the test center: a laptop for connecting with the optical detector specifically designed for NeuroDetech lab chip. This allows healthcare professionals to interpret data conveniently without the need to be in a fixed laboratory setting, since the optical detector device is light and portable. 
                    </div>
                </div>
            </div>
        )
    }
}

export default ImplementationLabSettings;