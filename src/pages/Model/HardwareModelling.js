import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";
import styles from "./hardwaremodelling.module.scss";

class HardwareModelling extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        Hardware Design Modelling
                    </div>
                    <div className={overallStyles.subheading}>
                        Simulation
                    </div>
                    <div className={overallStyles.description}>
                        We started off the hardware optical detector design by creating a circuit simulation in TinkerCAD. We adapted some microcontroller code and a simple photodiode circuit taken from various sources. The purpose of this was to get a general idea of how the circuit and microcontroller will work and which parts to order.
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/3/38/T--Waterloo--TinkerCADLabelled.png" alt="TinkerCAD Labelled" className={styles.tinkercad_img}/>
                    <div className={overallStyles.figure_text}>
                        Figure 1. Labelled TinkerCAD circuit simulation.
                    </div>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.description}>
                        In this early simulated prototype, the integers printed to the serial monitor increased as the photodiode was exposed to less light and decreased as the light level increased. When the photodiode detected light, it became a conductor and the current flowed to the ground, so the microcontroller read a low voltage level. At a low light level, the photodiode became a resistor and prevented current from flowing to the ground. Instead, the current flowed to the analog pin and the microcontroller read a high voltage (Kranthi, 2013).
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <video width="100%" controls>
                        <source src="https://2021.igem.org/wiki/images/8/84/T--Waterloo--TinkerCADVidFinal.mp4"/>
                    </video>
                    <div className={overallStyles.figure_text}>
                        TinkerCAD Demo
                    </div>
                </div>
                
            </div>
        )
    }
}

export default HardwareModelling;