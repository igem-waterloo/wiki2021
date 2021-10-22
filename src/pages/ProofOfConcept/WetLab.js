import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Collapsible from '../../utils/Collapsible';
import overallStyles from "../overall.module.scss";

class WetLab extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        Wet Lab Experiments
                    </div>
                    <div className={overallStyles.description}>
                        Due to unforeseen circumstances (one of which was a global pandemic, and the other of which was unforeseen maintenance and construction of our lab space by the University), we unfortunately did not have lab access this year. As a result, we were unable to experimentally test the microfluidic assay with all of its components. With that said, the following set of experiments outlines how we have tested each component of NeuroDetech to demonstrate proof of concept of these individual components, as well as how we would have demonstrated a proof of concept of the NeuroDetech system as a functioning whole.
                    </div>
                    <Collapsible open title="Assessment of Streptavidin Binding to Evaluate the Success of PDMS Derivatization, Conjugation, and Lyophilization">
                        <div className={overallStyles.text_div}>
                            <div className={overallStyles.subheading}>
                                Preliminary Assessment: Assessment of PDMS Alone
                            </div>    
                            <div className={overallStyles.description}>
                                The success of our microfluidic assay is contingent on the ability of molecules to remain covalently conjugated to PDMS when desired. Thus, it would need to be verified that PDMS would be successfully derivatized by PVA treatment, that the conjugation method would be successful, and that the lyophilization and resuspension steps would not impede the functionality of the lyophilized molecules. A way to test the success of all of these steps would involve an experiment testing the ability of streptavidin in the control chamber to bind biotin. Without successful derivatization of the PDMS surface, conjugation of streptavidin to the control chamber would not be successful. As well, assessment of binding after lyophilization by running a biotin solution would give insight into whether lyophilization is somehow damaging the effectiveness of the lyophilized molecules (in this case, streptavidin).
                            </div>  
                            <div className={overallStyles.description}>
                                To test these, the derivatization, conjugation, and lyophilization methods from the Build section should be adapted for a small, test-scale PDMS film. Specifically, the following procedure, adapted from Thomsen et al. (2007), should be performed:
                            </div>
                            <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                                Materials:
                            </div>
                            <ul className={overallStyles.description}>
                                <li>
                                    PDMS film
                                </li>
                                <li>
                                    Pyrogenic silicic acid
                                </li>
                                <li>
                                    10% w/v (3-Aminopropyl)triethoxysilane (APTES)
                                </li>
                                <li>
                                    2.5% w/v Glutaraldehyde
                                </li>
                                <li>
                                    5 mg/mL streptavidin
                                </li>
                            </ul>
                            <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                                Procedure:
                            </div>
                            <ol className={overallStyles.description}>
                                <li>
                                    Soak a PDMS film with pyrogenic silicic acid.
                                </li>
                                <li>
                                    Drain the pyrogenic silicic acid and rinse the PDMS film.
                                </li>
                                <li>
                                    Incubate the PDMS film with a 10% w/v solution of APTES at 80°C for 3 hours.
                                </li>
                                <li>
                                    Drain the APTES solution and rinse the PDMS film.
                                </li>
                                <li>
                                    Incubate the PDMS film with a 2.5% w/v solution of glutaraldehyde (GA) on a rocking shaker for 2 hours at room temperature.
                                </li>
                                <li>
                                    Drain the glutaraldehyde solution and rinse the PDMS film.
                                </li>
                                <li>
                                    Incubate the PDMS film with the 5 mg/mL solution of streptavidin on a rocking shaker for 10-15 hours at 4˚C.
                                </li>
                                <li>
                                    Aliquot 1 mL of the residual solution for determination of streptavidin concentration. This can be done by absorbance at 280 nm, or using a Bradford assay.
                                </li>
                                <li>
                                    Drain the rest of the residual solution and rinse the PDMS film.
                                </li>
                                <li>
                                    Incubate the PDMS film with a solution of bovine serum albumin (BSA) on a rocking shaker for 30 minutes at room temperature.
                                </li>
                                <li>
                                    Drain the residual solution and rinse the PDMS film.
                                </li>
                            </ol>
                            <div className={overallStyles.description}>
                                Knowing the initial streptavidin concentration and the determined concentration of the residual streptavidin solution, the amount of streptavidin conjugated to the PDMS film can be determined.
                            </div>
                            <div className={overallStyles.description}>
                                The streptavidin-conjugated PDMS film can then be lyophilized by first freezing the film in liquid nitrogen for 5 minutes, then utilizing a freeze-drying system such as the Labconco Lyophilizer HRFD-SCIL set at -54°C with 0.010 mbar pressure for 24 hours.
                            </div>
                            <div className={overallStyles.description}>
                                In the meantime, fluorophore-conjugated biotin molecules can be prepared using principles of organic chemistry related to carboxylic acid derivatives. First, HCl should be added to a biotin solution until the pH is around 1. The molar amount of biotin should be the same as the molar amount of streptavidin conjugated to the PDMS film. The purpose of lowering pH to around 1 is as follows: biotin has a carboxylic acid/carboxylate group; adding HCl to a pH of around 1 protonates any carboxylates, thereby preparing biotin for the subsequent reaction. From here, the acidified biotin should be reacted with an equimolar amount of thionyl chloride. This produces a “biotin chloride” that can then be reacted with an equimolar amount of a nucleophilic fluorophore, which effectively substitutes with the chlorine atom to produce biotin conjugated to a fluorophore.
                            </div>
                            <div className={overallStyles.description}>
                                From here, the freeze-dried PDMS film can be resuspended in the fluorescent biotin solution and incubated on a rocking shaker for 20 minutes (which is the same as the assay time for NeuroDetech’s microfluidic assay chip). The residual solution can be drained, and its fluorescence measured using a spectrophotometer. 
                            </div>
                            <div className={overallStyles.description}>
                                Since the fluorescent biotin and streptavidin were in equimolar amounts, and since the binding affinity of streptavidin to biotin is so strong, it is expected that there should be little to no fluorescence in the residual solution, since most or all of the fluorescent biotin should have been bound to the streptavidin on the PDMS film.
                            </div>
                            <div className={overallStyles.subheading}>
                                Assessment in Microfluidic Assay Chip Conditions
                            </div>
                            <div className={overallStyles.description}>
                                After construction of the chip, the general method for the preliminary assessment (described above) would need to be repeated to ensure that the success of derivatization, conjugation, and lyophilization for the PDMS film could also be replicated in the actual microfluidic assay chip.
                            </div>
                            <div className={overallStyles.description}>
                                To do this, a “sacrificial” microfluidic assay chip should be prepared, such that the sample can be recovered after running the sample. Once again, fluorescent biotin should be prepared, as described in the preliminary assessment method (above).
                            </div>
                            <div className={overallStyles.description}>
                                From here, the fluorescent biotin sample should be flowed through the sacrificial microfluidic assay, as if the fluorescent biotin sample was an actual urine sample. Again, the molar amount of fluorescent biotin should be the same as the molar amount of streptavidin conjugated to the control chamber. The expected result is that the fluorescent biotin sample should bind to the conjugated streptavidin at the control chamber, thereby producing fluorescence at the control chamber. As well, the sample fluid should be recovered, and its fluorescence measured; the fluorescence should be negligible, as most (if not all) of the biotin should have been bound at the control chamber. If these expected results are observed, then it would be demonstrated that the methods for PDMS derivatization and conjugation, as well as the viability of lyophilization, would be successful in the microfluidic assay chip.
                            </div>
                        </div>
                    </Collapsible>
                    <Collapsible open title="Experimental Demonstration of Fusion Protein Success">
                        <div className={overallStyles.text_div}>
                            <div className={overallStyles.subheading}>
                                Demonstration of Fusion Protein Stability
                            </div>    
                            <div className={overallStyles.description}>
                                The beauty of working with a fusion protein with a chemiluminescent enzyme domain is that the activity (and by extension, stability) of the fusion protein can be assayed very easily. In the case of the 1UTM-HRP fusion, where Amplex Red is the chemiluminescent substrate of HRP, Amplex Red could be added to a sample of the purified fusion protein in a cuvette. The fusion protein solution would be expected to display chemiluminescence of wavelength 563-587 nm upon addition of Amplex Red; the chemiluminescence can be measured using a spectrophotometer. A negative control would involve adding Amplex Red to the protein’s buffer solution (but without the protein!) to ensure that chemiluminescence displayed by the protein solution is not due to some side reaction with the buffer solution components. A positive control would involve adding Amplex Red to a known pure solution of HRP (not in a fusion protein); this would ensure that Amplex Red is not degraded.
                            </div>
                            <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                                To follow up on the previous stability experiment, simulation of urine conditions (including pH, salt, and major metabolites) would allow us to demonstrate the stability and functionality of the protein in urine. Roxe (1990) determined that urine typically had the following conditions:
                            </div> 
                            <ul className={overallStyles.description}>
                                <li>
                                    A pH range of 5-9, but usually slightly acidic. pH 6 is a reasonable generalization.
                                </li>
                                <li>
                                    A protein concentration of much less than 30 mg/dL; equal or above indicates disease. To simulate protein in urine, bovine serum albumin (BSA) would be an appropriate, inert choice.
                                </li>
                                <li>
                                    A glucose concentration of much less than 100 mg/dL; equal or above indicates disease.
                                </li>
                                <li>
                                    Approximately 4 mM urea.
                                </li>
                                <li>
                                    Approximately 20 mM salt (NaCl).
                                </li>
                            </ul> 
                            <div className={overallStyles.description}>
                                From here, it would be useful to obtain an experimental standard curve for the reaction between HRP and Amplex Red in urine-like conditions. To do this, a series of dilutions of the fusion protein would be made, then a known excess concentration of Amplex Red would be added to each fusion protein dilution. In measuring the chemiluminescence produced by each dilution, a standard curve of chemiluminescence vs. fusion protein concentration can be plotted. A multiplate and multiplate analyzer can be used for this. The same positive and negative controls from the stability experiment (above) should be implemented here as well. This would simulate the conditions of chemiluminescence in the microfluidic assay chip, since in the MCFA chip, the number of fusion protein molecules that bind at the test chamber would be variable, while the amount of Amplex Red that passes through the test chamber would be a known excess amount.
                            </div>
                            <div className={overallStyles.subheading}>
                                Experimental Demonstration of PEA-Binding Success of the Fusion Protein                            
                            </div>    
                            <div className={overallStyles.description}>
                                In order for the fusion protein to adequately bind PEA, it should exhibit a similar binding affinity for PEA as the standalone PEA-binding protein, 1UTM.
                            </div>
                            <div className={overallStyles.description}>
                                Binding affinity between a protein and ligand can be expressed in terms of the protein’s dissociation constant, Kd. Mathematically, Kd is equivalent to the ratio of unbound protein to the ratio of bound protein. It follows that the lower the Kd, the more that protein is bound at any given time, and thus the higher the protein’s affinity for the ligand.
                            </div>
                            <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                                To determine the Kd of the PEA-binding fusion protein, we would need to determine the ratio of unbound:bound protein after incubation with PEA. To do so, an absorbance-based method can be used, as follows:
                            </div>
                            <ol className={overallStyles.description}>
                                <li>
                                    Prepare a solution of the PEA-binding fusion protein (the concentration can vary, so long as it is known).
                                </li>
                                <li>
                                    Prepare an equimolar solution of PEA, prepared in the same buffer solution as the protein solution.
                                </li>
                                <li>
                                    Using a spectrophotometer, measure the absorbance of a 1/2 diluted PEA solution at 257 nm.
                                </li>
                                <ul>
                                    <li>
                                        PEA consists of a benzene ring and an amine group, the former of which exhibits absorbance around 257 nm due to the conjugated pi system (Tong et al., 2020).
                                    </li>
                                    <li>
                                        If the absorbance is over 2.0, dilute the solution and try again until the absorbance is less than 2.0. The dilution factor can be used to calculate the concentration of PEA in the undiluted solution.
                                    </li>
                                </ul>
                                <li>
                                    Incubate the protein solution with the PEA solution in a 1:1 ratio.
                                </li>
                                <ul>
                                    <li>
                                        To prevent protein loss to pipette tips during transfer, prime any tipes used with a solution of bovine serum albumin (BSA), which will prevent protein “sticking” to the tip.
                                    </li>
                                </ul>
                                <li>
                                    Centrifuge the incubated sample to pellet all of the fusion protein, including the fusion protein molecules bound to PEA. Recover the supernatant only.
                                </li>
                                <li>
                                    Using a spectrophotometer, measure the absorbance of the PEA supernatant solution at 257 nm.
                                </li>
                                <ul>
                                    <li>
                                        Again, if the absorbance is over 2.0, dilute the solution and try again until the absorbance is less than 2.0. The dilution factor can be used to calculate the concentration of PEA in the undiluted solution.
                                    </li>
                                </ul>
                            </ol>
                            <div className={overallStyles.description}>
                                In order to interpret the absorbance values, a standard curve must be generated. This should be done by preparing a set of dilutions of a PEA solution of known concentration, then measuring the absorbance of each dilution. The resulting standard curve of absorbance vs. concentration can then be used to determine the concentration of an unknown PEA solution, given its absorbance.
                            </div>
                            <div className={overallStyles.description}>
                                Any amount of PEA that was “missing” from the supernatant (relative to the original known amount of PEA) will have been bound by the fusion protein (in a 1:1 molar ratio). Therefore,
                                <br/>
                                <div style={{textAlign: "center"}}>Kd = concentration of unbound protein / concentration of bound protein</div>
                                By extension,
                                <br/>
                                <div style={{textAlign: "center"}}>Kd = PEA<sub>sup</sub> / (original concentration of PEA - PEA<sub>sup</sub>)</div>
                            </div>
                            <ul className={overallStyles.description} style={{marginTop: "-1%"}}>
                                <li>
                                    where PEA<sub>sup</sub> = supernatant concentration of PEA.
                                </li>
                                </ul>
                            <div className={overallStyles.description}>
                            It would be expected that the fusion protein exhibit an experimental Kd similar to the Kd of standalone 1UTM: approximately 0.000972 (RCSB PDB, n.d.). A dissociation constant much higher than the expected value (and by extension, a lower binding affinity) might indicate that the PEA-binding domain of the fusion protein is not individually stable or active.
                            </div>
                        </div>
                    </Collapsible>
                    <Collapsible open title="Experimental Demonstration of CRISPR-Cas13a Success">
                        <div className={overallStyles.text_div}>
                            <div className={overallStyles.subheading}>
                                Demonstration of CRISPR-Cas13a Stability in Urine-Like Conditions
                            </div>    
                            <div className={overallStyles.description}>
                                In a solution containing ssRNA-linked fluorophores/quenchers, the nonspecific RNase activity of CRISPR-Cas13 after target ssRNA detection allows for the rapid production of a fluorescent signal. The stability and functionality of CRISPR-Cas13 in urine-like conditions can be tested in a similar way as described for the PEA-binding fusion protein. Once again, the expected conditions of urine include pH ~6, a low protein concentration (that can be simulated using BSA), a low glucose concentration, around 4 mM urea, and around 20 mM NaCl (Roxe, 1990). After preparing a solution in RNase-free water with these conditions and adding CRISPR-Cas13a, the fluorophores/quenchers, and the target mRNA sequence, the simulated urine solution would be expected to display fluorescence of wavelength 535 nm that could be measured using a spectrophotometer (Shinoda et al., 2021). A negative control would involve only the simulated urine, and should not display fluorescence; otherwise, the simulated urine may have confounding factors that cause a false positive result.
                            </div>
                            <div className={overallStyles.subheading}>
                                Experimental Demonstration of SNP Discernment by CRISPR-Cas13a                            
                            </div>    
                            <div className={overallStyles.description}>
                                Proper identification of ADHD-associated gene markers by NeuroDetech relies on the ability of CRISPR-Cas13a to distinguish between two mRNA sequences differing only by a single nucleotide polymorphism (SNP). Shinoda et al. (2021) has demonstrated this to be possible and reliable; however, as a component of the proof of concept, we would need to test this for our specific mRNA sequences. To do so, mRNA sequences for the ‘normal’ allele as well as the ADHD-associated mutant allele would need to be obtained, likely by synthesis by a company like IDT. From here, the stability experiment described above should be repeated for the ‘normal’ and ADHD-associated sequences. It would be expected that the ‘normal’ mRNA sequences would not be recognized by CRISPR-Cas13a; thus, its nonspecific RNase activity would not be activated, and no fluorescence would be produced. For the ADHD-associated sequences, fluorescence should be expected, since these mutant sequences are the desired targets of the designed CRISPR-Cas13a guide RNAs.
                            </div>
                        </div>
                    </Collapsible>
                    <Collapsible open title="Experimental Proof of Concept of NeuroDetech">
                        <div className={overallStyles.text_div}>  
                            <div className={overallStyles.description}>
                                With the success of the proof of concepts for the individual components of NeuroDetech (as described in the above sections), we would finally put together all of the pieces and demonstrate a proof of concept for NeuroDetech as a whole. 
                            </div>
                            <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                                To demonstrate that the PEA-detecting microfluidic assay chip can quantify PEA accurately, a set of dilutions of a known concentration of PEA dissolved in simulated urine samples should first be prepared. Again, the simulated conditions of urine include pH ~6, a low protein concentration (that can be simulated using BSA), a low glucose concentration, around 4 mM urea, and around 20 mM NaCl (Roxe, 1990). Then, each dilution should be analyzed using a microfluidic assay chip as if the sample was a true urine sample. A protocol for the proper usage of the microfluidic assay can be found under “Usage and Disposal of Microfluidic Assay” in the&nbsp;
                                <Link to="/Team:Waterloo/Implementation" className={overallStyles.link_text}>
                                    Implementation
                                </Link>
                                &nbsp;page. The steps relevant to this proof of concept are shown below:
                            </div>
                            <ol className={overallStyles.description}>
                                <li>
                                    Download and open the NeuroDetech computer application.
                                </li>
                                <li>
                                    Connect the optical detector of the microfluidic assay to the computer via USB.
                                </li>
                                <li>
                                    Pipette 30 µL of the urine sample onto the sample application site of the microfluidic assay chip.
                                </li>
                                <ul>
                                    <li>
                                        Through the action of the capillary pump, the sample will immediately begin to flow through the microfluidic assay.
                                    </li>
                                </ul>
                                <li>
                                    Wait 20 minutes for the sample to flow through the assay. A graph of PEA concentration will be visualized in real time on the computer application as the sample passes through the test and control chambers.
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
                                The output concentration of each microfluidic assay chip should correspond well to the true, known concentrations of each PEA dilution in simulated urine.
                            </div>
                            <div className={overallStyles.description}>
                                A similar process can be used to demonstrate that the microfluidic assays designed to detect ADHD-associated mRNA mutants would be successful. To do this, mRNA for the ‘normal’ allele as well as the ADHD-associated mutant allele would be prepared in a simulated urine solution. Then, 5 volumes of RNAlater, an RNase inhibitor cocktail, would be added, as per manufacturer instructions (ThermoFisher Scientific, n.d.). Then, the samples would be analyzed by the microfluidic assay chip as per the procedure described above. 
                            </div>
                            <div className={overallStyles.description}>
                                For each ADHD-associated gene, the microfluidic assay would be successful if for the mutant mRNA sample, it displays a fluorescence readout such that the fluorescence is lower than the baseline fluorescence by at least the limit of detection of the microfluidic assay. This would correspond to CRISPR-Cas13a binding at the test chamber in a quantity greater than the detection limit, indicating that the mutant mRNA has been detected. Conversely, for the normal mRNA sample, the fluorescence readout should be highly similar to the baseline fluorescence, indicating no detection of ADHD-associated mutant mRNA. In this way, we would demonstrate that the microfluidic assay has the ability to distinguish between normal vs. ADHD-associated mRNA, and that the assay can successfully detect the latter.
                            </div>
                        </div>
                    </Collapsible>
                </div>
            </div>
        )
    }
}

export default WetLab;