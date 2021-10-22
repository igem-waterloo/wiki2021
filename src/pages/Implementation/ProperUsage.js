import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";
import styles from "./properusage.module.scss";
import Collapsible from '../../utils/Collapsible';
import { Table } from 'react-bootstrap';

class ProperUsage extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        Proper Usage of NeuroDetech                    
                    </div>
                    <div className={overallStyles.description}>
                        Proper usage of NeuroDetech is contingent on preprocessing of the urine sample, proper usage of the microfluidic chip and associated quantification app, and disposal of the system. 
                    </div>
                    <Collapsible open title="Preliminary Urine Processing">
                        <div className={overallStyles.text_div}>
                            <div className={overallStyles.subheading}>
                                RNase Inhibition
                            </div>
                            <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                                Preserving the intactness of mRNA in the urine is crucial if gene marker detection is to be carried out in an accurate manner. In order to achieve this, RNAlater, an RNase inhibitor cocktail from Invitrogen, can be used. As per its use instructions, 5 volumes of RNAlater should be added to preserve a sample (ThermoFisher Scientific, n.d.). Considering that the four microfluidic assay chips only require 30 µL of sample each, a 600 µL sample of preserved urine can be prepared as follows:
                            </div>
                            <ol className={overallStyles.description}>
                                <li>
                                    Aliquot 100 µL of urine sample.
                                </li>
                                <li>
                                    To the urine aliquot, add 500 µL of RNAlater.
                                </li>
                            </ol>
                            <div className={overallStyles.subheading}>
                                Urinalysis
                            </div>
                            <div className={overallStyles.description}>
                                A study conducted by researchers at the University of Alberta revealed that human urine is composed of more than 3000 metabolites, making it a highly complex specimen to analyze (University of Alberta News Staff, 2013). Since NeuroDetech utilizes urine specimens, it is important to consider other factors that could affect PEA levels of the patient’s urine. Therefore, performing a urinalysis as a screening procedure prior to using NeuroDetech can ensure a higher level of accuracy when analyzing the PEA levels in urine samples. Additionally, taking certain precautions prior to the urinalysis will decrease the likelihood of inaccurate test results. The main objective of the urinalysis is to ensure that the urine sample is as normal as possible and that there are no pre-existing conditions that could render the results of the NeuroDetech test unreliable.
                            </div>
                            <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                                <b>The following precautions must be taken prior to conducting a urine test that tests for catecholamines such as PEA:</b>
                            </div>
                            <ul className={overallStyles.description}>
                                <li>
                                    Discuss prescribed medications, non-prescription medications, vitamins, and supplements with your physician (Mayo Clinic Staff, 2019).                            </li>
                                <li>
                                    If it is safe to do so, avoid consumption of all medications for three days prior to urine collection. Exceptions include: common hypertensives including diuretics, ACE inhibitors, calcium channel blockers, alpha and beta blockers, etc. (“Dietary Restrictions for Urine Tests”, n.d.).
                                </li>
                                <li>
                                    Avoid consumption of the following 24 hours prior to urine collection: acetaminophen, alcohol, antihistamines, caffeine, aspirin, and vitamin B (“Dietary Restrictions for Urine Tests”, n.d.).
                                </li>
                                <li>
                                    Avoid strenuous exercise 24 hours prior to urine collection (“Dietary Restrictions for Urine Tests”, n.d.).
                                </li>
                            </ul>
                            <div className={styles.procedure_text}>
                                <b>The following 3-step laboratory procedure describes how a urinalysis is performed:</b>           
                            </div>
                            <div className={styles.procedure_text}>
                                <i><b>1. Visual Exam</b></i>                      
                            </div>
                            <div className={styles.procedure_text}>
                                Visually observe and make note of the urine sample's appearance based on its colour and clarity (Mayo Clinic Staff, 2019).
                            </div>
                            <div className={styles.procedure_text}>
                                <b>Colour:</b> shades of yellow described as pale, colourless, dark, or amber
                                <br/>
                                <b>Clarity:</b> clear, slightly cloudy, cloudy, or turbid
                            </div>
                            <div className={styles.procedure_text}>
                                <i><b>2. Chemical Exam: Dipstick Test</b></i>                      
                            </div>
                            <div className={styles.procedure_text}>
                                A dipstick is essentially a plastic stick with reagent pads that change colour depending on the presence of certain chemicals. Dip the dipstick in the urine and interpret the results by using the urinalysis guide on the dipstick test container. The dipsticks tests for: acidity (pH), concentration (specific gravity), protein, glucose, ketones, bilirubin, evidence of infection (nitrites), and blood (Mayo Clinic Staff, 2019).
                            </div>
                        </div>
                        <div className={overallStyles.figure_div}>
                            <div className={overallStyles.figure_text}>
                                <b>Normal Ranges of Urine Dipstick Test Results</b>
                            </div>
                            <Table bordered className={styles.table}>
                                <thead>
                                    <tr>
                                        <th><b>Reagent Pad Test</b></th>
                                        <th><b>Normal Range</b></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Acidity (pH)</td>
                                        <td>5 to 9</td>
                                    </tr>
                                    <tr>
                                        <td>Concentration (specific gravity)</td>
                                        <td>1.003 to 1.040</td>
                                    </tr>
                                    <tr>
                                        <td>Protein</td>
                                        <td>&lt; 30 mg/dL</td>
                                    </tr>
                                    <tr>
                                        <td>Glucose</td>
                                        <td>&lt; 100 mg/dL</td>
                                    </tr>
                                    <tr>
                                        <td>Ketones</td>
                                        <td>Variable</td>
                                    </tr>
                                    <tr>
                                        <td>Bilirubin</td>
                                        <td>None</td>
                                    </tr>
                                    <tr>
                                        <td>Nitrites</td>
                                        <td>None</td>
                                    </tr>
                                    <tr>
                                        <td>Blood</td>
                                        <td>None</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className={overallStyles.text_div}>
                            <div className={styles.procedure_text}>
                                The table above displays the normal ranges of urine dipstick results (Roxe, 1990). Any results outside of these ranges should be analyzed further.
                            </div>
                            <div className={styles.procedure_text}>
                                <i><b>3. Microscopic Exam</b></i>                      
                            </div>
                            <div className={styles.procedure_text}>
                                Centrifuge the urine and examine the resuspended sediment under a microscope (Roxe, 1990). Identify if there are abnormal levels of white blood cells, red blood cells, bacteria, yeast, casts, or crystals (Mayo Clinic Staff, 2019). 
                            </div>
                            <div className={overallStyles.subheading}>
                                Removal of Naturally Occurring Biotin from Urine
                            </div>
                            <div className={overallStyles.description}>
                                As part of the pre-treatment process, the urine sample is passed through a biotin filtration system prior to performing the microfluidic assay. The purpose of this step is to prevent ambient urinary biotin from binding to streptavidin molecules in the control chamber. Streptavidin has a high affinity for biotinylated molecules (with a dissociation constant Kd = 10<sup>-14</sup> M), and we wanted to use this binding capacity to bind the biotinylated fusion protein to the streptavidin in the control chamber (Chivers et al., 2011). However, if urinary biotin molecules are passed through the control chamber, they could “block” the streptavidin binding sites, disrupting our fusion protein’s ability to bind to streptavidin. 
                            </div>
                            <div className={overallStyles.description}>
                                To perform the biotin filtration step, the urine sample is passed through a resin column of Pierce Monomeric Avidin, obtained from ThermoFisher Scientific (ThermoFisher Scientific, n.d.). The biotin molecules in the urine will bind to the monomeric avidin beads, filtering the biotin out of the sample. The affinity between monomeric avidin and biotin is not as strong (compared to streptavidin and biotin), so biotin can be easily eluted by passing a solution known as “Regeneration Buffer,” provided in the Pierce Monomeric Avidin kit, through the column. The resin beads can be reused up to ten times without significant loss of biotin binding capacity. The complete protocol describing the use of the biotin filtration system is detailed in&nbsp; 
                                <a href="https://assets.thermofisher.com/TFS-Assets/LSG/manuals/MAN0011221_Pierce_Monomeric_Avidin_UG.pdf" target="_blank" rel="noreferrer">
                                    these instructions for the ThermoFisher Scientific Pierce Monomeric Avidin Kit
                                </a>
                                .
                            </div>
                        </div>
                    </Collapsible>
                    <Collapsible open title="Usage and Disposal of Microfluidic Assay">
                        <div className={overallStyles.text_div}>
                            <div className={overallStyles.subheading}>
                                Operation of the Microfluidic Assay: User Guide
                            </div>
                            <div className={overallStyles.description}>
                                Once the urine sample has been properly preprocessed (including urinalysis, ambient biotin removal, and addition of RNase inhibitor), analysis of the urine sample for the concentration of an ADHD-associated biomarker or gene marker can be performed. The following steps outline the general protocol that would be carried out by a user of NeuroDetech:
                            </div>
                            <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                                For the usage of a single microfluidic assay chip:
                                <br/>
                                <i>All steps should be performed with proper PPE for handling of urine, which poses a biohazard risk. Gloves, goggles, and a protective apron are a minimum requirement for PPE.</i>
                            </div>
                            <ol className={overallStyles.description}>
                                <li>
                                    Download the NeuroDetech computer application.
                                </li>
                                <li>
                                    Connect the optical detector of the microfluidic assay to the computer via USB.
                                </li>
                                <li>
                                    Pipette 30 µL of the RNAlater-preserved urine sample onto the sample application site of the microfluidic assay chip.
                                </li>
                                <ul>
                                    <li>
                                        Through the action of the capillary pump, the sample will immediately begin to flow through the microfluidic assay.
                                    </li>
                                </ul>
                                <li>
                                    Wait 20 minutes for the sample to flow through the assay. A graph of analyte concentration (i.e. PEA or ADHD-associated mRNA) will be visualized in real time on the computer application as the sample passes through the test and control chambers.
                                </li>
                                <ul>
                                    <li>
                                        The 20-minute assay time is based on the design of Ghosh et al. (2020), from which the design of NeuroDetech’s microfluidic assay is inspired. Dimensions of the NeuroDetech chip follow the dimensions as outlined in the paper. 
                                    </li>
                                </ul>
                                <li>
                                    Once the assay is complete, disconnect the optical detector from the computer, then dispose of the microfluidic assay in the appropriate biohazard waste. The optical detector hardware is reusable. 
                                </li>
                            </ol>
                            <div className={overallStyles.description}>
                                The above steps can be repeated for the other three microfluidic assays to determine the concentrations of the other analytes. After completing all assays, concentrations for PEA, as well as the presence of ADHD-associated mutations in <i>DRD4</i> VNTR motif 3,  <i>DRD4</i> VNTR motif 1, and <i>SNAP25</i> will have been determined. 
                            </div>
                            <div className={overallStyles.subheading}>
                                Safe Disposal of the Microfluidic Assay                        
                            </div>
                            <div className={overallStyles.description}>
                                There exists a need to identify a safe usage and waste protocol for used microfluidic assays. Our test contains a variety of chemicals, and should not be broken/tampered with to reveal the inner contents, at any point in the life of the tool. Chemicals such as Amplex Red can cause harm if in contact with the user. Furthermore, used tests will contain urine samples, which can pose a threat to people handling the assay. These chemicals have the potential to induce effects such as skin and eye irritation (Thermo Fisher, 2019). Thus, the user must take precautions to not break or alter the structure of the microfluidic assay at any point during its usage to expose these chemicals in an unsafe manner (Iacobucci, 2021). 
                            </div>
                            <div className={overallStyles.description}>
                                Once the test has been completed, post-handling is required to interpret the results (e.g., running the chip on an application to yield a graph). Since the test would contain traces of urine, it will have to be handled with care to ensure that there is no contamination from the chip to the user, or external environment, such as the computer. Safe disposal methods would include discarding a used assay in a timely manner immediately after it has done its job in an appropriate waste bin/biohazard bin. 
                            </div>
                            <div className={overallStyles.description}>
                                By exercising caution during its handling, usage, and waste processes, we can ensure that NeuroDetech is being utilized in a safe and efficient manner within a clinical setting. 
                            </div>
                        </div>
                    </Collapsible>
                </div>
            </div>
        )
    }
}

export default ProperUsage;