import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";
import styles from "./microfludic.module.scss";

class Microfluidic extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        Microfluidic Chip Modelling
                    </div>
                    <div className={overallStyles.subheading}>
                        Computer-aided Chip Assembly Design
                    </div>
                    <div className={overallStyles.description}>
                        A complete assembly of the microfluidic chip model is built and shown below. The specific dimensions are also labelled and presented. The team used OnShape to create the CAD model throughout the year.                 
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/8/8c/T--Waterloo--DimensionedFullChip.png" alt="Dimensioned Full Chip"/>
                    <div className={overallStyles.figure_text}>
                        Figure 1(a). Dimensioned drawing of the microfluidic chip.
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/9/90/T--Waterloo--Cornerview_assembly.png" alt="Corner View Assembly" className={styles.assembly_img}/>
                    <div className={overallStyles.figure_text}>
                        Figure 1 (b). Assembly of the microfluidic chip. Note that the top plane surfaces are transparent for easy visualization of the chip inner components.                    
                        </div>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.description}>
                        For further information on the details of the chip model design, please navigate to the Microfluidic Chip Design module under the Engineering page. With an initial model built in Computer-Aided Design software, the chip can be built later on to prototype the process in which sample flows through the chip and improve the design of the chip model. 
                    </div>
                </div>
            </div>
        )
    }
}

export default Microfluidic;