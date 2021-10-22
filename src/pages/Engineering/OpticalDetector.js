import React, {Component} from 'react';
import styles from './opticaldetector.module.scss';
import overallStyles from '../overall.module.scss';
import Collapsible from '../../utils/Collapsible';
import { Table } from 'react-bootstrap';

class OpticalDetector extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading} style={{paddingBottom: 0}}>Optical Detector and Application Development</span>
                </div>
                <div className={overallStyles.description}>
                    <p>In this section, the development of the optical detector and desktop application used to quantify the biomarker and visualize the results to users is described in detail. Alternative biomarker quantification assays are discussed and the reason for selecting a microfluidic assay for this project is explained. The hardware and software development process with final prototypes is also presented.</p>
                </div>
                <Collapsible open title="Design">
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Biomarkers and Lateral Flow Assays</span>
                    <div className={overallStyles.description}>
                        <p>A biomarker is an objective indicator of a patient’s medical state. Some examples include pulse, blood pressure, and concentrations of molecules associated with various health conditions. Biomarkers are widely used in basic and clinical research to help predict relevant clinical outcomes (Strimbu &amp; Tavel, 2010). Similarly, our project applies the concept of biomarkers to validate clinical diagnoses. To do this, we need to detect the presence of and quantify specific biomarkers. One of the most prevalent ways to do this is with a lateral flow assay.</p>

                        <p>Lateral flow assays (LFAs) are tools widely used to detect and quantify analytes in samples. The tester applies a liquid sample to the sample pad located at the end of the LFA strip. It flows to the detection zone, where biological components bind to the target analyte in the sample. After, it flows to the test and control lines. Visualization of the detection result is typically done by conjugating the binding molecules to coloured nanoparticles. The intensity of the test line corresponds to the analyte’s concentration and can be read by eye or reader equipment. Typically paper-based, the device displays results within 5 to 30 minutes. Portability, simplicity, and low manufacturing costs are some of the many reasons why LFAs are popular in several fields where rapid testing is needed. A pregnancy test is a well-known example of an LFA (Koczula &amp; Gallotta, 2016).</p>
                    </div>
                        <span className={overallStyles.text_heading}>Biomarker Quantification Methods</span>
                    <div className={overallStyles.description}>
                        <p>Our project required a quantitative result. Our original approach was to design an assay in the form of a traditional LFA and develop an image processing software to quantify the test result based on the test line intensity. After some research, we discovered several other ways to quantify LFA results, so we analyzed the different methods and tried to pick the best one for our purposes. Some of the qualities we examined included:</p>
                        
                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Accessibility, simplicity, and portability</li>
                            <li>Readout time: the amount of time needed to display accurate test results</li>
                            <li>Limit of detection: the lowest analyte concentration that can be distinguished from a sample with no analyte (Zhan et al., 2020)</li>
                            <li>Sensitivity</li>
                            <li>Whether or not the size of the target analyte matters</li>
                            <li>Feasibility of building a prototype</li>
                        </ul>
                        </p>

                        <p>We researched a total of five methods and compared their advantages and disadvantages. Note that all quantification methods vary from paper to paper, so some points may be specific to one paper. The following gives a general look at each method’s properties and its potential for improvement.</p>
                        </div>
                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Method 1: Traditional LFA and colorimetric analysis</span>
                        </div>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Description</span>
                        </div>
                        <div className={overallStyles.description}>
                        <p>Image processing software quantifies the analyte based on the colour intensity of the LFA test line in a photo.</p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Advantages</span>
                        </div>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Analyte size does not matter</li>
                            <li>User-friendly and portable since readings can be done with a smartphone (Foysal et al., 2019)</li>
                            <li>Quick interpretation time (Foysal et al., 2019)</li>
                            <li>Low cost (Foysal et al., 2019)</li>
                        </ul>
                        </p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Disadvantages</span>
                        </div>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Ambient lighting affects accuracy (Foysal et al., 2019)</li>
                            <li>Can only quantify nanoparticles on the surface of the test line (Qu et al., 2020)</li>
                            <li>Common LFA labels such as gold nanoparticle labels are not very sensitive (Ghosh &amp; Ahn, 2019)</li>
                        </ul>
                        </p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Readout time</span>
                        </div>

                        <p>Since interpretation time is short, the total readout time depends on the LFA readout time.</p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Method 2: LFA ruler</span>
                        </div>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Description</span>
                        </div>

                        <p>Contains a built-in quantification method so that the amount of analyte can be read from the device. For example, the analyte concentration could correspond to the distance that ink advances in a microfluidic channel (Li et al., 2019).</p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Advantages</span>
                        </div>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Analyte size does not matter</li>
                            <li>No external readers are needed since quantitative detection is done by eye (Wu et al., 2016)</li>
                            <li>Low cost (Wu et al., 2016)</li>
                            <li>Portable (Wu et al., 2016)</li>
                        </ul>
                        </p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Disadvantages</span>
                        </div>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Results are read by eye, which limits the precision</li>
                        </ul>
                        </p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Readout time</span>
                        </div>

                        <p>Including the LFA readout time and the quantification time, the entire process takes approximately 20 to 30 minutes (Lin et al., 2018; Li et al., 2019).</p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Method 3: Magnetic LFA</span>
                        </div>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Description</span>
                        </div>

                        <p>Magnetic nanoparticles act as the label, replacing gold nanoparticles in traditional LFAs. Particles on the test line are quantified by an external reader (Moyano et al., 2020).</p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Advantages</span>
                        </div>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Analyte size does not matter (Yan et al., 2019)</li>
                            <li>Quantifies nanoparticles throughout the entire thickness of the LFA membrane (Moyano et al., 2020)</li>
                            <li>Magnetic signals remain stable for longer than optical signals (Moyano et al., 2020)</li>
                            <li>May have improved sensitivity and limit of detection compared to a traditional LFA and visual detection (Jacinto et al., 2018)</li>
                        </ul>
                        </p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Disadvantages</span>
                        </div>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Might be difficult to implement in protein modelling software</li>
                            <li>Limited research</li>
                        </ul>
                        </p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Readout time</span>
                        </div>

                        <p>Due to design similarities, the readout time is likely similar to a traditional LFA, plus a few minutes for quantification.</p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Notes</span>
                        </div>

                        <p>External reader needed, which may or may not be portable (Moyano et al., 2020)</p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Method 4: Traditional LFA and thermal sensor</span>
                        </div>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Description</span>
                        </div>

                        <p>A laser shines on the test line and a thermal sensor measures the heat generated by the nanoparticles (Qu et al., 2020).</p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Advantages</span>
                        </div>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Analyte size does not matter</li>
                            <li>Results are more stable since this method quantifies nanoparticles throughout the entire thickness of the LFA membrane (Qu et al., 2020)</li>
                            <li>Short detection time of approximately 120 seconds (Qu et al., 2020)</li>
                            <li>Improved limit of detection compared to visual detection (Zhan et al., 2020)</li>
                            <li>Portable external reader, which consists of the laser and thermal sensor (Qu et al., 2020)</li>
                        </ul>
                        </p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Disadvantages</span>
                        </div>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Measures nanoparticles indirectly, resulting in lower sensitivity compared to visual detection (Qu et al., 2020)</li>
                            <li>Ambient temperature affects accuracy (Qu et al., 2020)</li>
                        </ul>
                        </p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Readout time</span>
                        </div>

                        <p>The total time is equal to the readout time of a traditional LFA plus 120 seconds for detection.</p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Method 5: Chemiluminescent Microfluidic Capillary Flow Assay</span>
                        </div>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Description</span>
                        </div>

                        <p>Microchannels mix the sample, detecting agent, and chemiluminescent reagents. An optical detection system quantifies the analyte based on the light intensity generated by the reaction (Ghosh et al., 2020).</p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Advantages</span>
                        </div>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Higher sensitivity and improved limit of detection compared to traditional LFA and visual detection (Ghosh &amp; Ahn, 2019; Bhattacharyya &amp; Klapperich, 2007)</li>
                            <li>Low cost (Ghosh et al., 2020)</li>
                            <li>Portable, due to small device and reader size (Ghosh et al., 2020)</li>
                            <li>Longer shelf life due to lyophilization (freeze-drying) of reagents (Ramachandran et al., 2014)</li>
                            <li>Reduced sample volume required (Ghosh et al., 2020)</li>
                            <li>Real-time detection, which can decrease response time (Do &amp; Ahn, 2008)</li>
                        </ul>
                        </p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Disadvantages</span>
                        </div>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Complicated design compared to traditional LFA</li>
                            <li>Less user-friendly compared to other methods</li>
                        </ul>
                        </p>

                        <div style={{margin: '20px 0 20px 0'}}>
                            <span className={styles.sub_sub_heading}>Readout time</span>
                        </div>

                        <p>The total time takes about 20 to 25 minutes. While the chemiluminescent reaction takes about 1 minute to begin and the signal remains for 20 to 25 minutes, our sources recorded results towards the end of that period (Ghosh et al., 2020; Hemmig et al., 2020). It is worth noting that with real-time detection, it is possible to get results within a shorter period.</p>
                    </div>=
                        <span className={overallStyles.text_heading}>Deciding on a Quantification Method</span>
