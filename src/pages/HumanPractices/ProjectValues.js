import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";
import styles from "./projectvalues.module.scss";
class CurrentDiagnosis extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        Project Values
                    </div>
                    <div className={overallStyles.description}>
                        ​​While designing our project, the values we kept in mind supported the 17 Sustainable Development Goals implemented by the United Nations. These goals aim to end poverty, protect the planet, and ensure that people enjoy peace and prosperity (Department of Social &amp; Economic Affairs, n.d.). NeuroDetech focuses more on ensuring that people enjoy peace and prosperity by addressing four values identified to be the most relevant to our project: Good Health and Well-Being, Quality Education, Reduced Inequalities, and Partnerships for the Goals.                 
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/8/86/T--Waterloo--Values.png" alt="Relevant Values" className={styles.values_img}/>
                    <div className={overallStyles.figure_text}>(Logos courtesy of the United Nations Department of Social &amp; Economic Affairs 17 Goals, n.d.)</div>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.subheading}>
                        Good Health and Well-Being
                    </div>
                    <div className={overallStyles.description}>
                        To this day, ADHD has been a condition that has been diagnosed qualitatively, and therefore, it can sometimes be misdiagnosed (Ford-Jones, P. C., 2015). We want to help improve the well-being of ADHD patients by developing a procedure that reduces the stress and struggles associated with the arduous process. 
                    </div>
                    <div className={overallStyles.description}>
                        When designing NeuroDetech, it was important for us to ensure that our microfluidic device would not only be reliable, but also easy to use for patients and medical professionals. POC devices have become extremely relevant in today's society because of its user-friendly features (St John, A., & Price, C. P., 2014). Additionally, testing urine instead of blood made the process a lot simpler for patients. Keeping these things in mind while designing our project allowed us to make NeuroDetech an all-around effective device.
                    </div>
                    <div className={overallStyles.subheading}>
                        Quality Education
                    </div>
                    <div className={overallStyles.description}>
                        Despite the amount of scientific evidence collected about ADHD, the spread of misinformation regarding its presentation in individuals and how it is diagnosed is still prevalent [1]. We wanted to ensure that NeuroDetech would be a way to educate more people about what ADHD is and how medical research (such as the research done by the Waterloo iGEM team!) continually aims to develop a novel and reliable method that will make the diagnosis process more comfortable for patients.
                    </div>
                    <div className={overallStyles.subheading}>
                        Reduced Inequalities
                    </div>
                    <div className={overallStyles.description}>
                        People with ADHD, especially kids, often exhibit behaviour that leads to higher risks of being bullying victims. Impulsive remarks, clumsiness, poor understanding of social cues, and being overly affectionate are just a few behaviours that ADHD patients get made fun of for (Keder et al., 2013).. When designing NeuroDetech, developing a device that would help reduce these inequalities was vital. We want to help ADHD patients become diagnosed effectively so interventions can be implemented as soon as possible to reduce the negative impacts of ADHD patients feeling excluded from society.
                    </div>
                    <div className={overallStyles.description}>
                        ADHD often presents differently in males in comparison to females, with literature displaying a higher prevalence in males. Generally, these are qualitative differences that are seen to be more prominent in men than women with ADHD [6]. Current diagnostic methods identify symptoms displayed by men more often than women and this can lead to biases in ADHD diagnosis. By providing a quantitative method that aids in the diagnosis of ADHD with NeuroDetech, we aim to eliminate some of these possible biases in ADHD diagnosis.
                    </div>
                    <div className={overallStyles.subheading}>
                        Partnerships for the Goals
                    </div>
                    <div className={overallStyles.description}>
                        Our project may be designed by a small group of inspired students from Waterloo, but our goal is to showcase the possibilities for synthetic biology solutions in medical diagnosis. ADHD affects millions of people globally and several of these patients have had to go through a series of assessments that may have been subject to clinician bias (Fadus et al., 2019).
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrentDiagnosis;