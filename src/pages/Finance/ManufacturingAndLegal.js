import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";

class ManufacturingAndLegal extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>
                        Understanding the Current ADHD Diagnosis Process in Canada
                    </span>
                </div>
                <div>
                    <div className={overallStyles.illustration}></div>
                    {/* <img></img> */}
                </div>
                <div className={overallStyles.description}>
                    The initial goal for our project was to create a device that would aid in the diagnosis of ADHD. During project development, we realized we needed to have an understanding of the current diagnosis procedures for ADHD in Canada, so that we could successfully develop a product that would have the potential for real-life implementation.
                </div>
                <div className={overallStyles.description}>
                    Our Human Practices subteam began by conducting research into ADHD diagnosis procedures and established a diagnosis pipeline, which allowed us to visualize the process in a sequential and organized way. From the research conducted, the team established a diagnosis pipeline using research collected from various online sources, such as research articles, ADHD centre websites, and clinical centre resources. From the literature, we established that the diagnosis 'pipeline' consisted of a combination of seven steps as seen in Figure 1. After the original pipeline was created, the next step was contacting various stakeholders (psychologists, psychiatrists, general practitioners, etc.) about their experience with the diagnosis process to confirm its accuracy. Stakeholders include but are not limited to ADHD assessors such as psychologists, psychiatrists and general practitioners. Stakeholder testimonials allowed us to determine that the diagnosis process varied vastly between different medical professions and even among those working in the same discipline. 
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/2/24/T--Waterloo--CurrentPipeline.png" alt="Current Pipeline" className={styles.pipeline_img}/>
                    <div className={overallStyles.figure_text}>
                        Figure 1. The current ADHD diagnosis procedure in Canada.
                    </div>
                </div>
                <div className={overallStyles.description}>
                    For instance, between the medical professionals that were consulted, the assessment process ranged from a total of 4 to 20 hours, with some medical professionals having assessments that spanned over multiple days. Although it appeared to be common practice to assess for and rule out other disorders that may be contributing to ADHD-like symptoms, the methods were not consistent among the medical professionals. While psychologist assessors used standardized checklists to assess patients for learning disabilities and cognitive skills, our discussions with Vera Roncon, a clinical psychologist from Mt Pleasant Therapy Centre, informed us that some assessors also requested bloodwork to rule out factors such as thyroid dysfunction (2021). In addition, by discussing with Dr. Megan Smith, a clinical child and school psychologist, it was determined that other less common tests also include sleep studies (2021). 
                </div>
                <div className={overallStyles.description}>
                    Through the research conducted, it became evident to the team that the current processes and tests in place were mainly qualitative, thus creating the need for NeuroDetech- a quantitative test to aid in ADHD diagnosis.
                </div>
                <div className={overallStyles.description}>
                    Based on our initial research about ADHD diagnosis, there are many issues and biases that surround the diagnostic process. An example of this stems from the fact that males tend to show prototypical symptoms of ADHD while females do not (Ford-Jones, P. C., 2015). Many females can go undiagnosed for ADHD because their symptoms typically manifest as inattentiveness, rather than the noticeable hyperactivity often seen in males. As such, the gender bias mainly causes a disparity of ADHD testing referrals (Ramtekkar, 2010).
                </div>
                <div className={overallStyles.description}>
                    Another example of a diagnosis issue is age - adults are less likely to be diagnosed with ADHD. One reason for this problem is that ADHD symptoms for adults generally overlap with the symptoms for other mental illnesses, such as depression, bipolar disorder, anxiety disorder, and many others (MediLexicon, 2021). In addition, many studies show a decrease in ADHD symptoms as an individual ages. This result goes on to impact the diagnosis procedures, as can be noted by the lack of ADHD symptom criteria specific to adults used for diagnosis (Ramtekkar, 2010).
                </div>
                <div className={overallStyles.description}>
                    Race inequality is also evident in ADHD diagnostic practices. Studies suggest that African American and Hispanic children are underdiagnosed with ADHD (Morgan, 2013). African American children show more symptoms of the disorder than white children, yet they are being diagnosed at only 66% the rate of White children. Although the root cause of this disparity is still being researched, it is clear that a bias exists in diagnostic procedures and that the process needs to be improved.
                </div>
                <div className={overallStyles.description}>
                    Given some of the weaknesses with current diagnostic practices, our goal was to implement NeuroDetech within the existing diagnostic pipeline as a supporting tool to aid the process and mitigate the effects of these biases. The quantitative nature of NeuroDetech allows an unbiased metric to be used for diagnosis, allowing individuals affected by ADHD in under-diagnosed populations to get a less biased diagnosis.  
                </div>
                <div className={overallStyles.description}>
                    With all this determined, the next step of our project was to determine the best implementation of NeuroDetech within the established diagnosis pipeline. Based on our research, the preliminary ideas for implementation were 1) as a pre-screening test before official ADHD assessment, or 2) conducted along with the lab tests that screen for other disorders. Diagnosis visuals were created to showcase the two options of implementation location as seen in Figure 2 and Figure 3.
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/d/d9/T--Waterloo--PrescreenPipeline.png" alt="Prescreen Pipeline" className={styles.pipeline_img}/>
                    <div className={overallStyles.figure_text}>
                        Figure 2. The proposed ADHD diagnosis procedure with NeuroDetech as a pre-screen test.
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/6/6d/T--Waterloo--LabTestingPipeline.png" alt="Lab Testing Pipeline" className={styles.pipeline_img}/>
                    <div className={overallStyles.figure_text}>
                        Figure 3. The proposed ADHD diagnosis procedure with the NeuroDetech test implemented with the other lab tests. 
                    </div>
                </div>
            </div>
        )
    }
}

export default ManufacturingAndLegal;