=                    <div className={overallStyles.description}>
                        <p>Since Method 1 was our original plan, it became the standard to which we compared all the other methods. Methods 3 and 4 are similar to Method 1. All three methods use the format of a traditional LFA, with little to no modifications made to the strip. The only difference between Methods 1 and 3 is the reader. All methods require some external reader, but Method 1 is the most accessible and user-friendly since it can be done with a phone.</p>

                        <p>The main benefit that Methods 3 and 4 had over Method 1 was the ability to quantify nanoparticles throughout the entire thickness of the LFA strip. This likely results in an improved limit of detection. We planned on designing a competitive LFA, meaning a fainter signal would correspond to a higher concentration. In our case, an improvement in the limit of detection would mean that our design would be able to test samples with greater analyte concentrations. Our plan at the time involved testing if a patient had lower levels of a specific biomarker, which would correspond to a more intense signal. Thus we decided that an improved limit of detection was not a priority. Since Method 4 quantifies the nanoparticles indirectly, it is not as sensitive as visual detection. We agreed that sensitivity is a priority, so we eliminated Method 4.</p>

                        <p>Method 3, on the other hand, could be more sensitive than visual detection. Unfortunately, Method 3 is a relatively new quantification method, so it would be difficult to research due to limited available information. Meanwhile, Method 1 would be much easier to research as it is already widely used in several fields. In addition, Method 3 would be difficult, if not impossible, to model in the protein modelling software we use. Since we did not have lab access, we knew we would need to rely on modelling software. In addition, the existing research specifies that it requires an external reader. It is unlikely that this method would be more portable and user-friendly than Method 1, which involves taking a photo with a phone. For these reasons, we decided to eliminate Method 3. The possibility of higher sensitivity did not justify the added research needed to understand the complexities of the method.</p>

                        <p>We also decided to eliminate Method 2. The quantification time is longer than the quantification times in the other methods, making its total readout time on the longer side. Methods 1 and 5 use equipment to quantify the test results, likely yielding more consistent and precise readings from test to test. Meanwhile, Method 2 relies on measurements by eye, which limits precision and may increase error.</p>

                        <p>Finally, we needed to decide between Method 1 and Method 5. The advantages of Method 5 were clear since it was developed as a solution to address the limitations of Method 1, specifically their lack of sensitivity and quantitative accuracy. The assay in Method 5 is still a one-step process, with the only added complication being having to measure out a specific sample volume. We thought that Method 5 might require analytes of smaller size due to the size of its microchannels. However, articles showed that microfluidics-based approaches work with analytes comparable in size to our target analyte, so we decided that that would not be an issue. In the end, we chose Method 5 because we thought the significant improvement in sensitivity justified the additional research needed to understand this method and its complicated design.</p>
                    </div>=
                        <span className={overallStyles.text_heading}>Introduction to Microfluidic Assay</span>
