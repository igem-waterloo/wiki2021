import React, { Component } from 'react';
import styles from './determiningimplementation.module.scss';
import overallStyles from "../overall.module.scss";

class DeterminingImplementation extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>Determining Implementation</div>
                    <div className={overallStyles.description}>
                        To aid in the diagnostic process of ADHD, NeuroDetech aimed to measure related biomarkers. In-vitro studies involved the use of live cell culture and the experimentation being executed outside an organism. This approach brought advantages such as lower costs and easier to control variables, thus resulting in highly reproducible outcomes (National Research Council, 1999),  which was an asset to NeuroDetech’s goal of testing for biomarkers of ADHD. Although using an in-vitro model improved the accessibility of this testing device to its intended audience, the results were not directly translatable to subjects (National Research Council, 1999).
                    </div>
                    <div className={overallStyles.description}>
                        Conversely, an in-vivo approach would result in higher accuracy and would be more reliable and relatable to the test subjects, in this case humans (National Research Council, 1999; Cook et al., 2015). This approach raised concerns in research ethics through its reliance on human subjects. Additionally, its time-consuming nature would likely not allow results to be seen in an 8-month time frame (Cook et al., 2015). Finally, the materials required to complete in-vivo studies are more expensive, thus decreasing product accessibility and affordability.
                    </div>
                    <div className={overallStyles.description}>
                        Under the aforementioned conditions, it would be difficult to implement an in-vivo approach; associated ethical concerns are too ambiguous and complex to analyze through the lens of integrated human practices. As a result, an in-vitro solution should be considered, as it would be easier to implement within the time frame of approximately 8 months, and with heightened lab restrictions due to the COVID-19 pandemic. The in-vitro approach was executed to aid in developing our diagnostic test using creativity and literature reviews of existing protocols.
                    </div>
                    <div className={overallStyles.description}>
                        With the final stance being in-vitro testing, determining the implementation of the tool was one of the main discussions our team had. This discussion revolved around implementing our tool either as <b>a)</b> a prescreening device or <b>b)</b> an additional step in a series of standard tests required by a primary healthcare provider. These ‘lab testing days’ are requested to benchmark an individual’s physiological conditions prior to diagnosis with blood work, urine analysis, etc.  
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/c/c5/T--Waterloo--InVitroInVivo.png" alt="In Vitro In Vivo testing" className={styles.vitro_vivo_img}/>
                    <div className={overallStyles.figure_text}>
                        (Digital art image courtesy of NfERnOv2, 2011)
                    </div>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.description}>
                        Moreover, implementing our tool during the lab day testing allowed patients to not undergo multiple testings over a span of days. This has a huge impact on those who are not comfortable with labs (may be similar to that of white coat syndrome) (Lerwick, 2016). On the other hand, with our tool being an additional test, it required training and a specific setting to be used. However, this was seen as beneficial as there would trained professionals such as lab technicians who administer the test. Furthermore, unlike the pre-screening implementation, the lab day testing allowed our tool to be an added confirmation that could aid in the diagnosis of ADHD rather than a sole answer for consumers. This allowed professionals to view our tool from a quantitative stand-point in addition to their qualitative results from formal assessments.
                    </div>
                    <div className={overallStyles.description}>
                        With the current pandemic, many hospitals have adapted the “pre-screening and covid testing” method for world-wide communities and can be somewhat compared to our test. The screening done for COVID-19 includes many questions such as whether one has symptoms, been in close contact with a potential exposure, etc (Government of Canada, 2021). These questions allow members of the community to decide if a COVID test is warranted. However, unlike COVID-19 pre screening methods, there is no simple yes or no answer to whether one has ADHD or not (Davidovitch et al., 2017). Thus, it further indicates that using NeuroDetech as a sole prescreening tool would not be effective. Clinical psychologist, Megan Smith, states “I definitely do NOT think it should be used as a pre-screening tool. Nothing that is going to catch the vast majority of cases should be”. Thus, implementing our tool during lab day testing would be more effective as “using it as part of an assessment allows it to be weighed with other info more generally" (M. Smith, personal communication, June 7, 2021).
                    </div>
                    <div className={overallStyles.description}>
                        The main intention behind the pre-screening test was to use it for populations without healthcare coverage. Since many people forgo ADHD testing due the financial burden, the pre-screening option would help people determine if they need to complete the entire ADHD assessment process or stop after the pre-screen returns a negative. The second option was a lab-day test. In the original pipeline it was seen that during the ADHD diagnosis there can be a lab-day where patients are to complete blood work. Our idea was to combine NeuroDetech within the rest of the lab testing as it would be logistically more efficient. In the end, the option chosen was to include the NeuroDetech test along with the other lab tests.
                    </div>
                </div>
            </div>
        )
    }
}

export default DeterminingImplementation;