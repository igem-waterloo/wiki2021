import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import styles from './proteindesign.module.scss';
import overallStyles from '../overall.module.scss'
import Collapsible from '../../utils/Collapsible';

class ProteinDesign extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>Protein Optimization</span>
                </div>
                {/* <div>
                    <div className={styles.illustration}></div>
                </div> */}
                <div className={overallStyles.description}>
                    To increase efficiency and accuracy of the detection of target biomarker concentration, we decided to improve the binding affinity and stability of the parts of the fusion proteins - trypsin for binding PEA and monomeric streptavidin for biotin. Protein modelling and improved redesign results are detailed in this section.
                </div>
                <Collapsible open title="Design">
                    <div className={styles.text_div}>
                        <span className={styles.sub_div_heading}>Protein Design Methods</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>There are multiple ways to design and modify proteins that aim to increase binding affinity and stability of the protein. Three main methods were explored by our team, directed evolution, rational protein design and de novo design. Directed evolution follows the path of natural selection, but is guided towards a specific goal that one is trying to achieve with the protein (Huang et.al, 2016). This method commonly requires in-lab testing either in-vivo or in-vitro methods. Rational protein design is the process of assessing the structure of the protein and suggesting changes in the amino acid sequence that could possibly change the folding and increase overall stability. The suggested mutations can be verified using multiple different methods, for example, peptide synthesis - where we link amino acids together, or computational modelling and prediction of folding. (Fields, 2002). De novo protein design consists of designing a protein from scratch by making a new amino acid sequence. This can also be verified through different methods similar to rational protein design.</p>
                        
                        For the 2021 iGEM project, the most suitable method for protein design was rational protein design incorporated with computational modelling to be able to analyze a broader scope of mutations. This is due to limited access to the lab, thus methods like peptide synthesis to test out the directed evolution method or the de novo method are not feasible.
                    </div>
                    <div className={styles.text_div}>
                        <span className={styles.sub_div_heading}>Rational Design: Identification of Key Binding Residues</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>The binding pocket residues of 1UTM were identified by visualizing the unmodified protein in UCSF Chimera. Although the Protein Data Bank of the Research Collaboratory for Structural Bioinformatics (RCSB PDB) lists 5 residues as those involved in binding (Berman et al, 2000), numbering issues with 1UTM pdb file from the PDB had been noted. The PDB version of 1UTM numbers the residues starting from 16. Thus, the file had to be renumbered using Chimera’s functions. Later on in the process, running the Rosetta protocols for single mutations caused a mismatch in the numbering between the original renumbered version of the proteins and the version outputted by Rosetta. The two versions were misaligned by one number; to elaborate, the amino acid located at position 171 in the original renumbered file was instead seen at 170 in the file output by Rosetta, continuing throughout the protein. It is believed that the difference in numbering was due to the presence of the Ca 2+ ligand in another part of the protein, which was still present in the original renumbered file but was removed during the Rosetta protocols.</p>
                        
                        Thus, to avoid errors in identifying the binding residues, a Chimera function was used to identify all residues within a distance of 5 Å from the PEA ligand on the file with no Ca 2+ ligand present. This distance was deemed appropriate in the work of Gao and Skolnick (2012), which stated that the median minimum distance between the heavy atoms of the proteins interfaces and the ligands was 4.2 Å. It should be noted that while residue 40 (His) was within the 5 Å distance it was not taken as a binding pocket residue since it was located on a different part of the protein entirely. It appears that the part of the protein to which the residue was attached merely folds in the direction of PEA.
                    </div>
                    <img src="https://2021.igem.org/wiki/images/a/a2/T--Waterloo--Binding_pocket_1UTM.png" className={styles.design_img}></img>
                    <div className={styles.text_div}>
                        <span className={styles.sub_div_heading}>Rational Design: Observation and Verification with Chimera</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>UCSF Chimera, a widely used molecular chemical visualization and analysis software, was selected for analyzing the biophysical folding structures of trypsin to phenylethylamine (PEA) for its simplicity and versatility. Much like its well-known counterpart, PyMol, UCSF Chimera can be used to analyze genomic sequences and other complexed molecules in the structure. In contrast, UCSF Chimera is also capable of performing molecular dynamics simulations, sequence alignment, genome editing for designing new proteins, and ligand docking through its AutodockVina integration to name a few.</p>
                        
                        <p>For this year’s project, Chimera was used extensively for both rational protein design, ligand docking, and energy conformer analysis. To start, rational protein design in Chimera consisted of visualizing the native Trypsin protein structure and selecting amino acids within a 5.0 Å radius of the known binding pocket for PEA. The motivation behind this was to enhance intermolecular interactions, notably H-bonding, in order to stabilize the protein and increase binding affinity. Amino acids within this radius were selected and replaced by longer-chain similarly charged amino acids. This was followed by a structure minimization function to ensure that the swapped amino acid did not introduce any undesirable steric clashes. The mechanism behind this follows that of the MMTK program commonly seen in Python for molecular dynamics simulations, ensuring that our protein is oriented in its optimal rotamer angles. As a precursor to *minimization*, another protocol known as *Dock Prep* is also called to add missing hydrogens and charges in the structure. The resulting proteins after minimization were further evaluated using the *score_jd2* protocol for conformer energy analysis in Rosetta Commons.</p>

                        <p>Due to the low throughput of proposed mutated proteins in Chimera, we turned to Rosetta Common’s automated protein mutation approach. Further, as a visual verification of the protein complexes generated by Rosetta, Chimera was used.</p>
                    </div>
                    <div className={styles.text_div}>
                        <span className={styles.sub_div_heading}>Computation-Guided Design Approach</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>The method that we chose to go with to modify our protein is rational design with the assistance of a protein design software called Rosetta. Rosetta has functionalities that give us the ability to auto generate all possible mutations for a given protein and then assign it a Rosetta energy score which is a weighted average of multiple different factors such as repulsive and attractive forces, and hydrogen bond energy among many more. The unit is in Rosetta Energy Units (REU). This functionality only requires an input of the PDB file of the protein, and it is optional to specify which mutations to make. This gives us a comprehensive overview of all the possible mutations that can be made on 1UTM. With this information we can do further analysis and propose double and multi mutations to arrive at a protein that is stable and is specific to the ligand. (Rosetta Commons, n.d.)</p>
                        
                        <p>We chose to put an emphasis on the computational method of Rosetta, instead of using a pure rational protein design method because there is a lack of literature on the 1UTM protein. In order to be able to propose adequate mutations for the 1UTM protein, we must be able to understand its structure and how it behaves when folding. Due to the lack of literature on 1UTM and restricted lab access, there is no clear way of making good predictions on which amino acids to change in the sequence.</p>

                        <p>First, we incorporated rational protein design into the choice of single mutations. As such, we considered the biochemical properties of the residues and PEA in order to determine possible advantageous mutations for binding affinity, even if they did not specifically improve the stability of the protein.</p>

                        <p>We then assessed the Rosetta scores for the biochemically-chosen single mutations to ensure they were reasonably stable. A mix of these and the mutations with the best Rosetta scores were then passed to Rosetta to produce double mutations.</p>

                        <p>Finally, the top double mutation pairs were combined to make the multi-mutated protein candidates. These top candidates were later assessed by other more computationally intensive software such as GROMACS and AutoDock Vina to calculate interaction energy and binding energy.</p>
                        
                        <table style={{margin: "auto"}}>