=                    <div className={overallStyles.description}>
                        <p>Our primary reference for a chemiluminescent microfluidic capillary flow assay (referred to in the source as a microchannel capillary flow assay, or MCFA) describes a design in which a microfluidic chip emits light through chemiluminescence on the addition of a sample that is negative for a malaria biomarker. Custom hardware measures the produced light and sends the resulting data to a smartphone through its USB port for analysis and display to the user (Ghosh et al., 2020). This model served as a basis for our project design.</p>

                        <p>The microfluidic chip consists of a sample loading chamber, two parallel chambers, one of which holds lyophilized (freeze-dried) fusion protein and the other a chemiluminescent substrate, a reaction chamber from which the light is emitted, and a capillary pump that passively moves the sample through the system. Our design is a competitive lateral flow assay. The reaction chamber initially contains only immobile analyte molecules. When the sample is added to the loading chamber, it is split and passes separately through the two parallel chambers, in one chamber mixing with fusion protein and in the other mixing with a chemiluminescent substrate. Next, the sample-fusion protein mix reaches the reaction chamber. The substrate-sample mix moves through a longer delaying path and only reaches the reaction chamber after binding molecules with biomarkers (path 1 sample fluid) fill the chamber. Finally, the substrate binds to the fusion proteins present in the reaction chamber, which causes chemiluminescence. This design results in a dimmer output indicating a higher concentration of analyte in the sample, and a brighter output indicating a lower concentration of the analyte.</p>

                        <p>Our fusion protein consists of a domain that binds to the target analyte in sample, and a horseradish peroxidase (HRP) domain, which acts as the enzyme that binds the chemiluminescent substrate. The substrate we chose is Amplex Red. For more info about the design of the fusion protein, please refer to the <strong>Biomarker Detection: PEA-Binding Fusion Protein Design</strong> section on the Engineering page.</p>
                    </div>=
                        <span className={overallStyles.text_heading}>Hardware Design</span>
                    <div className={overallStyles.description}>
                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Simulation</span>
                        </div>

                        <p>We started off by creating a circuit simulation in TinkerCAD. We adapted some microcontroller code and a simple photodiode circuit taken from various sources. The purpose of this was to get a general idea of how the circuit and microcontroller will work and which parts to order.</p>
                    </div>
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
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Circuit Part Selection</span>
                        </div>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={styles.sub_sub_heading}>Light Sensor</span>
                        </div>

                        <p>Initially, we considered the use of a photomultiplier tube (PMT) for the detection of resorufin. Resorufin is the fluorescent compound produced in the reaction chambers and has emission maxima of 563 nm. Additionally, the area of the MCFA reaction chamber was 9 mm<sup>2</sup>. These two design specifications in peak spectral sensitivity and radiant sensitive area were the main priorities for selecting an optical sensor.</p>

                        <p>The high internal amplification characteristic of PMTs, as well as its ability to detect low light levels, prompted the consideration for Hamatsu’s R12900U-01 Micro-PMT. However, with a lower peak spectral sensitivity of 420 nm, the sensitivity and the cost were not aligned with our design goals—a similar trend we observed across all PMT devices (Hamamatsu, 2021). Having to look towards cheaper alternatives in photodiodes instead, we decided upon the PDB-C156 from Advanced Photonix for our medium-fidelity prototype. The PDB-C156 is a through-hole PIN silicon photodiode with a peak spectral sensitivity of 660 nm and response time of 15 ns (Advanced Photonix, n.d.).</p>

                        <p>Having no access to the lab this year and no physical fabrication of the MCFA lab chip to test with, the peak spectral sensitivity of the photodiode was not our main priority for the medium-fidelity prototype. Instead, our goal was to test the functionality of the rest of the circuit on the breadboard, and the communication between the microcontroller and the software.</p>
                    
                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={styles.sub_sub_heading}>Transimpedance Amplifier</span>
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
                            <span className={styles.sub_sub_heading}>Analog-to-Digital Converter</span>
                        </div>

                        <p>To digitize the output voltage signal, we selected the MCP3302-CI/P Analog-to-Digital converter (ADC) for its high resolution and ability to interface over serial peripheral interface (SPI) protocol. With 13-bits of resolution, we favoured the Successive Approximation Register (SAR) architecture of the MCP3303-CI/P over delta-sigma, pipeline, flash, and dual slope architectures due to the perfect balance in bit resolution and sampling rate for photosensing applications. Additionally, the 4 single-ended inputs of the ADC left room for two additional photodiodes on top of the two photodiodes we were prototyping with (Microchip Technology, 2011). We decided to communicate over SPI due to the fast data transmission rate and simplicity. Another reason was that our system consisted of only one master and one slave device in the microcontroller and MCP3302 ADC respectively, which required only one set of communication lines.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={styles.sub_sub_heading}>Microcontroller</span>
                        </div>

                        <p>For the microcontroller, we decided upon the Arduino Micro as our development board for its compact size, low cost, support for SPI devices, sufficient memory, and clock speed. In addition, existing code for interfacing over SPI with a family of MCP ADCs was available for use and modification.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={styles.sub_sub_heading}>Developing the High-Fidelity Prototype</span>
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
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Software Design</span>
                    </div>
                    <div className={overallStyles.description}>
                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Desktop vs. Mobile</span>
                        </div>

                        <p>The first thing we had to decide was the platform our software would be on. A mobile application would be excellent for portability, but as previously mentioned, the Human Practices team decided that our project fits best in a clinic lab, so there was no main reason to make the software portable. Labs typically use desktop computers rather than mobile devices for test processing, so it would make sense that our project supports existing lab infrastructure. Doing the data processing on a desktop would make it easier for users to integrate the test results directly into the clinic’s database. Since our plan involved graphing the concentration as the reaction occurred, a bigger screen would allow users to more easily examine graph details.</p>

                        <p>From the build perspective, developing a desktop application was simpler than developing a mobile one. We already had a general framework and class structure for a desktop application that could easily be adapted to suit our purposes.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Tech Stack and Libraries</span>
                        </div>

                        <p>We used Python 3 to handle the graphics and user interaction, the <a href="https://matplotlib.org/" target='_blank' >matplotlib</a> and <a href="https://numpy.org/" target='_blank' >numpy</a> libraries to handle data processing and graphing, <a href='https://pythonhosted.org/pyserial/' target='_blank'>pyserial</a> to read data from the microcontroller, and <a href='https://www.pyinstaller.org/' target='_blank'>pyinstaller</a> to bundle the entire app into an executable file. We wrote the entire application in pure Python to prioritize compactness and ease of development. Due to this design choice, our app is no longer than 500 lines of code, and can be easily read, understood, and extended.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Features</span>
                        </div>

                        <p>Our app supports graphing multiple analyte concentrations simultaneously, and provides the option to toggle which analytes are displayed, allowing a user to choose any combination of analyte concentrations to view at a time. All analytes present are automatically detected, and a toggle option is automatically created to handle them. The displayed graph supports scrolling, and will pause updates if clicked. The app will calculate and display the maximum concentration of each analyte over the entire test, and can export the raw data, the maxima, and an image of the graphs. A legend and color-coding is used to distinguish the analytes being graphed, and will dynamically change and reassign colors based on user needs and preference, or as new analytes are detected or added.</p>

                        <p>Any number of analytes may be examined by our app simultaneously, as it will automatically handle new analytes without the need for manual reconfiguration.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Calculating the Number of Target Analyte Binding Molecules</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>To determine the number of binding molecules that should be used in the microfluidic assay, the amount of PEA expected in a microfluidic assay sample should first be determined. To find this, we searched the literature for typical urinary PEA values. We found the following data from Kusaga et al. (2002):</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div className={overallStyles.figure_text}>Various analyte levels present in urine among ADHD and control subjects, adapted from Kusaga et al. (2002).</div>
                        <Table bordered className={overallStyles.table}>
                        <thead>
                            <tr>
                            <th><strong>Subject</strong></th>
                            <th><strong>Number of patients</strong></th>
                            <th><strong>Age (year)</strong></th>
                            <th><strong>PEA</strong></th>
                            <th><strong>MHPG</strong></th>
                            <th><strong>HVA</strong></th>
                            <th><strong>5HIAA</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>ADHD</td>
                            <td>37</td>
                            <td>8.76 ± 2.19</td>
                            <td>21.66 ± 20.49</td>
                            <td>2.12 ± 0.68</td>
                            <td>7.44 ± 4.95</td>
                            <td>4.31 ± 2.21</td>
                            </tr>
                            <tr>
                            <td>Control (“normal” patient)</td>
                            <td>21</td>
                            <td>7.67 ± 2.51</td>
                            <td>46.61 ± 46.55</td>
                            <td>2.17 ± 0.91</td>
                            <td>5.21 ± 3.25</td>
                            <td>4.38 ± 5.31</td>
                            </tr>
                        </tbody>
                        </Table>
                    </div>
                    <div className={overallStyles.description}>
                        <p>The PEA units are in micrograms/gram of creatinine and the upper range of PEA level in urine for the control group is 93.16 micrograms PEA /gram of creatinine. Kusaga et al. (2002) collected 1 mL from each subject (Kusaga et al., 2002).<br></br>In order to determine the control levels of creatinine, the normal amount of urine was first determined. According to Weatherspoon (2017), urine output is approximately 800 - 2000 mL per day and the urine creatinine amount is 500 to 2000 mg/24 hours (Weatherspoon, 2017). From this, we found that there is approximately 1 mg creatinine/mL of urine when we assume the PEA levels of urine based on the control group’s upper range of PEA levels from the table above.</p>

                        <p>To calculate the number of binding molecules, we will be taking 15 microliters each pathway for a total of 30 microliters.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div className={styles.formula_div} style={{marginLeft: '20%'}}>
                            <div>
                                <div className={styles.top}>
                                    93.16ug PEA
                                </div>
                                <div className={styles.bottom} style={{marginLeft: '5%'}}>
                                    1g creatine
                                </div>
                            </div>
                            <div style={{marginTop: 10}}>
                                &nbsp; <strong>.</strong> &nbsp;
                            </div>
                            <div>
                                <div className={styles.top}>
                                    0.001g creatine
                                </div>
                                <div className={styles.bottom} style={{marginLeft: '20%'}}>
                                    1mL urine
                                </div>
                            </div>
                            <div className={styles.formula_center}>
                                &nbsp; = &nbsp;0.09316ug PEA/1mL urine
                            </div>
                        </div>
                        <div className={styles.formula_div} style={{marginLeft: '15%'}}>
                            <div className={styles.formula_center}>
                                30uL urine
                            </div>
                            <div style={{marginTop: 10}}>
                                &nbsp; <strong>.</strong> &nbsp;
                            </div>
                            <div>
                                <div className={styles.top} style={{borderBottom: 'none', marginLeft: '20%'}}>
                                    1ml
                                </div>
                                <div className={styles.new_bottom}>
                                    1000uL
                                </div>
                            </div>
                            <div style={{marginTop: 10}}>
                                &nbsp; <strong>.</strong> &nbsp;
                            </div>
                            <div>
                                <div className={styles.top}>
                                    0.09316ug PEA
                                </div>
                                <div className={styles.bottom} style={{marginLeft: '20%'}}>
                                    1ml urine
                                </div>
                            </div>
                            <div className={styles.formula_center}>
                                &nbsp; = &nbsp;0.0027948ug PEA in our sample
                            </div>
                        </div>
                        <div className={styles.formula_div}>
                            <div className={styles.formula_center}>
                                0.0027948ug
                            </div>
                            <div style={{marginTop: 10}}>
                                &nbsp; <strong>.</strong> &nbsp;
                            </div>
                            <div>
                                <div className={styles.top} style={{borderBottom: 'none', marginLeft: '30%'}}>
                                    1g
                                </div>
                                <div className={styles.new_bottom}>
                                    1x10<sup>6</sup>ug
                                </div>
                            </div>
                            <div style={{marginTop: 10}}>
                                &nbsp; <strong>.</strong> &nbsp;
                            </div>
                            <div>
                                <div className={styles.top}>
                                    1mol PEA
                                </div>
                                <div className={styles.bottom} style={{marginLeft: '15%'}}>
                                    121.18g
                                </div>
                            </div>
                            <div style={{marginTop: 10}}>
                                &nbsp; <strong>.</strong> &nbsp;
                            </div>
                            <div>
                                <div className={styles.top}>
                                    6.02x10<sup>23</sup>molecules
                                </div>
                                <div className={styles.bottom} style={{marginLeft: '20%'}}>
                                    1mol PEA
                                </div>
                            </div>
                            <div className={styles.formula_center}>
                                &nbsp; = &nbsp;1.388x10<sup>13</sup>molecules PEA found in 30ug urine
                            </div>
                        </div>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Thus we need 1.388x10<sup>13</sup> binding molecules in each assay.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading} style={{paddingBottom: 0}}>Correlate Voltage to Biomarker Concentration: Mathematical Conversion</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>A crucial part of this project was converting the voltage value read by the microcontroller to the target analyte concentration.</p>

                        <p>The microcontroller we used, an Arduino Micro, maps voltage values of 0V to 5V to integer values from 0 to 1023 (Arduino, n.d.). The integer values are what the software receives from the serial port. This is a linear relationship, so to convert the integer, i, back into the voltage, we simply multiply the integer value by 5V and divide by 1024.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div className={styles.formula_div}>
                            <div className={styles.formula_center}>
                                V = &nbsp;
                            </div>
                            <div>
                                <div className={styles.top} style={{borderBottom: 'none', marginLeft: '15%'}}>
                                    5V
                                </div>
                                <div className={styles.new_bottom}>
                                    1024
                                </div>
                            </div>
                            <div className={styles.formula_center}>
                                &nbsp;i
                            </div>
                        </div>
                    </div>
                    <div className={overallStyles.description}>
                        <p>In other words, the rate per unit is 5V/1024, which is approximately 0.0049 V per unit (Arduino, n.d.).</p>

                        <p>The microcontroller reads values after the current from the photodiode passes through the transimpedance amplifier, so we need to use Ohm’s law (V = IR where V is voltage, I is current, and R is resistance) to obtain the current directly from the photodiode. The resistance we used for the amplifier was 57 kΩ (calculated by adding 47 kΩ and 10 kΩ, which were resistors wired in series). The current is calculated using the following:</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div className={styles.formula_div}>
                            <div className={styles.formula_center}>
                                I = &nbsp;
                            </div>
                            <div>
                                <div className={styles.top} style={{borderBottom: 'none', marginLeft: '40%'}}>
                                    V
                                </div>
                                <div className={styles.new_bottom}>
                                    57000Ω
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={overallStyles.description}>
                        <p>We can substitute in first equation for V to get the following:</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div className={styles.formula_div}>
                            <div className={styles.formula_center}>
                                I = &nbsp;
                            </div>
                            <div>
                                <div className={styles.top} style={{borderBottom: 'none', marginLeft: '15%'}}>
                                    5V
                                </div>
                                <div className={styles.new_bottom}>
                                    1024
                                </div>
                            </div>
                            <div style={{marginTop: 10}}>
                                &nbsp; <strong>.</strong> &nbsp;
                            </div>
                            <div>
                                <div className={styles.top} style={{borderBottom: 'none', marginLeft: '40%'}}>
                                    V
                                </div>
                                <div className={styles.new_bottom}>
                                    57000Ω
                                </div>
                            </div>
                            <div className={styles.formula_center}>
                                &nbsp;i &nbsp; = &nbsp;
                            </div>
                            <div>
                                <div className={styles.top} style={{borderBottom: 'none', marginLeft: '40%'}}>
                                    5V
                                </div>
                                <div className={styles.new_bottom}>
                                    58368000Ω
                                </div>
                            </div>
                            <div className={styles.formula_center}>
                                &nbsp;i
                            </div>
                        </div>
                    </div>
                    <div className={overallStyles.description}>
                        <p>From here, further information is needed. We reached out to Vishay, the company that designed the silicon photodiode we used and asked how to convert the current response into a light intensity value. The senior manager of application engineering responded with an example of how to calculate the spectral responsivity, R<sub>λ</sub>, of our photodiode, which gives us a value in amperes per watt (S. Ahmed, personal communication, September 20, 2021). The equation for this is</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div className={styles.formula_div}>
                            <div className={styles.formula_center}>
                                R<sub>λ</sub> = &nbsp;
                            </div>
                            <div>
                                <div className={styles.top}>
                                    I<sub>ra</sub>
                                </div>
                                <div className={styles.bottom}>
                                    P<sub>T</sub>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={overallStyles.description}>
                        <p>where I<sub>ra</sub> is the reverse light current and P<sub>T</sub> is the total power incident on the photodiode.</p>

                        <p>To calculate P<sub>T</sub>, we take the radiant sensitive area, A<sub>p</sub>, (given as 7.5 mm<sup>2</sup> by the data sheet) of the photodiode and multiply it by the chemiluminescent light intensity at the surface of the photodiode, which is expressed in watts per area unit (Vishay, 2011; S. Ahmed, personal communication, October 11, 2021). Assuming that the reaction chamber emits light equally in all directions, the formula for light intensity is</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div className={styles.formula_div}>
                            <div className={styles.formula_center}>
                                L = &nbsp;
                            </div>
                            <div>
                                <div className={styles.top} style={{borderBottom: 'none', marginLeft: '40%'}}>
                                    P
                                </div>
                                <div className={styles.new_bottom}>
                                    4&nbsp;π&nbsp;r<sup>2</sup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={overallStyles.description}>
                        <p>where P is the light wattage and r is the distance of the photodiode radiant area from the reaction chamber (Schwartz, 2018). If calculating the intensity of a lightbulb at a certain point, one can simply take the wattage listed on the packaging. However, our reaction does not have a “wattage”. Instead, we would need to figure out the amount of light energy produced by the reaction and divide that by the amount of time over which the light energy was produced. Putting everything together, we end up with the following equation for responsivity:</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div className={styles.formula_div}>
                            <div className={styles.formula_center}>
                                R<sub>λ</sub> = &nbsp;
                            </div>
                            <div>
                                <div className={styles.top} style={{borderBottom: 'none', marginLeft: '20%'}}>
                                    I<sub>ra</sub>
                                </div>
                                <div className={styles.new_bottom}>
                                    <div className={overallStyles.figure_div}>
                                        <div className={styles.formula_div}>
                                            <div>
                                                <div className={styles.top} style={{borderBottom: 'none', marginLeft: '10%'}}>
                                                    A<sub>p</sub>P
                                                </div>
                                                <div className={styles.new_bottom}>
                                                    4&nbsp;π&nbsp;r<sup>2</sup>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={overallStyles.description}>
                        <p>where I<sub>ra</sub> is the reverse light current, A<sub>p</sub> = 7.5 mm<sup>2</sup> is the radiant sensitive area of the photodiode, P is the amount of light energy produced by the reaction per time unit, and r is the distance of the radiant sensitive area from the reaction chamber.</p>

                        <p>We could not complete this calculation because of the missing values. The first value we did not have was r. This is because we did not design a casing for the hardware and assay so we did not know how far the photodiode would be from the reaction chamber. The second value we did not have was I<sub>ra</sub>. We would need to determine this experimentally by using a quantity of chemiluminescent substrate to generate a known amount of light energy per second, which would be the P value. Using a known quantity of chemiluminescence to transfer a known amount of power to the photodiode, we would then record the amount of current outputted by the photodiode. This would be the I<sub>ra</sub> value. In other words, we needed lab access and more data to complete the calculation. Then using the responsivity, we could determine the light intensity of a test sample reaction based on the photodiode’s output current. However, this conversion would have limited accuracy. There are several environmental factors that affect hardware performance, and more specifically, photodiode performance, which are not included within the equation. In addition, there was not enough information available to determine the relationship between light intensity and substrate concentration, so this would need to be determined experimentally as well. Although we cannot complete any voltage-to-concentration conversion without this piece of information, we can perform a more accurate conversion if we implement a calibration step instead.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading} style={{paddingBottom: 0}}>Correlate Voltage to Biomarker Concentration: Experimental Calibration</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Due to a lack of information and numerous varying environmental factors that could affect the photodiode’s performance, a calibration step done before the test would likely be more accurate than calculations. This is because the information it provides would better reflect the environment in which the test reaction is occurring.</p>
                        
                        <p>To do this, the assay would perform a separate reaction with a calibration sample containing a known quantity of target analyte. Let C<sub>1</sub> stand for the target analyte concentration of the calibration sample. Microfluidic assays require a specific sample volume so the calibration sample and the test sample will have the same volume. Since the protein binds to the target analyte and the chemiluminescent substrate reacts with the protein, the concentration of the chemiluminescent substrate that reacts is equal to the concentration of the target analyte. In our design, only half of the sample is mixed with the protein, so we would be finding the analyte concentration for that half of the sample.</p>

                        <p>Another thing to note is that the amount of current flowing through a photodiode is proportional to the light intensity (Wang, n.d.). As previously mentioned, we do not know the relationship between chemiluminescent substrate concentration and light intensity and would have to determine this experimentally. For the sake of simplicity, we can assume that concentration and light intensity is a linear relationship where no substrate corresponds to no light. This would make sense if each molecule emits an equal and constant amount of light.</p>

                        <p>If this assumption holds, then there would be a linear relationship between analyte concentration and current outputted by the photodiode. To find the slope of this relationship, we would divide the known target analyte concentration by the amount of current measured, which we will call I<sub>1</sub>. This gives us a rate in concentration units per ampere.</p>

                        <p>Recall that our design is based on a competitive LFA. The amount of light emitted by the reaction depends on the amount of protein that binds to the analyte placed in the reaction chamber. This is the protein that does not bind to the analyte in the test sample. We can use the concentration units per ampere rate to determine the concentration of the protein in the reaction chamber. From the previous section, we determined the current by multiplying the integer value from the microcontroller by 5 V / 58368000 Ω. Therefore the equation for C, the concentration of the protein binded to analyte in the reaction chamber is</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div className={styles.formula_div}>
                            <div className={styles.formula_center}>
                                C = &nbsp;
                            </div>
                            <div>
                                <div className={styles.top}>
                                    C<sub>1</sub>
                                </div>
                                <div className={styles.bottom} style={{marginLeft: '30%'}}>
                                    I<sub>1</sub>
                                </div>
                            </div>
                            <div style={{marginTop: 10}}>
                                &nbsp; <strong>.</strong> &nbsp;
                            </div>
                            <div>
                                <div className={styles.top} style={{borderBottom: 'none', marginLeft: '40%'}}>
                                    5V
                                </div>
                                <div className={styles.new_bottom}>
                                    58368000Ω
                                </div>
                            </div>
                            <div className={styles.formula_center}>
                                &nbsp;i
                            </div>
                        </div>
                    </div>
                    <div className={overallStyles.description}>
                        <p>where i is the integer given to the software by the microcontroller.</p>

                        <p>Since we would know the total amount of the protein in the assay, we divide this by half of the sample volume to find the total concentration of protein. Then the concentration of protein binded to the analyte in half of the test sample is</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div className={styles.formula_div}>
                            <div className={styles.formula_center}>
                                C<sub>sample</sub> = &nbsp;
                            </div>
                            <div>
                                <div className={styles.top} style={{borderBottom: 'none', marginLeft: '20%'}}>
                                    A
                                </div>
                                <div className={styles.new_bottom}>
                                    <div className={overallStyles.figure_div}>
                                        <div className={styles.formula_div}>
                                            <div>
                                                <div className={styles.top}>
                                                    V<sub>sample</sub>
                                                </div>
                                                <div className={styles.bottom} style={{marginLeft: '40%'}}>
                                                    2
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{marginTop: 14}}>
                                &nbsp; - &nbsp;
                            </div>
                            <div>
                                <div className={styles.top}>
                                    C<sub>1</sub>
                                </div>
                                <div className={styles.bottom} style={{marginLeft: '30%'}}>
                                    I<sub>1</sub>
                                </div>
                            </div>
                            <div style={{marginTop: 10}}>
                                &nbsp; <strong>.</strong> &nbsp;
                            </div>
                            <div>
                                <div className={styles.top} style={{borderBottom: 'none', marginLeft: '40%'}}>
                                    5V
                                </div>
                                <div className={styles.new_bottom}>
                                    58368000Ω
                                </div>
                            </div>
                            <div className={styles.formula_center}>
                                &nbsp;i
                            </div>
                        </div>
                    </div>
                    <div className={overallStyles.description}>
                        <p>where A is the number of proteins in the assay, V<sub>sample</sub> is the volume of a sample, C<sub>1</sub> is the target analyte concentration of the calibration sample, I<sub>1</sub> is the current outputted by the photodiode during the calibration step, and <sub>i</sub> is the integer given to the software by the microcontroller.</p>

                        <p>Assuming that analyte is equally distributed throughout the sample, this is equal to the analyte concentration of the entire sample.</p>

                        <p>This equation operates under the assumption that all proteins are either binded to analyte in the sample or analyte in the reaction chamber.</p>
                    </div>
                </Collapsible>

                <Collapsible open title="Build">
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Hardware Development</span>
                    </div>
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

                <Collapsible open title="Test">
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Hardware and Serial Port Communication</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>The proof of concept demo video shows that the connection between desktop application and the optical detection circuit is successful, and that displayed graph varies with detected light intensity.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Software</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>When run with the <code>--no-serial</code> argument, the user may manually simulate microcontroller input by entering data in the format <code>[ANALYTE] [VOLTAGE]</code> and watching the graph respond in real time. We tested the software by inputting various data points and verified that they are plotted as expected.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/6/68/T--Waterloo--consoleStart.png" className={styles.design_img} style={{borderRadius: 10}}></img>
                    </div>

                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/e/e8/T--Waterloo--resultStart.png" className={styles.design_img} style={{borderRadius: 10, width: '80%', height: '80%', marginLeft: '10%'}}></img>
                    </div>

                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/0/0d/T--Waterloo--consoleEnd.png" className={styles.design_img} style={{borderRadius: 10}}></img>
                    </div>

                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/d/d7/T--Waterloo--resultEnd.png" className={styles.design_img} style={{borderRadius: 10, width: '80%', height: '80%', marginLeft: '10%'}}></img>
                    </div>
                </Collapsible>
                <Collapsible open title="Learn">
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Errors and Optimization</span>
                    </div>
                    <div className={overallStyles.description}>
                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Hardware</span>
                        </div>

                        <p>Vishay stated that the values on the photodiode data sheet are for a CIE​​ Illuminant A, which is a typical tungsten-filament light (S. Ahmed, personal communication, October 11, 2021; International Commision on Illumination, n.d.). Although we were not able to test the full set-up which would include the microfluidic assay, hardware, and software, it is safe to say that this photodiode was not designed with the purpose of detecting chemiluminescence. In future versions of our project, it would be best to replace this photodiode with a photomultiplier tube that is designed to detect chemiluminescence. If other photodiodes do not exist for this purpose, we could do more research on circuits designed specifically to detect chemiluminescence to better adapt our current circuit for our purposes. The emission spectra for luminescent reagents provided with the reagents may be helpful information in designing a better circuit.</p>

                        <p>Naturally, circuit components can vary in performance due to limitations of the hardware. A possible optimization we can make is to replace existing parts with more advanced, precise, and sensitive parts. We could even commission circuit parts custom-made for our purposes if we had the budget to do so.</p>

                        <p>There are plenty of factors that affect the hardware performance. It is important to keep the factors consistent so tests do not vary in their result for any factor other than sample analyte concentration. This can be done by building a casing for the microfluidic assay and hardware. We would need to take these factors into account when designing the casing. One factor is the angle of the photodiode relative to the reaction chamber. The photodiode is most sensitive when the light hits perpendicular to the radiant sensitive area so we would need to be careful when constructing a casing for the setup to ensure that the reaction chamber is perpendicular to the diode. Another factor is the temperature, which affects how much current can flow through a photodiode. We could design the casing so that the diode is insulated from the rest of the circuit, keeping the temperature near the diode as constant as possible. The calibration step also helps ensure consistent performance by determining the voltage-to-concentration conversion in the test environment.</p>

                        <p>For possible improvements that can be made for the circuit, applying a standard +5V DC bias to the photodiode will be necessary in future designs to operate the photodiode in reverse bias under photoconductive mode. This will improve the response time, signal-to-noise ratio, and maintain linearity in the relationship between the intensity of incident light and output voltage. With the bias, the consequence of increasing the dark current must be carefully considered in the design to retain signal integrity.</p>

                        <p>With the external voltage applied, it is recommended to increase the output voltage to a standard swing of 0V to +10V. This can be accomplished by using a new, +10V single-supply operational amplifier with specifications that match the newly calculated gain-bandwidth product. In addition, increasing the reference voltage of the ADC to +10V is recommended to include the full output range for digitization.</p>

                        <p>In the current system, all components are being supplied from the +5V pin of the Arduino Micro, which acquires power from its USB port. This source can involve lots of noise that will directly affect the accuracy of the ADC as it uses this supply as its reference voltage. Therefore, considerations for an external, non-USB power supply and voltage regulation will provide a steady and clean supply for the circuit components and improve the signal-to-noise ratio. With now two lines of supplies in +5V and +10V in the system, implementing boost/buck converters and regulating the respective voltages will be necessary.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Software</span>
                        </div>

                        <p>While the desktop app can be extended as needed if a usage requires it, some new features which would be generally useful are supporting a togglable per-analyte function to map from voltage to concentration and more robust data analytics tools (such as the ability to easily plot moving averages).</p>

                        <p>We could do more to reduce noise in the data. Most, if not all, of the noise reduction is done by the circuit parts. We could optimize this by getting parts with better noise-reducing qualities, but we could also look into noise-reduction algorithms. Implementing an existing algorithm or designing and implementing our own would provide the tester with more refined and readable data.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Calibration</span>
                        </div>

                        <p>As mentioned in the calibration section, the calculation depends on the assumption that all proteins either bind to analyte in the sample or analyte in the reaction chamber. It is possible that a protein does not bind to any analyte. To decrease the chance of this, the microfluidic chip should maximize mixing so most, if not all, analyte molecules in the sample are binded to. In addition, the reaction chamber should also contain an equal, if not greater, amount of analyte to maximize the chance that free-floating proteins bind to an analyte molecule.</p>

                        <p>The calibration also relies on very precise amounts of reagents. There is a limit to how accurate manufacturing equipment can be so there will inevitably be some error. The calibration also relies on a very precise sample volume. Since testers input the sample, there is a higher chance of error. Testers can minimize this by ensuring only trained individuals conduct the test and by using precise lab tools, taking care to minimize air bubbles. We could also design the microfluidic assay such that it can only contain the exact volume of sample needed. The testers would simply need to fill the chip until it overflows. The excess would not contribute to the reaction.</p>

                        <p>As previously mentioned, the calibration step helps ensure consistent performance by determining the conversion in the test environment. However, since it is done before the test, it would not adjust for changes in the test environment during the test. For example, the circuit could heat up during the test, causing a rise in ambient temperature, which would affect the diode’s performance. We could implement a sort of “real-time calibration”. This would mean that the calibration reaction would occur at the same time or slightly ahead of the actual test so the setup could recalculate the conversion during the test. This way, the conversion would better reflect the test conditions at that point in time.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Next Steps</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>As mentioned in the previous section, designing, building, and testing a casing for the assay and the hardware is a next step necessary for building a fully-working setup.</p>

                        <p>There is also more to be done about the voltage-to-analyte concentration conversion. Firstly, we need to experimentally determine the relationship between chemiluminescent substrate and light intensity, which we currently assume to be linear. The other step is to implement the calibration step as described previously so we could test and optimize this step.</p>

                        <p>With lab access, proper materials, and a fully-functional setup, we could experimentally determine more details about our design, such as the limit of detection, sensitivity, and a more precise readout time. We could use this information to further optimize our design and circuit parts. This would also inform users about test limitations so they can make more informed diagnoses.</p>
                    </div>
                </Collapsible>
            </div>
        )
    }
}

export default OpticalDetector;