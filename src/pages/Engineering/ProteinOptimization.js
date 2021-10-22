import React, {Component} from 'react';
import styles from './proteinoptimization.module.scss';
import overallStyles from '../overall.module.scss';
import Collapsible from '../../utils/Collapsible';
import { Table } from 'react-bootstrap';

class ProteinOptimization extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>Protein Optimization</span>
                </div>
                <div className={overallStyles.description}>
                    <p>To increase efficiency and accuracy of the detection of target biomarker concentration, we decided to improve the binding affinity and stability of the parts of the fusion proteins - trypsin for binding PEA and monomeric streptavidin for biotin. Protein modelling and improved redesign results are detailed in this section.</p>
                </div>
                <Collapsible open title="Design">
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Protein Design Methods</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>There are multiple ways to design and modify proteins that aim to increase binding affinity and stability of the protein. Three main methods were explored by our team, directed evolution, rational protein design and de novo design. Directed evolution follows the path of natural selection, but is guided towards a specific goal that one is trying to achieve with the protein (Huang et.al, 2016). This method commonly requires in-lab testing either in-vivo or in-vitro methods. Rational protein design is the process of assessing the structure of the protein and suggesting changes in the amino acid sequence that could possibly change the folding and increase overall stability. The suggested mutations can be verified using multiple different methods, for example, peptide synthesis - where we link amino acids together, or computational modelling and prediction of folding. (Fields, 2002). De novo protein design consists of designing a protein from scratch by making a new amino acid sequence. This can also be verified through different methods similar to rational protein design.</p>
                        
                        <p>For the 2021 iGEM project, the most suitable method for protein design was rational protein design incorporated with computational modelling to be able to analyze a broader scope of mutations. This is due to limited access to the lab, thus methods like peptide synthesis to test out the directed evolution method or the de novo method are not feasible.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Rational Design: Identification of Key Binding Residues</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>The binding pocket residues of 1UTM were identified by visualizing the unmodified protein in UCSF Chimera. Although the Protein Data Bank of the Research Collaboratory for Structural Bioinformatics (RCSB PDB) lists 5 residues as those involved in binding (Berman et al, 2000), numbering issues with 1UTM pdb file from the PDB had been noted. The PDB version of 1UTM numbers the residues starting from 16. Thus, the file had to be renumbered using Chimera’s functions. Later on in the process, running the Rosetta protocols for single mutations caused a mismatch in the numbering between the original renumbered version of the proteins and the version outputted by Rosetta. The two versions were misaligned by one number; to elaborate, the amino acid located at position 171 in the original renumbered file was instead seen at 170 in the file output by Rosetta, continuing throughout the protein. It is believed that the difference in numbering was due to the presence of the Ca<sup>2+</sup> ligand in another part of the protein, which was still present in the original renumbered file but was removed during the Rosetta protocols.</p>
                        
                        <p>Thus, to avoid errors in identifying the binding residues, a Chimera function was used to identify all residues within a distance of 5 Å from the PEA ligand on the file with no Ca<sup>2+</sup> ligand present. This distance was deemed appropriate in the work of Gao and Skolnick (2012), which stated that the median minimum distance between the heavy atoms of the proteins interfaces and the ligands was 4.2 Å. It should be noted that while residue 40 (His) was within the 5 Å distance it was not taken as a binding pocket residue since it was located on a different part of the protein entirely. It appears that the part of the protein to which the residue was attached merely folds in the direction of PEA.</p>
                    </div>
                    <div className={overallStyles.figure_div} style={{marginBottom: 20}}>
                        <img src="https://2021.igem.org/wiki/images/a/a2/T--Waterloo--Binding_pocket_1UTM.png" className={styles.design_img}></img>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Rational Design: Observation and Verification with Chimera</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>UCSF Chimera, a widely used molecular chemical visualization and analysis software, was selected for analyzing the biophysical folding structures of trypsin to phenylethylamine (PEA) for its simplicity and versatility. Much like its well-known counterpart, PyMol, UCSF Chimera can be used to analyze genomic sequences and other complexed molecules in the structure. In contrast, UCSF Chimera is also capable of performing molecular dynamics simulations, sequence alignment, genome editing for designing new proteins, and ligand docking through its AutodockVina integration to name a few.</p>
                        
                        <p>For this year’s project, Chimera was used extensively for both rational protein design, ligand docking, and energy conformer analysis. To start, rational protein design in Chimera consisted of visualizing the native Trypsin protein structure and selecting amino acids within a 5.0 Å radius of the known binding pocket for PEA. The motivation behind this was to enhance intermolecular interactions, notably H-bonding, in order to stabilize the protein and increase binding affinity. Amino acids within this radius were selected and replaced by longer-chain similarly charged amino acids. This was followed by a structure minimization function to ensure that the swapped amino acid did not introduce any undesirable steric clashes. The mechanism behind this follows that of the MMTK program commonly seen in Python for molecular dynamics simulations, ensuring that our protein is oriented in its optimal rotamer angles. As a precursor to <em>minimization</em>, another protocol known as <em>Dock Prep</em> is also called to add missing hydrogens and charges in the structure. The resulting proteins after minimization were further evaluated using the <em>score_jd2</em> protocol for conformer energy analysis in Rosetta Commons.</p>

                        <p>Due to the low throughput of proposed mutated proteins in Chimera, we turned to Rosetta Common’s automated protein mutation approach. Further, as a visual verification of the protein complexes generated by Rosetta, Chimera was used.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Computation-Guided Design Approach</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>The method that we chose to go with to modify our protein is rational design with the assistance of a protein design software called Rosetta. Rosetta has functionalities that give us the ability to auto generate all possible mutations for a given protein and then assign it a Rosetta energy score which is a weighted average of multiple different factors such as repulsive and attractive forces, and hydrogen bond energy among many more. The unit is in Rosetta Energy Units (REU). This functionality only requires an input of the PDB file of the protein, and it is optional to specify which mutations to make. This gives us a comprehensive overview of all the possible mutations that can be made on 1UTM. With this information we can do further analysis and propose double and multi mutations to arrive at a protein that is stable and is specific to the ligand. (Rosetta Commons, n.d.)</p>
                        
                        <p>We chose to put an emphasis on the computational method of Rosetta, instead of using a pure rational protein design method because there is a lack of literature on the 1UTM protein. In order to be able to propose adequate mutations for the 1UTM protein, we must be able to understand its structure and how it behaves when folding. Due to the lack of literature on 1UTM and restricted lab access, there is no clear way of making good predictions on which amino acids to change in the sequence.</p>

                        <p>First, we incorporated rational protein design into the choice of single mutations. As such, we considered the biochemical properties of the residues and PEA in order to determine possible advantageous mutations for binding affinity, even if they did not specifically improve the stability of the protein.</p>

                        <p>We then assessed the Rosetta scores for the biochemically-chosen single mutations to ensure they were reasonably stable. A mix of these and the mutations with the best Rosetta scores were then passed to Rosetta to produce double mutations.</p>

                        <p>Finally, the top double mutation pairs were combined to make the multi-mutated protein candidates. These top candidates were later assessed by other more computationally intensive software such as GROMACS and AutoDock Vina to calculate interaction energy and binding energy.</p>
                    </div>
                </Collapsible>

                <Collapsible open title="Build">
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Rosetta: Protein Mutations</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Rosetta is a software tool that was primarily designed to predict structures of proteins. It now has many other applications such as determining macromolecular interactions, molecular docking and protein design (Kaufmann et. al., 2010).</p>
                        
                        <p>Specifically for this project we utilize a protocol, which is a combination of algorithms, called Point Mutant Scan (pmut_scan_parallel) which allows us to input the original protein data bank (PDB) file that contains the sequence of amino acids of the entire protein, and the protocol will output PDBs with all possible combinations of single mutations.</p>

                        <p>The algorithm that Rosetta uses is, once given the original PDB file, it generates a list of every possible mutation of all residues in the protein. The algorithm does this by swapping out the existing amino acid at that residue and replacing it with all other available amino acids. It then makes the mutation and predicts the structure of the newly mutated protein (Rosetta Commons, n.d.). The way that Rosetta is able to predict the structure of the protein is by taking small parts of the protein that is known to create the structure that is most similar to how the protein behaves in nature using the Monte Carlo approach (Rohl et. al., 2004). The Monte Carlo method in brief is the process of sampling a multitude of random combinations, and taking the average of those combinations to form a prediction of the outcome (Zhang et. al., 1992).</p>

                        <p>The outcome of running this protocol is a list of new PDB files, which are then passed onto a scoring protocol. The way that Rosetta determines a score for each mutated protein is by using a weighted average of different energies that it calculates, such as repulsive, attractive and hydrogen bond energies. The lower the Rosetta score, the more stable the protein is, thus the goal is to design the protein to have a lower score compared to the original protein.</p>

                        <span className={styles.list_heading}>Workflow for Mutating Proteins</span>
                        <ol className={overallStyles.description}>
                            <li>Obtain the 1UTM PDB file from the protein data bank.</li>
                            <li>Run a python script to “clean” the PDB file. This removes all the headers and descriptions from the PDB file and leaves it with only the amino acids and the ligand.</li>
                            <li>Use Rosetta’s Point Mutant Scan protocol to generate all the possible single mutations for 1UTM.</li>
                            <li>Score each new mutated protein using Rosetta’s scoring protocol to quantify the mutation and perform further analysis and verification.</li>
                        </ol>

                        <p style={{marginTop: 20}}>Since the point mutant scan protocol and the scoring protocol employ the Monte Carlo method, a high performance computer was used to be able to support the computational power that is needed to generate all the random combinations. We used the Graham cluster from Compute Canada to utilize the Rosetta Software.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Improvement of Trypsin</span>
                    </div>
                    <div className={overallStyles.description}>
                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Results: Trypsin Single Mutation</span>
                        </div>
                        <p>There were a total of 4143 single mutations made from using Rosetta’s Point Mutant Scan protocol. Listed below are the top 50 lowest scoring single mutations. The original score for the un-mutated 1UTM with PEA was -322.402 REU.</p>
                        
                        <p>Top 10 Rosetta Scores for 1UTM single mutations and the original protein score are listed in the table below. Please check the full top 50 scores on the spreadsheet <a href='https://docs.google.com/spreadsheets/u/1/d/1r_Wf-dGtYojBKM7i1tRiwdZFUIioxGey/edit' target="_blank">here</a>. For this and all following score tables, the mutations are written in the format “Original Amino Acid|Residue Number|New Amino Acid”.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <Table bordered className={overallStyles.table}>
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
                        </Table>
                    </div>
                    <div className={overallStyles.description}>
                        <p>However, our main goal for our newly designed protein is to increase its ability to bind to the analyte which is PEA. Therefore we must look at the mutations made near the binding pocket residues. Those residues are 169, 170, 171, 172, 175, 189, 190, 191,192,194, 195, 202, 203, and 204. These mutations should have a stronger impact on 1UTM’s binding affinity with PEA, thus are analyzed in more detail. The mutations that are considered for each residue are listed in the spreadsheet <a href='https://docs.google.com/spreadsheets/u/1/d/1r_Wf-dGtYojBKM7i1tRiwdZFUIioxGey/edit' target="_blank">here</a>.</p>
                    
                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Single Mutation Result Interpretation</span>
                        </div>

                        <p>Double mutations for the binding residues were proposed using a combination of rational design and simply evaluating the Rosetta scores of the single mutations for stability. The characteristics of PEA were considered with those of an individual residue in order to make suggestions.</p>

                        <p>The criteria for rational design-proposed mutations depended on the properties of the original amino acid as well as those of the ligand. PEA is positively charged (EMBL-EBI, 2021), thus we proposed changing positively-charged, neutral, or non-polar residues such as serine, cysteine, glutamine, (Merck KGaA, 2021) , and glycine (PubChem Identifier: CID 750, 2021), to negatively-charged amino acids such as aspartic acid and glutamic acid to better accommodate the ligand (Foulquier, 2020). Phenylalanine and Tyrosine, which both possess aromatic side chains, were suggested as changes for any amino acid in the binding pocket, in particular Valine, which possesses an aliphatic side chain (PubChem Identifier: CID 6287, 2021), (Merck KGaA, 2021). These changes were proposed to hopefully result in pi-pi stacking between 1UTM and PEA’s aromatic ring. (Hardinger, 2017a). Trp, which also has an aromatic side chain, was not tested in these circumstances due to its bulkier structure, which could result in increased steric interference (Hardinger, 2017b). As such, when it appeared on the unmodified version of 1UTM, a change from Tryptophan to Phenylalanine or Tyrosine was suggested.</p>

                        <p>A comparison of the original 1UTM protein and the mutation of residue 170 from serine to Aspartic acid was visualized in Chimera, as seen in the images below. The original protein is brown, while the mutated protein is blue. Residue 170 is seen enclosed in the red circle on both images.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/1/19/T--Waterloo--1UTM_mutation_overlap_1b.png" className={styles.design_img}></img>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/0/09/T--Waterloo--1UTM_mutation_overlap_2.png" className={styles.design_img}></img>
                    </div>       
                    <div className={overallStyles.description}>
                        <p>Next, we checked the Rosetta scores for these biochemically chosen single mutations to ensure they were reasonably stable. If a mutation received a score of -300 or lower it was considered for double mutations, otherwise, it was discarded. A maximum of four mutations per residue was passed to Rosetta to synthesize double mutations. When four candidates were passed on, the top two Rosetta scores and two best-scoring rational design candidates were selected, if all four were distinct from each other. If there were less than two suitable rational design candidates, the top three Rosetta-scoring mutations were submitted for double mutations. These groups of top three scorers were accompanied by a rational design candidate if a suitable one was present.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Results: Double Mutations with Rosetta</span>
                        </div>

                        <p>In order to generate the double mutations, we used the same Rosetta protocol, however this time we defined a list of all the double mutations that we want to make. The outcome of this is a PDB file for each double mutation that was passed into the protocol.</p>

                        <p>A heat map was then generated to allow us to visually see which double mutation combination gave us the lowest scoring protein.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/e/ea/T--Waterloo--1UTM_double_heatmap.png" className={styles.design_img}></img>
                        <div className={overallStyles.figure_text}>Heat Map of 1UTM Double Mutations</div>
                    </div> 
                    <div className={overallStyles.description}>   
                        <p>From the heat map above, we picked out the strongest (lowest scoring) double mutations and combined them with other double mutations that also performed well but not the strongest. This led to a total of 56 triple and quadruple mutations that were made on 1UTM, using the same Point Mutant Scan protocol used for the single and double mutations. We again defined the triple and quadruple mutations that were selected and the output is a PDB file for each mutation made.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Results: Trypsin Multiple Mutations</span>
                        </div>

                        <p>The top 15 1UTM multi-mutations will be further considered and analyzed using other tools like Auto-dock Vina and Gromacs. However, the best scoring designed protein based on Rosetta scores is a tie between four triple mutations, which are</p>
                        
                        <p>
                        <ol className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Y204F C195D S190T</li>
                            <li>Y204F C195E S190T</li>
                            <li>Y204F C195F S190T</li>
                            <li>Y204F C195Y S190T</li>
                        </ol>
                        </p>

                        <p>They all have a score of -368.553 REU.</p>

                        <p>Top 15 1UTM Multi-Mutations are listed in the table below. Full tables of modified 1UTM scores are also uploaded <a href='https://docs.google.com/spreadsheets/u/1/d/1r_Wf-dGtYojBKM7i1tRiwdZFUIioxGey/edit' target="_blank">here</a>.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <Table bordered className={overallStyles.table}>
                            <thead>
                                <tr>
                                <th>Score (REU)</th>
                                <th>Mutation 1</th>
                                <th>Mutation 2</th>
                                <th>Mutation 3</th>
                                <th>Mutation 4</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>-368.553</td>
                                <td>Y204F</td>
                                <td>C195D</td>
                                <td>S190T</td>
                                <td>-</td>
                                </tr>
                                <tr>
                                <td>-368.553</td>
                                <td>Y204F</td>
                                <td>C195E</td>
                                <td>S190T</td>
                                <td>-</td>
                                </tr>
                                <tr>
                                <td>-368.553</td>
                                <td>Y204F</td>
                                <td>C195F</td>
                                <td>S190T</td>
                                <td>-</td>
                                </tr>
                                <tr>
                                <td>-368.553</td>
                                <td>Y204F</td>
                                <td>C195Y</td>
                                <td>S190T</td>
                                <td>-</td>
                                </tr>
                                <tr>
                                <td>-366.779</td>
                                <td>S190A</td>
                                <td>C195D</td>
                                <td>C171D</td>
                                <td>Y204H</td>
                                </tr>
                                <tr>
                                <td>-366.779</td>
                                <td>S190A</td>
                                <td>C195E</td>
                                <td>C171E</td>
                                <td>Y204H</td>
                                </tr>
                                <tr>
                                <td>-366.779</td>
                                <td>S190A</td>
                                <td>C195F</td>
                                <td>C171F</td>
                                <td>Y204H</td>
                                </tr>
                                <tr>
                                <td>-366.779</td>
                                <td>S190A</td>
                                <td>C195Y</td>
                                <td>C171Y</td>
                                <td>Y204H</td>
                                </tr>
                                <tr>
                                <td>-366.616</td>
                                <td>S190T</td>
                                <td>C195E</td>
                                <td>C171E</td>
                                <td>Y204H</td>
                                </tr>
                                <tr>
                                <td>-366.616</td>
                                <td>S190T</td>
                                <td>C195F</td>
                                <td>C171F</td>
                                <td>Y204H</td>
                                </tr>
                                <tr>
                                <td>-366.616</td>
                                <td>S190T</td>
                                <td>C195Y</td>
                                <td>C171Y</td>
                                <td>Y204H</td>
                                </tr>
                                <tr>
                                <td>-366.616</td>
                                <td>S190T</td>
                                <td>C195D</td>
                                <td>C171D</td>
                                <td>Y204H</td>
                                </tr>
                                <tr>
                                <td>-366.421</td>
                                <td>S190A</td>
                                <td>C195D</td>
                                <td>Y204H</td>
                                <td>-</td>
                                </tr>
                                <tr>
                                <td>-366.421</td>
                                <td>S190A</td>
                                <td>C195E</td>
                                <td>Y204H</td>
                                <td>-</td>
                                </tr>
                                <tr>
                                <td>-366.421</td>
                                <td>S190A</td>
                                <td>C195F</td>
                                <td>Y204H</td>
                                <td>-</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Improvement of Monomeric Streptavidin</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Monomeric streptavidin, conjugated to the control chamber, binds to biotin on the binding molecule when it reaches the control chamber. For streptavidin, the same workflow as 1UTM was used to design this protein. First we auto-generated a list of all possible single mutations using Rosetta.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Results: Monomeric Streptavidin Single Mutation</span>
                        </div>

                        <p>The top 10 lowest scoring proteins are given in the following table. The original score for un-mutated streptavidin with biotin was -104.826 REU. Full top 50 mutations are recorded <a href='https://docs.google.com/spreadsheets/u/1/d/1SgsB72_eUh2hm3cXvlslBUDv0N5JtfM7/edit' target="_blank">here</a>.</p>

                    </div>
                    <div className={overallStyles.figure_div}>
                        <Table bordered className={overallStyles.table}>
                            <thead>
                                <tr>
                                <th>Score (REU)</th>
                                <th>Mutation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>-104.826</td>
                                <td>Original</td>
                                </tr>
                                <tr>
                                <td>-141.239</td>
                                <td>Y52F</td>
                                </tr>
                                <tr>
                                <td>-139.972</td>
                                <td>L57M</td>
                                </tr>
                                <tr>
                                <td>-139.911</td>
                                <td>C41A</td>
                                </tr>
                                <tr>
                                <td>-139.911</td>
                                <td>C41D</td>
                                </tr>
                                <tr>
                                <td>-139.911</td>
                                <td>C41E</td>
                                </tr>
                                <tr>
                                <td>-139.911</td>
                                <td>C41F</td>
                                </tr>
                                <tr>
                                <td>-139.911</td>
                                <td>C41G</td>
                                </tr>
                                <tr>
                                <td>-139.911</td>
                                <td>C41H</td>
                                </tr>
                                <tr>
                                <td>-139.911</td>
                                <td>C41I</td>
                                </tr>
                                <tr>
                                <td>-139.911</td>
                                <td>C41K</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className={overallStyles.description}>

                        <p>We also took a closer look at the binding pocket residues for streptavidin which are residues 12, 16, 32, 34, 36, 72, 74 and 92. The mutations that scored higher than the original protein for each binding pocket residue are further analyzed and recorded <a href='https://docs.google.com/spreadsheets/u/1/d/1SgsB72_eUh2hm3cXvlslBUDv0N5JtfM7/edit' target="_blank"><span className={styles.link}>here</span></a>.</p>

                        <p>Then double mutations were chosen based on the Rosetta scores similar to the process used for 1UTM. Those double mutations were passed into Rosetta and a heat map was generated for Streptavidin as well.</p>
                        </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/4/40/T--Waterloo--strep-heatmap.png" className={styles.design_img}></img>
                    </div> 
                    <div className={overallStyles.description}> 
                        <p>From the heat map, the strongest double mutations were chosen and then combined with other less strong mutations as well as a few of the top 50 single mutations to generate triple and quadruple mutations. This list was also passed into Rosetta to generate the PDB files and scores. The scores for the 12 suggested triple, quadruple, quintuple and sextuple mutations for streptavidin are listed below.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <Table bordered className={overallStyles.table}>
                            <thead>
                                <tr>
                                <th>Score (REU)</th>
                                <th>Mutation</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>-167.751</td>
                                <td>T74C</td>
                                <td>N12A</td>
                                <td>Y52F</td>
                                <td></td>
                                <td></td>
                                </tr>
                                <tr>
                                <td>-166.862</td>
                                <td>T74C</td>
                                <td>N12A</td>
                                <td>L57M</td>
                                <td></td>
                                <td></td>
                                </tr>
                                <tr>
                                <td>-157.12</td>
                                <td>T74C</td>
                                <td>N12A</td>
                                <td>T49K</td>
                                <td></td>
                                <td></td>
                                </tr>
                                <tr>
                                <td>-154.14</td>
                                <td>T74C</td>
                                <td>N12A</td>
                                <td>N64S</td>
                                <td></td>
                                <td></td>
                                </tr>
                                <tr>
                                <td>-153.232</td>
                                <td>T74C</td>
                                <td>N12A</td>
                                <td>R60T</td>
                                <td></td>
                                <td></td>
                                </tr>
                                <tr>
                                <td>-133.52</td>
                                <td>T74C</td>
                                <td>N12A</td>
                                <td>A36C</td>
                                <td></td>
                                <td></td>
                                </tr>
                                <tr>
                                <td>-132.144</td>
                                <td>T74C</td>
                                <td>N12A</td>
                                <td>N34A</td>
                                <td>A36C</td>
                                <td></td>
                                </tr>
                                <tr>
                                <td>-132.051</td>
                                <td>T74C</td>
                                <td>N12A</td>
                                <td>N34A</td>
                                <td></td>
                                <td></td>
                                </tr>
                                <tr>
                                <td>-131.989</td>
                                <td>T74C</td>
                                <td>N12A</td>
                                <td>A36C</td>
                                <td>Y32A</td>
                                <td></td>
                                </tr>
                                <tr>
                                <td>-130.956</td>
                                <td>T74C</td>
                                <td>N12A</td>
                                <td>Y32C</td>
                                <td></td>
                                <td></td>
                                </tr>
                                <tr>
                                <td>-129.267</td>
                                <td>T74C</td>
                                <td>N12A</td>
                                <td>N34A</td>
                                <td>A36C</td>
                                <td>Y32A</td>
                                </tr>
                                <tr>
                                <td>-128.766</td>
                                <td>T74C</td>
                                <td>N12A</td>
                                <td>N34A</td>
                                <td>Y32A</td>
                                <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Based on Rosetta scores, the best designed protein consisted of the 3 mutations, T74C, N12A, Y52F.</p>
                    </div>
                </Collapsible>

                <Collapsible open title="Test">
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Docking Analysis with AutoDock Vina and Chimera</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>To test that the modified proteins from Rosetta protocols do have a higher binding energy with the ligand, docking analysis and binding energies are calculated for the top mutated proteins produced in the Build section. Autodock Vina is a program for performing molecular docking simulations using input receptor-ligand pairs. Performing ligand docking by AutoDock Vina results in the generation of multiple PDBQT files containing the coordinates in space for the docked protein complex. These PDBQT files can further be loaded into the previously mentioned UCSF Chimera for verification of binding in the desired pocket. Compared to its original counterpart, AutoDock Vina is 59% more accurate than AutoDock 4 in yielding binding mode predictions with an RMSD less than 2. Similarly, AutoDock Vina is nearly 450, and 65 times faster than AutoDock 4, running on an 8-, and 1- core CPU, respectively. Conveniently, the functionalities of AutoDock Vina are integrated into the Chimera GUI and can also be run using Chimera Scripts, so long as you have downloaded the AutoDock Vina executable on your local device. Previously, docking simulations were run manually using this functionality in Chimera by selecting a volumetric box for the binding pocket, setting the appropriate binding mode parameters, and running the docking one protein at a time. To circumvent the issue of long process times using this manual method, an automated method using Chimera’s support for Python scripts was implemented.</p>

                        <p>The Python script serves several purposes including, opening the mutated protein output from Rosetta, deleting the ligand from the complex, adding the native ligand file to the environment, and performing ligand docking, saving only the docking coordinate of the highest scoring conformer. These scores were then copied and written to a master energy score text file automatically and saved. Both singly- and doubly- mutated proteins generated by Rosetta were used for docking. The doubly mutated proteins combined mutations from both the binding pocket and a non-binding region in efforts to decrease the energy score of the overall structure for enhanced stability. Implementation of this process revealed that singly mutated trypsin-PEA complexed proteins outperformed doubly-mutated trypsin-PEA protein complexes on average. To illustrate this, the following distributions were observed for singly- vs doubly- mutated trypsin proteins. As you can see, the maximum energy score for doubly mutated proteins was -4.8 kcal/mole, while an energy score of -4.9 kcal/mole was frequently seen in singly-mutated proteins. From these preliminary energy score results we can deduce that double mutations on the complex did not have any effect on decreasing its energy score, and thus stability was not affected. To further confirm this a secondary energy analysis should be performed using the score_jd2 protocol in Rosetta or structure scoring in GROMACS.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div className={overallStyles.figure_text}>1UTM-PEA Docking Scores</div>
                        <Table bordered className={overallStyles.table}>
                            <thead>
                                <tr>
                                <th>Mutation 1</th>
                                <th>Mutation 2</th>
                                <th>Mutation 3</th>
                                <th>Mutation 4</th>
                                <th>Interaction Energy (kcal/mole)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Native</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>-4.6</td>
                                </tr>
                                <tr>
                                <td>S190A</td>
                                <td>C195E</td>
                                <td>C171E</td>
                                <td>Y204H</td>
                                <td>-4.8</td>
                                </tr>
                                <tr>
                                <td>S190T</td>
                                <td>C195F</td>
                                <td>C171F</td>
                                <td>Y204H</td>
                                <td>-4.8</td>
                                </tr>
                                <tr>
                                <td>S190A</td>
                                <td>C195E</td>
                                <td>Y204H</td>
                                <td></td>
                                <td>-4.8</td>
                                </tr>
                                <tr>
                                <td>Y204F</td>
                                <td>C195E</td>
                                <td>S190</td>
                                <td></td>
                                <td>-4.7</td>
                                </tr>
                                <tr>
                                <td>S190A</td>
                                <td>C195D</td>
                                <td>Y204H</td>
                                <td></td>
                                <td>-4.7</td>
                                </tr>
                                <tr>
                                <td>S190T</td>
                                <td>C195Y</td>
                                <td>C171Y</td>
                                <td>Y204H</td>
                                <td>-4.9</td>
                                </tr>
                                <tr>
                                <td>Y204F</td>
                                <td>C195D</td>
                                <td>S190T</td>
                                <td></td>
                                <td>-4.8</td>
                                </tr>
                                <tr>
                                <td>S190T</td>
                                <td>C195D</td>
                                <td>C171D</td>
                                <td>Y204H</td>
                                <td>-4.8</td>
                                </tr>
                                <tr>
                                <td>S190A</td>
                                <td>C195Y</td>
                                <td>C171Y</td>
                                <td>Y204H</td>
                                <td>-4.8</td>
                                </tr>
                                <tr>
                                <td>Y204F</td>
                                <td>C195Y</td>
                                <td>S190T</td>
                                <td></td>
                                <td>-4.8</td>
                                </tr>
                                <tr>
                                <td>S190A</td>
                                <td>C195D</td>
                                <td>C171D</td>
                                <td>Y204H</td>
                                <td>-4.8</td>
                                </tr>
                                <tr>
                                <td>S190T</td>
                                <td>C195E</td>
                                <td>C171E</td>
                                <td>Y204H</td>
                                <td>-4.8</td>
                                </tr>
                                <tr>
                                <td>S190A</td>
                                <td>C195F</td>
                                <td>C171F</td>
                                <td>Y204H</td>
                                <td>-4.8</td>
                                </tr>
                                <tr>
                                <td>Y204F</td>
                                <td>C195F</td>
                                <td>S190T</td>
                                <td></td>
                                <td>-4.8</td>
                                </tr>
                                <tr>
                                <td>S190A</td>
                                <td>C195F</td>
                                <td>Y204H</td>
                                <td></td>
                                <td>-4.8</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className={overallStyles.description}>
                        <p>A similar energy conformer analysis using the above-mentioned automated approach using a Python script was implemented for mutation candidates generated by Rosetta on the monomeric streptavidin-biotin complex. The lowest scoring multi-mutant streptavidin proteins yielded an energy score of -7.4 kcal/mole.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div className={overallStyles.figure_text}>Streptavidin-Biotin Docking Scores</div> 
                        <Table bordered className={overallStyles.table}>
                            <thead>
                                <tr>
                                <th>Mutation 1</th>
                                <th>Mutation 2</th>
                                <th>Mutation 3</th>
                                <th>Mutation 4</th>
                                <th>Mutation 5</th>
                                <th>Interaction Energy (kcal/mole)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>T74C</td>
                                <td>N12A</td>
                                <td>L57M</td>
                                <td></td>
                                <td></td>
                                <td>-5.8</td>
                                </tr>
                                <tr>
                                <td>T74C</td>
                                <td>N12A</td>
                                <td>T49K</td>
                                <td></td>
                                <td></td>
                                <td>-5.9</td>
                                </tr>
                                <tr>
                                <td>T74C</td>
                                <td>N12A</td>
                                <td>Y52F</td>
                                <td></td>
                                <td></td>
                                <td>-7.4</td>
                                </tr>
                                <tr>
                                <td>T74C</td>
                                <td>N12A</td>
                                <td>A36C</td>
                                <td></td>
                                <td></td>
                                <td>-7.1</td>
                                </tr>
                                <tr>
                                <td>T74C</td>
                                <td>N12A</td>
                                <td>R60T</td>
                                <td></td>
                                <td></td>
                                <td>-5.8</td>
                                </tr>
                                <tr>
                                <td>T74C</td>
                                <td>N12A</td>
                                <td>N64S</td>
                                <td></td>
                                <td></td>
                                <td>-5.8</td>
                                </tr>
                                <tr>
                                <td>Native</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>-5.6</td>
                                </tr>
                                <tr>
                                <td>T74C</td>
                                <td>A-N12A</td>
                                <td>N34A</td>
                                <td></td>
                                <td></td>
                                <td>-7.1</td>
                                </tr>
                                <tr>
                                <td>T74C</td>
                                <td>A-N12A</td>
                                <td>A-N34A</td>
                                <td>A36C</td>
                                <td>Y32A</td>
                                <td>-5.8</td>
                                </tr>
                                <tr>
                                <td>T74C</td>
                                <td>A-N12A</td>
                                <td>A-Y32C</td>
                                <td></td>
                                <td></td>
                                <td>-7.2</td>
                                </tr>
                                <tr>
                                <td>T74C</td>
                                <td>A-N12A</td>
                                <td>A-N34A</td>
                                <td>A-Y32A</td>
                                <td></td>
                                <td>-5.8</td>
                                </tr>
                                <tr>
                                <td>T74C</td>
                                <td>A-N12A</td>
                                <td>A-A36C</td>
                                <td>A-Y32A</td>
                                <td></td>
                                <td>-5.7</td>
                                </tr>
                                <tr>
                                <td>T74C</td>
                                <td>A-N12A</td>
                                <td>A-N34A</td>
                                <td>A-A36C</td>
                                <td></td>
                                <td>-7.4</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Molecular Dynamics Analysis with GROMACS</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>We used molecular dynamics simulations to test the relative binding affinities of the top 15 1UTM multi-mutation proteins with PEA. We did this by using GROMACS to find the total interaction energy between each protein and PEA and comparing the relative magnitudes of these interaction energies to compare binding strength. The GROMACS simulations were performed on the Graham computing cluster hosted by ComputeCanada.</p>

                        <p>To complete the GROMACS simulations, first, we prepared the protein and ligand topologies using the CHARMM36 force field and TIP3P water model (CHARMM force field files, MacKerell Lab). Then, we completed a solvation process to place the system in solution, and then added Na<sup>+</sup> ions to the solution to balance out the net charge of the system. Next, we carried out an energy minimization step, to relax the system to the closest local energy minimum and avoid extreme behaviour that could occur due to collisions between particles. The next step was using standard NVT and NPT equilibration procedures in GROMACS to equilibrate the system to the desired temperature and pressure. Finally, we ran the production MD simulation. When this step was completed, we performed analysis to collect the total interaction energy for each pair of protein and PEA. We used the magnitudes of these interaction energies as a way to compare the relative strength of the interaction between PEA and each protein (Lemkul, 2018).</p>

                        <p>Here are the total interaction energies we collected for the original 1UTM and the top 15 multiple mutation proteins:</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <Table bordered className={overallStyles.table}>
                            <thead>
                                <tr>
                                <th>Mutation 1</th>
                                <th>Mutation 2</th>
                                <th>Mutation 3</th>
                                <th>Mutation 4</th>
                                <th>Total Interaction Energy (kJ/mol)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>-108.7289</td>
                                </tr>
                                <tr>
                                <td>Y204F</td>
                                <td>C195D</td>
                                <td>S190T</td>
                                <td></td>
                                <td>-125.7208</td>
                                </tr>
                                <tr>
                                <td>Y204F</td>
                                <td>C195E</td>
                                <td>S190T</td>
                                <td></td>
                                <td>-94.3676</td>
                                </tr>
                                <tr>
                                <td>Y204F</td>
                                <td>C195F</td>
                                <td>S190T</td>
                                <td></td>
                                <td>-96.4218</td>
                                </tr>
                                <tr>
                                <td>Y204F</td>
                                <td>C195Y</td>
                                <td>S190T</td>
                                <td></td>
                                <td>-89.3934</td>
                                </tr>
                                <tr>
                                <td>S190A</td>
                                <td>C195D</td>
                                <td>C171D</td>
                                <td>Y204H</td>
                                <td>-106.7369</td>
                                </tr>
                                <tr>
                                <td>S190A</td>
                                <td>C195E</td>
                                <td>C171E</td>
                                <td>Y204H</td>
                                <td>-93.5768</td>
                                </tr>
                                <tr>
                                <td>S190A</td>
                                <td>C195F</td>
                                <td>C171F</td>
                                <td>Y204H</td>
                                <td>-111.2318</td>
                                </tr>
                                <tr>
                                <td>S190A</td>
                                <td>C195Y</td>
                                <td>C171Y</td>
                                <td>Y204H</td>
                                <td>-118.3681</td>
                                </tr>
                                <tr>
                                <td>S190T</td>
                                <td>C195E</td>
                                <td>C171E</td>
                                <td>Y204H</td>
                                <td>-120.5737</td>
                                </tr>
                                <tr>
                                <td>S190T</td>
                                <td>C195F</td>
                                <td>C171F</td>
                                <td>Y204H</td>
                                <td>-105.4843</td>
                                </tr>
                                <tr>
                                <td>S190T</td>
                                <td>C195Y</td>
                                <td>C171Y</td>
                                <td>Y204H</td>
                                <td>-112.5343</td>
                                </tr>
                                <tr>
                                <td>S190T</td>
                                <td>C195D</td>
                                <td>C171D</td>
                                <td>Y204H</td>
                                <td>-115.1761</td>
                                </tr>
                                <tr>
                                <td>S190A</td>
                                <td>C195D</td>
                                <td>Y204H</td>
                                <td></td>
                                <td>-119.752</td>
                                </tr>
                                <tr>
                                <td>S190A</td>
                                <td>C195E</td>
                                <td>Y204H</td>
                                <td></td>
                                <td>-94.7425</td>
                                </tr>
                                <tr>
                                <td>S190A</td>
                                <td>C195F</td>
                                <td>Y204H</td>
                                <td></td>
                                <td>-126.5064</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className={overallStyles.description}>
                        <p>From the table, we can see that eight out of fifteen of our proposed mutations had higher total interaction energies than the original 1UTM, indicating that these proteins have a higher affinity to PEA than the original. The candidate S190A C195F Y204H had the total interaction energy with the greatest magnitude (126.5064 kJ/mol), which corresponds to it having the highest relative binding affinity to PEA. It was closely followed by the candidate Y204F C195D S190T with a total interaction energy of magnitude 125.7208 kJ/mol. This candidate also tied for the best score based on the Rosetta analysis and the second best based on AutoDock analysis, so based on all three analyses, it is likely a good option for our NeuroDetech chip.</p>

                        <p>The final MD simulation in GROMACS was run for 10 hours per protein candidate. In the future, we would like to run this simulation for multiple days to produce more accurate results. Additionally, we would like to test the candidate proteins in the lab to confirm these molecular dynamics results before building our chip.</p>
                    </div>
                </Collapsible>
                <Collapsible open title="Learn">
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Improved Proteins</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Based on Rosetta scores and AutoDock scores, the improved protein for streptavidin consisted of the 3 mutations, T74C, N12A, Y52F. This improved protein constitutes the new BioBrick Part <a href="http://parts.igem.org/Part:BBa_K3843005">BBa_K3843005</a>. The 3D structure of the improved streptavidin, visualized using UCSF Chimera, is as follows, where monomeric streptavidin is in blue, and biotin is in green.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/a/a4/T--Waterloo--mSA2%2B.png" className={styles.design_img}></img>
                    </div>
                    <div className={overallStyles.description}>
                        <p>The improved protein for 1UTM based on Rosetta scores, AutoDock scores, and GROMACS analysis also contains 3 mutations, which are Y204F, C195D, S190T. This improved protein constitutes the new BioBrick Part <a href="http://parts.igem.org/Part:BBa_K3843001">BBa_K3843001</a>. The 3D structure of the improved 1UTM, visualized using UCSF Chimera, is as follows, where 1UTM is in orange, and PEA is in green.</p>
                    </div>
                    <div className={overallStyles.figure_div} style={{marginBottom: 20}}>
                        <img src="https://2021.igem.org/wiki/images/6/69/T--Waterloo--1UTM%2B.png" className={styles.design_img}></img>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Discussion</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>One advantage of the rational design approach is that it can be specifically focused on optimizing the binding affinity of the protein. While Rosetta scores allow one to filter out candidates that are unacceptable based on overall molecular stability, the scores do not serve as proof that the binding itself has been improved.</p>

                        <p>However, the trial and error nature of the process means that rational design is more time-consuming than using Rosetta to generate all possible mutations for individual residues. Moreover, the basic process of rational protein design does not account for everything. Repulsive forces, for instance, may not be observed until the mutated protein is either docked or tested for stability in Rosetta.</p>

                        <p>The energy scores from AutoDock Vina revealed that the most stable mutant protein for Streptavidin was observed when Threonine was mutated to Cysteine on residue 74, coupled with Asparagine to Alanine on residue 12, and Tyrosine to Phenylalanine on residue 52. Similarly, mutations from Threonine to Cysteine on residue 74, coupled with Asparagine to Alanine on residue 12, Asparagine to Alanine on residue 34, and Alanine to Cysteine on residue 36 yielded the same energy score of -7.4 kcal/mole. Meanwhile, the lowest scoring mutations for trypsin occurred when the Cysteine on residue 171 was switched to either Phenylalanine, Glutamine, Glutamic Acid, Arginine, Serine, Aspartic Acid, Tryptophan, Alanine, Valine, Threonine, Asparagine, Leucine, Methionine, or Isoleucine. This may suggest that residue 171 in its native structure as a Cysteine is very unstable, as all these mutations on residue 171 led to an energy score of -4.9 kcal/mole, 0.3 kcal/mole lower than the wild type.</p>

                        <p>AutoDock Vina provides a quick and facile method for automating the docking process for a specified protein-ligand pair. Compared to the manual method, using an automated method reduces time by over 50-fold. This method is able to both write new summary files and increase accessibility for future analysis through multiple levels of organization. With this in mind, this method is prone to error in cases where the docking occurs in an undesired binding pocket. However, through careful design and selection of a protein, to target high selectivity and specificity, this can be overlooked. For this reason, AutoDock Vina presents itself as a suitable software for protein-ligand docking simulations.</p>

                        <p>Compared to using the AutoDock vina executable in a command line, the integration within Chimera is able to perform all the same functionalities. This includes defining volumetric boxes for docking searches, selection of a number of binding modes to generate, hydration, and structure editing prior to docking. The flexibility in selection of operating parameters provided by both the native and integrated AutoDock Vina within Chimera was advantageous for our application of ligand docking both for Trypsin and Streptavidin, enabling us to allocate our time to complete higher priority tasks.</p>
                    </div>
                </Collapsible>
            </div>
        )
    }
}

export default ProteinOptimization;