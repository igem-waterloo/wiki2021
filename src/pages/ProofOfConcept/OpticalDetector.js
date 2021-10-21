import React, { Component } from 'react';
import styles from "./opticaldetector.module.scss";
import overallStyles from "../overall.module.scss";
import Collapsible from '../../utils/Collapsible';
import { Table } from 'react-bootstrap';

class OpticalDetector extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        Optical Detector and Visualization Application
                    </div>
                    <div className={overallStyles.subheading}>
                        Hardware Development
                    </div>
                    <div className={overallStyles.description}>
                        <p>After the design phase, the initial prototype is developed with chosen circuit parts. Below shows the schematic diagrams, breadboard configuration of the prototype and the final PCB Design of the optical detector.</p>
                    </div>
                    <div>
                        <img src="https://2021.igem.org/wiki/images/0/00/T--Waterloo--breadBoardConfig.jpeg" className={styles.design_img} style={{borderRadius: 10, width: '40%', marginLeft: '30%'}}></img>
                        <div className={overallStyles.figure_text}>Breadboard configuration</div>
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <Table bordered className={overallStyles.table}>
                        <thead>
                            <tr>
                            <th >Cable colour</th>
                            <th >Meaning     </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td >Red</td>
                            <td >+5V           </td>
                            </tr>
                            <tr>
                            <td >Black</td>
                            <td >GND        </td>
                            </tr>
                            <tr>
                            <td >Yellow</td>
                            <td >Signal V<sub>OUT</sub> </td>
                            </tr>
                            <tr>
                            <td >Blue</td>
                            <td>SCK </td>
                            </tr>
                            <tr>
                            <td>Green</td>
                            <td>MISO </td>
                            </tr>
                            <tr>
                            <td>Purple</td>
                            <td>MOSI </td>
                            </tr>
                            <tr>
                            <td>White</td>
                            <td>SS </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/6/6d/T--Waterloo--SchematicCaptureOpticalDetector.png" className={styles.design_img} style={{borderRadius: 10, width: '80%', marginLeft: '10%'}}></img>
                    <div className={overallStyles.figure_text}>Schematic capture (optical detector)</div>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/d/d0/T--Waterloo--SchematicCaptureSystem.png" className={styles.design_img} style={{borderRadius: 10, width: '80%', marginLeft: '10%'}}></img>
                    <div className={overallStyles.figure_text}>Schematic capture (system)</div>
                </div>

                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/5/57/T--Waterloo--PCBLayout3DViewTop.png" className={styles.design_img} style={{borderRadius: 10, width: '80%', marginLeft: '10%'}}></img>
                    <div className={overallStyles.figure_text}>PCB Layout 3D Top View</div>
                </div>

                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/a/a9/T--Waterloo--PCBLayout3DViewBottom.png" className={styles.design_img} style={{borderRadius: 10, width: '80%', marginLeft: '10%'}}></img>
                    <div className={overallStyles.figure_text}>PCB Layout 3D Bottom View</div>
                </div>

                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/1/14/T--Waterloo--PCBLayout2DViewTopLayer.png" className={styles.design_img} style={{borderRadius: 10, width: '80%', marginLeft: '10%'}}></img>
                    <div className={overallStyles.figure_text}>PCB Layout 2D Top Layer View</div>
                </div>

                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/6/65/T--Waterloo--PCBLayout2DViewBottomLayer.png" className={styles.design_img} style={{borderRadius: 10, width: '80%', marginLeft: '10%'}}></img>
                    <div className={overallStyles.figure_text}>PCB Layout 2D Bottom Layer View</div>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.description}>
                        <p>The optical detector captures the chemiluminescence signal by the use of a PN photodiode. The photodiode reacts to the brightness by generating electric current under reverse conditions. This current is then converted to voltage and amplified by the transimpedance amplifier. The output signal from the amplifier passes through an analog-to-digital converter to undergo digitization and processing. With the signal in digital form, the microcontroller reads the voltage at the pin and sends the value to the desktop running the software. In our set-up, the microcontroller reads and sends a thousand voltage values per second. The software converts the voltage values into the analyte concentration using the appropriate conversion and displays the values in an analyte concentration vs. time graph.</p>

                        <p>This proof of concept demo video shows that the software application graphs change with the light intensity detected by the optical detection circuit. Please note that the current graphed concentration values only correlate with detected voltage, and that conversion to concentration has not been implemented.</p>
                    </div>
                </div>
                <div className={overallStyles.figure_div}>
                    <iframe src="https://2021.igem.org/wiki/images/d/d9/T--Waterloo--ProofOfConceptDemoVideo.mp4" style={{width: 900, height: 500}}></iframe>
                </div>
            </div>
        )
    }
}

export default OpticalDetector;