<thead>
<tr>
<th>Score (REU)</th>
<th>Mutation</th>
</tr>
</thead>
<tbody>
<tr>
<td>-322.402</td>
<td>Original</td>
</tr>
<tr>
<td>-344.859</td>
<td>A205T</td>
</tr>
<tr>
<td>-344.706</td>
<td>I81N</td>
</tr>
<tr>
<td>-344.222</td>
<td>I81H</td>
</tr>
<tr>
<td>-343.811</td>
<td>I81W</td>
</tr>
<tr>
<td>-343.794</td>
<td>I81R</td>
</tr>
<tr>
<td>-343.771</td>
<td>I81K</td>
</tr>
<tr>
<td>-343.657</td>
<td>I81Y</td>
</tr>
<tr>
<td>-343.647</td>
<td>A205C</td>
</tr>
<tr>
<td>-343.253</td>
<td>I81F</td>
</tr>
<tr>
<td>-343.191</td>
<td>I81Q</td>
</tr>
</tbody>
</table>


                    </div>
                    
                    {/* <div className={styles.first_section}>
                        <div className={styles.section_img}></div>
                        <div className={styles.section_text}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit.<br/>Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. </div>
                    </div>
                    <div className={styles.description} style={{marginTop: 60}}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius.</div>
                    <div className={styles.illustration} style={{marginBottom: 0}}></div> */}
                </Collapsible>
                <Collapsible open title="Build">
                    <div className={styles.text_div}>
                        <span className={styles.sub_div_heading}>Rosetta: Protein Mutations</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Rosetta is a software tool that was primarily designed to predict structures of proteins. It now has many other applications such as determining macromolecular interactions, molecular docking and protein design (Kaufmann et. al., 2010).</p>
                        
                        <p>Specifically for this project we utilize a protocol, which is a combination of algorithms, called Point Mutant Scan (pmut_scan_parallel) which allows us to input the original protein data bank (PDB) file that contains the sequence of amino acids of the entire protein, and the protocol will output PDBs with all possible combinations of single mutations.</p>

                        <p>The algorithm that Rosetta uses is, once given the original PDB file, it generates a list of every possible mutation of all residues in the protein. The algorithm does this by swapping out the existing amino acid at that residue and replacing it with all other available amino acids. It then makes the mutation and predicts the structure of the newly mutated protein (Rosetta Commons, n.d.). The way that Rosetta is able to predict the structure of the protein is by taking small parts of the protein that is known to create the structure that is most similar to how the protein behaves in nature using the Monte Carlo approach (Rohl et. al., 2004). The Monte Carlo method in brief is the process of sampling a multitude of random combinations, and taking the average of those combinations to form a prediction of the outcome (Zhang et. al., 1992).</p>

                        <p>The outcome of running this protocol is a list of new PDB files, which are then passed onto a scoring protocol. The way that Rosetta determines a score for each mutated protein is by using a weighted average of different energies that it calculates, such as repulsive, attractive and hydrogen bond energies. The lower the Rosetta score, the more stable the protein is, thus the goal is to design the protein to have a lower score compared to the original protein.</p>

                        <span style={{borderBottom: '7px solid #E88A5F'}}>Workflow for Mutating Proteins</span>
                        <ul>
                            <li>Obtain the 1UTM PDB file from the protein data bank.</li>
                            <li>Run a python script to “clean” the PDB file. This removes all the headers and descriptions from the PDB file and leaves it with only the amino acids and the ligand.</li>
                            <li>Use Rosetta’s Point Mutant Scan protocol to generate all the possible single mutations for 1UTM.</li>
                            <li>Score each new mutated protein using Rosetta’s scoring protocol to quantify the mutation and perform further analysis and verification.</li>
                        </ul>

                        <p>Since the point mutant scan protocol and the scoring protocol employ the Monte Carlo method, a high performance computer was used to be able to support the computational power that is needed to generate all the random combinations. We used the Graham cluster from Compute Canada to utilize the Rosetta Software.</p>
                    </div>
                    <div className={styles.text_div}>
                        <span className={styles.sub_div_heading}>Improvement of Trypsin</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Rosetta is a software tool that was primarily designed to predict structures of proteins. It now has many other applications such as determining macromolecular interactions, molecular docking and protein design (Kaufmann et. al., 2010).</p>
                        
                        <p>Specifically for this project we utilize a protocol, which is a combination of algorithms, called Point Mutant Scan (pmut_scan_parallel) which allows us to input the original protein data bank (PDB) file that contains the sequence of amino acids of the entire protein, and the protocol will output PDBs with all possible combinations of single mutations.</p>

                        <p>The algorithm that Rosetta uses is, once given the original PDB file, it generates a list of every possible mutation of all residues in the protein. The algorithm does this by swapping out the existing amino acid at that residue and replacing it with all other available amino acids. It then makes the mutation and predicts the structure of the newly mutated protein (Rosetta Commons, n.d.). The way that Rosetta is able to predict the structure of the protein is by taking small parts of the protein that is known to create the structure that is most similar to how the protein behaves in nature using the Monte Carlo approach (Rohl et. al., 2004). The Monte Carlo method in brief is the process of sampling a multitude of random combinations, and taking the average of those combinations to form a prediction of the outcome (Zhang et. al., 1992).</p>

                        <p>The outcome of running this protocol is a list of new PDB files, which are then passed onto a scoring protocol. The way that Rosetta determines a score for each mutated protein is by using a weighted average of different energies that it calculates, such as repulsive, attractive and hydrogen bond energies. The lower the Rosetta score, the more stable the protein is, thus the goal is to design the protein to have a lower score compared to the original protein.</p>
                    </div>
                    {/* <div className={styles.first_section}>
                        <div className={styles.section_img}></div>
                        <div className={styles.section_text}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit.<br/>Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. </div>
                    </div>
                    <div className={styles.description} style={{marginTop: 60}}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius.</div>
                    <div className={styles.illustration} style={{marginBottom: 0}}></div> */}
                </Collapsible>
                <Collapsible open title="Fourth Option">
                    <div className={styles.first_section}>
                        <div className={styles.section_img}></div>
                        <div className={styles.section_text}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit.<br/>Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. </div>
                    </div>
                    <div className={styles.description} style={{marginTop: 60}}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius.</div>
                    <div className={styles.illustration} style={{marginBottom: 0}}></div>
                </Collapsible>
                <Collapsible open title="Fifth Option">
                    <div className={styles.first_section}>
                        <div className={styles.section_img}></div>
                        <div className={styles.section_text}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit.<br/>Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. </div>
                    </div>
                    <div className={styles.description} style={{marginTop: 60}}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius.</div>
                    <div className={styles.illustration} style={{marginBottom: 0}}></div>
                </Collapsible>
            </div>
        )
    }
}

export default ProteinDesign;