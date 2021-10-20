import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";

class ColoringBook extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>Biology Concepts Colouring Book</span>
                </div>
                
                <div className={overallStyles.description}>
                    The complex and abstract nature of biology can often present great challenges to high school students attempting to learn the subject (McComas et al., 2018). Students living with ADHD also face many additional hurdles when attempting to learn these difficult concepts (Loe & Feldman, 2007). With this in mind, our team set out to create an open-access and informative resource that teachers could use in their classrooms to help students get a better grasp of challenging concepts related to the field of synthetic biology. After further researching the learning barriers students with ADHD face, our team chose to create an informative coloring book to help high school students reinforce classroom lessons and introduce synbio. We were inspired by the Color Me PhD (Rorrer, 2018) project, created by Dr. Julie Rorrer,  which combined the visual-first layout of coloring sheets with highly informative scientific explanations to educate and engage students. Coloring as a form of art therapy has shown to have great benefits for people of all ages with ADHD, as it can help improve attention span and decrease impulsive behaviour, while also having many social and emotional benefits for students (Loe & Feldman, 2007).
                </div>
                <div className={overallStyles.description}>
                    As we set out to create our colouring book, we further researched design considerations to ensure our coloring book served its intended purpose (McKnight, 2011). The first consideration we made was to ensure that the layout of both our colouring pages and information pages were neat and uncluttered (McKnight, 2011). This limits confusion as well as the search time required to find pertinent information, aiding students with shorter attention spans (McKnight, 2011). The second consideration we made was ensuring that our colouring book was free of any distractions or bright colours that may disrupt a student’s attention while participating in the activity (McKnight, 2011). The third design consideration we made was to organize our colouring pages in an ordered and easy to understand layout in hopes of once again  limiting confusion and reducing the time it takes to find information (McKnight, 2011). Finally we used large print text and easy to read fonts as well as bolding/italicizing to highlight important information (McKnight, 2011). 
                </div>
                <div className={overallStyles.description}>
                    With this project, we hope to create an outreach tool that would make synbio information and resources easily accessible to students and educators. Designed to help students grasp fundamental biology concepts and better understand our iGEM project, this coloring book will help to educate, engage, and inform. If you would like to use this resource, click here to download the file.
                </div>
            </div>
        )
    }
}

export default ColoringBook;