import React, { Component } from 'react';
import styles from './potentialcost.module.scss';
import overallStyles from "../overall.module.scss";
import { Table } from 'react-bootstrap';

class PotentialCost extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>
                        Potential Cost to Patients
                    </span>
                </div>
                <div className={overallStyles.description}>
                    Individuals currently undergoing an assessment for ADHD in Ontario, Canada must pay for all expenses themselves,unless they have private insurance, for any psychological tests done (Government of Ontario, n.d). All out of pocket costs paid by the patient include clinical assessment, and further possible standardized assessments such as a neurocognitive or psychodiagnostic testing (Government of Ontario, n.d). The only tests covered by OHIP for patients undergoing the ADHD assessment are the laboratory blood tests ordered for inpatients at hospitals to rule out any additional physiological conditions (Government of Ontario, n.d).                 </div>
                <div className={overallStyles.figure_div}>
                    <div className={overallStyles.figure_text}> Table 1: Potential costs to individuals undergoing ADHD Assessment</div>
                    <Table bordered className={styles.table}>
                        <thead>
                            <tr>
                                <th>Cost Source</th>
                                <th>Costs</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Initial Clinical Assessment</td>
                                <td>$ 2,000.00</td>
                            </tr>
                            <tr>
                                <td>Standardized Testing</td>
                                <td>$ 2,500.00</td>
                            </tr>
                            <tr>
                                <td>Average Time Cost (Considering Minimum Wage)</td>
                                <td>$ 181.77</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className={overallStyles.description}>
                    Table 1 displays a sum of the potential costs that an individual undergoing the ADHD assessment may have to pay. The sum in the table varies, as standardized testing and time of cost may be an additional cost to the initial clinical assessment depending on the severity of ADHD, according to stakeholder feedback. The standardized testing cost refers to the cost of a neurocognitive test or psychodiagnostic test. The time cost refers to the time given up from an individual’s workplace. The average time of the cost was derived from expert stakeholder information.
                </div>
                <div className={overallStyles.figure_div}>
                    <div className={styles.crop}>
                    <img src="https://2021.igem.org/wiki/images/4/41/T--Waterloo--Finance.png" alt="Cost Factors" className={styles.cost_img}/>
                    </div>
                    <div className={overallStyles.figure_text}>
                        Figure 1: Cost factors of ADHD diagnosis (Created in BioRender)
                    </div>
                </div>
                
                <div className={overallStyles.description}>
                    At first, NeuroDetech was trying to tackle the problem of reducing the cost of the clinical assessment by making a “cheaper test”. However, it is apparent from stakeholders in the industry that a single quantitative test alone is not adequate in diagnosing ADHD. Therefore, due to needing a qualitative test such as the clinical assessment, the current psychological expenses will still remain what they are for the patient. Nonetheless, NeuroDetech will be used as a quantitative test to aid in the diagnosis of ADHD to provide reassurance, as well as added verification to the patient and the assessor.
                </div>
                <div className={overallStyles.description}>
                    After assessing how NeuroDetech will financially impact patients, two possible situations are plausible. The first is that the patient will pay the full cost of the NeuroDetech test. This is not the outcome NeuroDetech aimed at financially, but with only limited time and resources to fully assess this possibility, it is a scenario that remains possible. The second option is that all NeuroDetech costs are covered by OHIP, leaving no expense to patients.
                </div>
                <div className={overallStyles.description}>
                    Let’s consider the former scenario, in which NeuroDetech is not covered under OHIP. Assuming that basic chemicals such as buffers are readily available and don’t add drastically to the cost of NeuroDetech. Using minimal protein purification equipment would approximately cost ~$1700, along with one time lab costs of ~$400-500 for PEA (Phenethylamine) and ~$1,100-1,200 for the CRISPR Cas13 fusion protein (LabOnTheCheap, 2018). Without considering protein purification costs, the cost of producing 50 microfluidic assays approximately comes out to $11.67 considering the per litre cell culture cost. Including protein purification materials which can cost around ~$550, this brings the one time costs to ~$3400 (for protein purification equipment, PEA, and CRISPR Cas13 fusion protein) bring the cost of producing 50 microfluidic assays is ~$22.67. Hence the price for producing one microfluidic assay, aside from the one time cost is 0.45$ per chip.
                </div>
                <div className={overallStyles.description}>
                    If covered by OHIP, assuming that we use the government's existing protein purification equipment and other lab facilities, the cost of manufacturing mentioned above would be transferred to the government, which is still far cheaper than if OHIP were to cover any other psychological expenses for ADHD diagnosis.
                </div>
                <div className={overallStyles.description}>
                    To further analyze the plausibility of OHIP coverage for Neurodetech, we have established a realistic case for it. In order for a test to be covered by OHIP, it must be deemed medically necessary ( Ministry of Health, n.d). Since Neurodetech would be considered a laboratory test, we looked into if the current laboratory tests that are ordered for ADHD assessment are covered by OHIP. After inquiring with Dynacare Laboratories, we determined that current ADHD laboratory tests are covered by OHIP, as well as a comparable fractionated catecholamine urine test. We have hypothesized that if the current laboratory tests are covered by OHIP, as well as similar urine sample tests, then NeuroDetech should be deemed essential as well.
                </div>
            </div>
        )
    }
}

export default PotentialCost;