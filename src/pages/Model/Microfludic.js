import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";
import styles from "./microfludic.module.scss";

class Microfluidic extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>
                        Microfluidic Chip Modelling
                    </span>
                    <div className={overallStyles.subheading}>
                        Computer-aided Chip Assembly Design
                    </div>
                    <div className={overallStyles.description}>
                        A complete assembly of the microfluidic chip model is built and shown below. The specific dimensions are also labelled and presented. The team used OnShape to create the CAD model throughout the year.                 
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/d/d9/T--Waterloo--PrescreenPipeline.png" alt="Prescreen Pipeline" className={styles.pipeline_img}/>
                    <div className={overallStyles.figure_text}>
                        Figure 2. The proposed ADHD diagnosis procedure with NeuroDetech as a pre-screen test.
                    </div>
                </div>
            </div>
        )
    }
}

export default Microfluidic;