import React, { Component } from 'react';
import Collapsible from '../../utils/Collapsible';
import { Table } from 'react-bootstrap';
import overallStyles from "../overall.module.scss";
import styles from "./opticaldetector.module.scss";

class OpticalDetector extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        Optical Detector Development
                    </div>
                </div>
                <Collapsible open title="Hardware Design">
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.subheading} style={{marginLeft: "0"}}>Simulation</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>We started off by creating a circuit simulation in TinkerCAD. We adapted some microcontroller code and a simple photodiode circuit taken from various sources. The purpose of this was to get a general idea of how the circuit and microcontroller will work and which parts to order.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/3/38/T--Waterloo--TinkerCADLabelled.png" className={styles.design_img} style={{borderRadius: 10, width: '80%', height: '80%', marginLeft: '10%'}}></img>
                        <div className={overallStyles.figure_text}>Labelled TinkerCAD circuit simulation.</div>
                    </div>
                    <div className={overallStyles.description}>
                        <p>In this early simulated prototype, the integers printed to the serial monitor increased as the photodiode was exposed to less light and decreased as the light level increased. When the photodiode detected light, it became a conductor and the current flowed to the ground, so the microcontroller read a low voltage level. At a low light level, the photodiode became a resistor and prevented current from flowing to the ground. Instead, the current flowed to the analog pin and the microcontroller read a high voltage (Kranthi, 2013).</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <iframe src="https://2021.igem.org/wiki/images/8/84/T--Waterloo--TinkerCADVidFinal.mp4" style={{width: 900, height: 500}}></iframe>
                    </div>
                    <div className={overallStyles.description}>
                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: "0"}}>Circuit Part Selection</span>
                        </div>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subsubheading}>Light Sensor</span>
                        </div>

                        <p>Initially, we considered the use of a photomultiplier tube (PMT) for the detection of resorufin. Resorufin is the fluorescent compound produced in the reaction chambers and has emission maxima of 563 nm. Additionally, the area of the MCFA reaction chamber was 9 mm<sup>2</sup>. These two design specifications in peak spectral sensitivity and radiant sensitive area were the main priorities for selecting an optical sensor.</p>

                        <p>The high internal amplification characteristic of PMTs, as well as its ability to detect low light levels, prompted the consideration for Hamatsu’s R12900U-01 Micro-PMT. However, with a lower peak spectral sensitivity of 420 nm, the sensitivity and the cost were not aligned with our design goals—a similar trend we observed across all PMT devices (Hamamatsu, 2021). Having to look towards cheaper alternatives in photodiodes instead, we decided upon the PDB-C156 from Advanced Photonix for our medium-fidelity prototype. The PDB-C156 is a through-hole PIN silicon photodiode with a peak spectral sensitivity of 660 nm and response time of 15 ns (Advanced Photonix, n.d.).</p>

                        <p>Having no access to the lab this year and no physical fabrication of the MCFA lab chip to test with, the peak spectral sensitivity of the photodiode was not our main priority for the medium-fidelity prototype. Instead, our goal was to test the functionality of the rest of the circuit on the breadboard, and the communication between the microcontroller and the software.</p>
                    
                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subsubheading}>Transimpedance Amplifier</span>
                        </div>

                        <p>Operating the photodiode in reverse and using a general-purpose OPA350PA as a transimpedance amplifier, we wanted to amplify the 90 μA of short-circuit current of the PDB-C156 photodiode to an output voltage swing of 0V to 5V. To achieve the desired gain, we used a 47kΩ and a 10kΩ resistor in series.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div className={styles.formula_div}>
                            <div className={styles.formula_center}>
                                R<sub>f</sub> = &nbsp;
                            </div>
                            <div>
                                <div className={styles.top}>
                                    V<sub>max</sub> - V<sub>min</sub>
                                </div>
                                <div className={styles.bottom} style={{marginLeft: '50%'}}>
                                    I<sub>sc</sub>
                                </div>
                            </div>
                            <div className={styles.formula_center}>
                                &nbsp; = &nbsp;
                            </div>
                            <div>
                                <div className={styles.top}>
                                    5V - 0V
                                </div>
                                <div className={styles.bottom} style={{marginLeft: '10%'}}>
                                    90 μA
                                </div>
                            </div>
                            <div className={styles.formula_center}>
                                &nbsp; = &nbsp;55555.5 Ω
                            </div>
                        </div>
                        <div className={styles.formula_description}>
                            <div>
                                R<sub>f</sub> = feedback resistor
                            </div>
                            <div>
                                V<sub>max</sub> = maximum output voltage
                            </div>
                            <div>
                                V<sub>min</sub> = minimum output voltage
                            </div>
                            <div>
                                I<sub>sc</sub> = short circuit current of photodiode
                            </div>
                        </div>
                    </div>
                    <div className={overallStyles.description}>
                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subsubheading}>Analog-to-Digital Converter</span>
                        </div>

                        <p>To digitize the output voltage signal, we selected the MCP3302-CI/P Analog-to-Digital converter (ADC) for its high resolution and ability to interface over serial peripheral interface (SPI) protocol. With 13-bits of resolution, we favoured the Successive Approximation Register (SAR) architecture of the MCP3303-CI/P over delta-sigma, pipeline, flash, and dual slope architectures due to the perfect balance in bit resolution and sampling rate for photosensing applications. Additionally, the 4 single-ended inputs of the ADC left room for two additional photodiodes on top of the two photodiodes we were prototyping with (Microchip Technology, 2011). We decided to communicate over SPI due to the fast data transmission rate and simplicity. Another reason was that our system consisted of only one master and one slave device in the microcontroller and MCP3302 ADC respectively, which required only one set of communication lines.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subsubheading}>Microcontroller</span>
                        </div>

                        <p>For the microcontroller, we decided upon the Arduino Micro as our development board for its compact size, low cost, support for SPI devices, sufficient memory, and clock speed. In addition, existing code for interfacing over SPI with a family of MCP ADCs was available for use and modification.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subsubheading}>Developing the High-Fidelity Prototype</span>
                        </div>
                        
                        <p>To move forward with a higher fidelity prototype, we decided on using Vishay Intertechnology’s BPW21R as our primary optical sensor over the surface-mount SFH 2430-Z from OSRAM Opto Semiconductors. Though a PIN photodiode is favoured over PN photodiodes in this application due to greater responsivity and response speed, the BPW21R most closely met our design goals with a radiant sensitive area of 7.5 mm<sup>2</sup> and a peak spectral sensitivity of 565 nm (Vishay, 2011). In comparison, the greater sensitivity, the size of the radiant sensitive area, and the faster response speed were held as advantages over the SFH 2430-Z.</p>
                    
                        <p>Recalculating the gain required for the BPW21R:</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div className={styles.formula_div}>
                            <div className={styles.formula_center}>
                                R<sub>f</sub> = &nbsp;
                            </div>
                            <div>
                                <div className={styles.top}>
                                    V<sub>max</sub> - V<sub>min</sub>
                                </div>
                                <div className={styles.bottom} style={{marginLeft: '50%'}}>
                                    I<sub>sc</sub>
                                </div>
                            </div>
                            <div className={styles.formula_center}>
                                &nbsp; = &nbsp;
                            </div>
                            <div>
                                <div className={styles.top}>
                                    5V - 0V
                                </div>
                                <div className={styles.bottom} style={{marginLeft: '15%'}}>
                                    9 μA
                                </div>
                            </div>
                            <div className={styles.formula_center}>
                                &nbsp; = &nbsp;555555.5 Ω
                            </div>
                        </div>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Calculating the bandwidth and feedback capacitor value to implement a low-pass filter for attenuation of signals with undesired frequencies in the trans-impedance configuration:</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div className={styles.formula_div} style={{marginLeft: '15%'}}>
                            <div className={styles.formula_center}>
                                f<sub>b</sub> = &nbsp;
                            </div>
                            <div>
                                <div className={styles.top}>
                                    0.35
                                </div>
                                <div className={styles.bottom} style={{marginLeft: '50%'}}>
                                    t<sub>r</sub>
                                </div>
                            </div>
                            <div className={styles.formula_center}>
                                &nbsp; = &nbsp;
                            </div>
                            <div>
                                <div className={styles.top}>
                                    0.35
                                </div>
                                <div className={styles.bottom}>
                                    3.1 μs
                                </div>
                            </div>
                            <div className={styles.formula_center}>
                                &nbsp; = &nbsp;112903.226 Hz
                            </div>
                        </div>
                        <div className={styles.formula_description} style={{marginBottom: 20}}>
                            <div>
                                f<sub>b</sub> = bandwidth
                            </div>
                            <div>
                                t<sub>r</sub> = rise time of photodiode
                            </div>
                        </div>
                        <div className={styles.formula_div}>
                            <div className={styles.formula_center}>
                                C<sub>f</sub> ≤ &nbsp;
                            </div>
                            <div>
                                <div className={styles.top} style={{borderBottom: 'none', marginLeft: '40%'}}>
                                    1
                                </div>
                                <div className={styles.new_bottom}>
                                    2πR<sub>f</sub>f<sub>b</sub>
                                </div>
                            </div>
                            <div className={styles.formula_center}>
                                &nbsp; = &nbsp;
                            </div>
                            <div>
                                <div className={styles.top} style={{borderBottom: 'none', marginLeft: '40%'}}>
                                    1
                                </div>
                                <div className={styles.new_bottom}>
                                    2π(555.5 kΩ)(112.903 kHz)
                                </div>
                            </div>
                            <div className={styles.formula_center}>
                                &nbsp; = &nbsp;2.5374 pF
                            </div>
                        </div>
                        <div className={styles.formula_description}>
                            <div>
                                C<sub>f</sub> = feedback capacitor
                            </div>
                        </div>
                    </div>
                    <div className={overallStyles.description}>
                        <p>In addition, we also switched the transimpedance amplifier to the LMP7717MAE/NOPB to better fit our design specifications. Specifically, we sought a surface-mount amplifier with minimal input offset voltage, input bias current, and a gain-bandwidth product (GBW) of 55 MHz or greater, which the LMP7717MAE/NOPB satisfied. Here are the calculations used to determine these values:</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div className={styles.formula_div} style={{marginLeft: '10%'}}>
                            <div>
                                C<sub>i</sub> = C<sub>s</sub> + C<sub>d</sub> + C<sub>cm</sub> = 1200pF + 15pF = 1215pF
                            </div>
                        </div>
                        <div className={styles.formula_description} style={{marginBottom: 20}}>
                            <div>
                                C<sub>i</sub> = total input capacitance
                            </div>
                            <div>
                                C<sub>s</sub> = input source (diode) capacitance
                            </div>
                            <div>
                                C<sub>d</sub> = differential input capacitance of the amplifier
                            </div>
                            <div>
                                C<sub>cm</sub> = common mode input capacitance
                            </div>
                        </div>
                        <div className={styles.formula_div}>
                            <div className={styles.formula_center}>
                                GBW {'>'} &nbsp;
                            </div>
                            <div>
                                <div className={styles.top}>
                                    C<sub>i</sub> + C<sub>f</sub>
                                </div>
                                <div className={styles.bottom}>
                                    2πR<sub>f</sub>C<sub>f</sub><sup>2</sup>
                                </div>
                            </div>
                            <div className={styles.formula_center}>
                                &nbsp; = &nbsp;
                            </div>
                            <div>
                                <div className={styles.top} style={{borderBottom: 'none', marginLeft: '10%'}}>
                                    1215 pF + 2.5374 pF
                                </div>
                                <div className={styles.new_bottom}>
                                    2π(555.5 kΩ)(2.5374 pF)<sup>2</sup>
                                </div>
                            </div>
                            <div className={styles.formula_center}>
                                &nbsp; = &nbsp;54.175 MHz
                            </div>
                        </div>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Finally, we placed standard 0.1 μF capacitors near the supply pins of the system to serve as a bypass filter and reduce noise. With the new photodiode, transimpedance amplifier, the MCP3302-CI/SL (surface-mount equivalent ADC), and the Arduino Micro, we aimed to design a printed circuit board (PCB) to mount above the header pins of the Arduino Micro as a single unit for the high-fidelity prototype. Using Altium Designer as the PCB design software, we included an additional photodiode and transimpedance amplifier to the schematic, to connect to a separate analog input channel of the four that the MCP3302-CI/SL had available for quantification of a second analyte.</p>
                    </div>
                </Collapsible>
                <Collapsible open title="Prototype Demo">
                    <div className={overallStyles.description}>
                        <p>After the design phase, the initial prototype is developed with chosen circuit parts. Below shows the schematic diagrams, breadboard configuration of the prototype and the final PCB Design of the optical detector.</p>
                    </div>
                    <div>
                        <img src="https://2021.igem.org/wiki/images/0/00/T--Waterloo--breadBoardConfig.jpeg" className={styles.design_img} style={{borderRadius: 10, width: '40%', marginLeft: '30%'}}></img>
                        <div className={overallStyles.figure_text}>Breadboard configuration</div>
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
                    <div className={overallStyles.description}>
                        <p>The optical detector captures the chemiluminescence signal by the use of a PN photodiode. The photodiode reacts to the brightness by generating electric current under reverse conditions. This current is then converted to voltage and amplified by the transimpedance amplifier. The output signal from the amplifier passes through an analog-to-digital converter to undergo digitization and processing. With the signal in digital form, the microcontroller reads the voltage at the pin and sends the value to the desktop running the software. In our set-up, the microcontroller reads and sends a thousand voltage values per second. The software converts the voltage values into the analyte concentration using the appropriate conversion and displays the values in an analyte concentration vs. time graph.</p>

                        <p>This proof of concept demo video shows that the software application graphs change with the light intensity detected by the optical detection circuit. Please note that the current graphed concentration values only correlate with detected voltage, and that conversion to concentration has not been implemented.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <iframe src="https://2021.igem.org/wiki/images/d/d9/T--Waterloo--ProofOfConceptDemoVideo.mp4" style={{width: 900, height: 500}}></iframe>
                    </div>
                </Collapsible>
            </div>
        )
    }
}

export default OpticalDetector;