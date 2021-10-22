import React, { Component } from 'react';
import styles from './proteinoptimization.module.scss';
import overallStyles from "../overall.module.scss";
import Collapsible from '../../utils/Collapsible';
import { Table } from 'react-bootstrap';

class ProteinOptimization extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>Protein Optimization Modelling</div>
                <div className={overallStyles.description}>
                    The selected proteins to be optimized, trypsin and monomeric streptavidin, are modelled and analyzed using software such as Rosetta, Chimera and Autodock. In the end, proteins with improved stability and affinity are designed. 
                </div>
                <Collapsible open title="Rosetta: Protein Mutations">
                    <div className={overallStyles.text_div}>
                        <div className={overallStyles.description}>
                            Rosetta is a software tool that was primarily designed to predict structures of proteins. It now has many other applications such as determining macromolecular interactions, molecular docking and protein design (Kaufmann et. al., 2010).
                        </div>
                        <div className={overallStyles.description}>
                            Specifically for this project we utilize a protocol, which is a combination of algorithms, called Point Mutant Scan (pmut_scan_parallel) which allows us to input the original protein data bank (PDB) file that contains the sequence of amino acids of the entire protein, and the protocol will output PDBs with all possible combinations of single mutations.
                        </div>
                        <div className={overallStyles.description}>
                            The algorithm that Rosetta uses is, once given the original PDB file, it generates a list of every possible mutation of all residues in the protein. The algorithm does this by swapping out the existing amino acid at that residue and replacing it with all other available amino acids. It then makes the mutation and predicts the structure of the newly mutated protein (Rosetta Commons, n.d.). The way that Rosetta is able to predict the structure of the protein is by taking small parts of the protein that is known to create the structure that is most similar to how the protein behaves in nature using the Monte Carlo approach (Rohl et. al., 2004). The Monte Carlo method in brief is the process of sampling a multitude of random combinations, and taking the average of those combinations to form a prediction of the outcome (Zhang et. al., 1992).
                        </div>
                        <div className={overallStyles.description}>
                            The outcome of running this protocol is a list of new PDB files, which are then passed onto a scoring protocol. The way that Rosetta determines a score for each mutated protein is by using a weighted average of different energies that it calculates, such as repulsive, attractive and hydrogen bond energies. The lower the Rosetta score, the more stable the protein is, thus the goal is to design the protein to have a lower score compared to the original protein.
                        </div>
                        <div className={overallStyles.subheading} style={{marginLeft: "5%"}}>
                            Workflow for Mutating Proteins
                        </div>
                        <ol className={overallStyles.description}>
                            <li>
                                Obtain the 1UTM PDB file from the protein data bank.                            </li>
                            <li>
                                Run a python script to “clean” the PDB file. This removes all the headers and descriptions from the PDB file and leaves it with only the amino acids and the ligand.
                            </li>
                            <li>
                                Use Rosetta’s Point Mutant Scan protocol to generate all the possible single mutations for 1UTM.
                            </li>
                            <li>
                                Score each new mutated protein using Rosetta’s scoring protocol to quantify the mutation and perform further analysis and verification.
                            </li>
                        </ol>
                        <div className={overallStyles.description}>
                            Since the point mutant scan protocol and the scoring protocol employ the Monte Carlo method, a high performance computer was used to be able to support the computational power that is needed to generate all the random combinations. We used the Graham cluster from Compute Canada to utilize the Rosetta Software.
                        </div>
                    </div>
                </Collapsible>
                <Collapsible open title="Improvement of Trypsin Protein">
                    <div className={styles.text_div}>
                        <div className={overallStyles.subheading} style={{marginLeft: "5%"}}>
                            Results: Trypsin Single Mutation
                        </div>
                        <div className={overallStyles.description}>
                            There were a total of 4143 single mutations made from using Rosetta’s Point Mutant Scan protocol. Listed below are the top 50 lowest scoring single mutations. The original score for the un-mutated 1UTM with PEA was -322.402 REU.
                        </div>
                        <div className={overallStyles.description}>
                            Top 10 Rosetta Scores for 1UTM single mutations and the original protein score are listed in the table below. Please check the full top 50 scores on the spreadsheet&nbsp;
                            <a className={overallStyles.text_link} href="https://docs.google.com/spreadsheets/u/1/d/1r_Wf-dGtYojBKM7i1tRiwdZFUIioxGey/edit" target="_blank" rel="noreferrer">
                             here
                            </a>
                            . For this and all following score tables, the mutations are written in the format “Original Amino Acid|Residue Number|New Amino Acid”.
                        </div>
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
                    <div className={styles.text_div}>
                        <div className={overallStyles.description}>
                            However, our main goal for our newly designed protein is to increase its ability to bind to the analyte which is PEA. Therefore we must look at the mutations made near the binding pocket residues. Those residues are 169, 170, 171, 172, 175, 189, 190, 191,192,194, 195, 202, 203, and 204. These mutations should have a stronger impact on 1UTM’s binding affinity with PEA, thus being analyzed in more detail. The mutations that are considered for each residue are listed in the spreadsheet&nbsp; 
                            <a className={overallStyles.text_link} href="https://docs.google.com/spreadsheets/u/1/d/1r_Wf-dGtYojBKM7i1tRiwdZFUIioxGey/edit" target="_blank" rel="noreferrer">
                             here
                            </a>
                            .
                        </div>
                        <div className={overallStyles.subheading} style={{marginLeft: "5%"}}>
                            Single Mutation Result Interpretation
                        </div>
                        <div className={overallStyles.description}>
                            Double mutations for the binding residues were proposed using a combination of rational design and simply evaluating the Rosetta scores of the single mutations for stability. The characteristics of PEA were considered with those of an individual residue in order to make suggestions.
                        </div>
                        <div className={overallStyles.description}>
                            The criteria for rational design-proposed mutations depended on the properties of the original amino acid as well as those of the ligand. PEA is positively charged (EMBL-EBI, 2021), thus we proposed changing positively-charged, neutral, or non-polar residues such as serine, cysteine, glutamine, (Merck KGaA, 2021) , and glycine (PubChem Identifier: CID 750, 2021), to negatively-charged amino acids such as aspartic acid and glutamic acid to better accommodate the ligand (Foulquier, 2020). Phenylalanine and Tyrosine, which both possess aromatic side chains, were suggested as changes for any amino acid in the binding pocket, in particular Valine, which possesses an aliphatic side chain (PubChem Identifier: CID 6287, 2021), (Merck KGaA, 2021). These changes were proposed to hopefully result in pi-pi stacking between 1UTM and PEA’s aromatic ring. (Hardinger, 2017a). Trp, which also has an aromatic side chain, was not tested in these circumstances due to its bulkier structure, which could result in increased steric interference (Hardinger, 2017b). As such, when it appeared on the unmodified version of 1UTM, a change from Tryptophan to Phenylalanine or Tyrosine was suggested.
                        </div>
                        <div className={overallStyles.description}>
                            A comparison of the original 1UTM protein and the mutation of residue 170 from serine to Aspartic acid was visualized in Chimera, as seen in the images below. The original protein is brown, while the mutated protein is blue. Residue 170 is seen enclosed in the red circle on both images.
                        </div>
                        <div className={overallStyles.figure_div}>
                            <img src="https://2021.igem.org/wiki/images/1/19/T--Waterloo--1UTM_mutation_overlap_1b.png" alt="1UTM Mutation Overlap 1b" className={styles.mutation_img}/>
                            <div className={overallStyles.figure_text}>
                                1UTM Original 170 Residue
                            </div>
                        </div>
                        <div className={overallStyles.figure_div}>
                            <img src="https://2021.igem.org/wiki/images/0/09/T--Waterloo--1UTM_mutation_overlap_2.png" alt="1UTM Mutation Overlap 2" className={styles.mutation_img}/>
                            <div className={overallStyles.figure_text}>
                                1UTM Mutated 170 Residue 
                            </div>
                        </div>
                        <div className={overallStyles.description}>
                            Next, we checked the Rosetta scores for these biochemically chosen single mutations to ensure they were reasonably stable. If a mutation received a score of -300 or lower it was considered for double mutations, otherwise, it was discarded. A maximum of four mutations per residue was passed to Rosetta to synthesize double mutations. When four candidates were passed on, the top two Rosetta scores and two best-scoring rational design candidates were selected, if all four were distinct from each other. If there were less than two suitable rational design candidates, the top three Rosetta-scoring mutations were submitted for double mutations. These groups of top three scorers were accompanied by a rational design candidate if a suitable one was present.
                        </div>
                        <div className={overallStyles.subheading} style={{marginLeft: "5%"}}>
                            Results: Double Mutations with Rosetta 
                        </div>
                        <div className={overallStyles.description}>
                            In order to generate the double mutations, we used the same Rosetta protocol, however this time we defined a list of all the double mutations that we want to make. The outcome of this is a PDB file for each double mutation that was passed into the protocol.
                        </div>
                        <div className={overallStyles.description}>
                            A heat map was then generated to allow us to visually see which double mutation combination gave us the lowest scoring protein.
                        </div>
                        <div className={overallStyles.figure_div}>
                            <img src="https://2021.igem.org/wiki/images/e/ea/T--Waterloo--1UTM_double_heatmap.png" alt="1UTM Double Mutations Heatmap" className={styles.mutation_img}/>
                            <div className={overallStyles.figure_text}>
                                Heat Map of 1UTM Double Mutations
                            </div>
                        </div>
                        <div className={overallStyles.description}>
                            From the heat map above, we picked out the strongest (lowest scoring) double mutations and combined them with other double mutations that also performed well but not the strongest. This led to a total of 56 triple and quadruple mutations that were made on 1UTM, using the same Point Mutant Scan protocol used for the single and double mutations. We again defined the triple and quadruple mutations that were selected and the output is a PDB file for each mutation made.
                        </div>
                        <div className={overallStyles.subheading} style={{marginLeft: "5%"}}>
                            Results: Trypsin Multiple Mutations
                        </div>
                        <div className={overallStyles.description}>
                            The top 15 1UTM multi-mutations will be further considered and analyzed using other tools like Auto-dock Vina and Gromacs. However, the best scoring designed protein based on Rosetta scores is a tie between four triple mutations, which are
                        </div>
                        <ol className={overallStyles.description}>
                            <li>
                                Y204F C195D S190T
                            </li>
                            <li>
                                Y204F C195E S190T
                            </li>
                            <li>
                                Y204F C195F S190T
                            </li>
                            <li>
                                Y204F C195Y S190T
                            </li>
                        </ol>
                        <div className={overallStyles.description}>
                            They all have a score of -368.553 REU. 
                        </div>
                        <div className={overallStyles.description}>
                            Top 15 1UTM Multi-Mutations are listed in the table below. Full tables of modified 1UTM scores are also uploaded&nbsp; 
                            <a className={overallStyles.text_link} href="https://docs.google.com/spreadsheets/u/1/d/1r_Wf-dGtYojBKM7i1tRiwdZFUIioxGey/edit" target="_blank" rel="noreferrer">
                             here
                            </a>
                            .
                        </div>
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
                </Collapsible>
                <Collapsible open title="Improvement of Monomeric Streptavidin">
                    <div className={styles.text_div}>
                        <div className={overallStyles.description}>
                            Monomeric streptavidin section of the binding molecule binds to biotin when it reaches the control chamber. For streptavidin, the same workflow as 1UTM was used to design this protein. First we auto-generated a list of all possible single mutations using Rosetta.
                        </div>
                        <div className={overallStyles.subheading} style={{marginLeft: "5%"}}>
                            Results: Monomeric Streptavidin Single Mutation   
                        </div>
                        <div className={overallStyles.description}>
                            The top 10 lowest scoring proteins are given in the following table. The original score for un-mutated streptavidin with biotin was -104.826 REU. Full top 50 mutations are recorded&nbsp;
                            <a className={overallStyles.text_link} href="https://docs.google.com/spreadsheets/u/1/d/1SgsB72_eUh2hm3cXvlslBUDv0N5JtfM7/edit" target="_blank" rel="noreferrer">
                             here
                            </a>
                            .
                        </div>
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
                    <div className={styles.text_div}>
                        <div className={overallStyles.description}>
                            We also took a closer look at the binding pocket residues for streptavidin which are residues 12, 16, 32, 34, 36, 72, 74 and 92. The mutations that scored higher than the original protein for each binding pocket residue are further analyzed and recorded&nbsp;
                            <a className={overallStyles.text_link} href="https://docs.google.com/spreadsheets/u/1/d/1SgsB72_eUh2hm3cXvlslBUDv0N5JtfM7/edit" target="_blank" rel="noreferrer">
                             here
                            </a>
                            .
                        </div>
                        <div className={overallStyles.description}>
                            Then double mutations were chosen based on the Rosetta scores similar to the process used for 1UTM. Those double mutations were passed into Rosetta and a heat map was generated for Streptavidin as well.
                        </div>
                    </div>
                        <div className={overallStyles.figure_div}>
                            <img src="https://2021.igem.org/wiki/images/4/40/T--Waterloo--strep-heatmap.png" alt="Strep Heatmap" className={styles.mutation_img}/>
                            <div className={overallStyles.figure_text}>
                                Heat Map of Monomeric Streptavidin Double Mutations                            
                            </div>
                        </div>
                    <div className={styles.text_div}>
                        <div className={overallStyles.description}>
                            From the heat map, the strongest double mutations were chosen and then combined with other less strong mutations as well as a few of the top 50 single mutations to generate triple and quadruple mutations. This list was also passed into Rosetta to generate the PDB files and scores. The scores for the 12 suggested triple, quadruple, quintuple and sixtuple mutations for streptavidin are listed below.
                        </div>
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
                    <div className={styles.text_div}>
                        <div className={overallStyles.description}>
                            Based on Rosetta scores, the best designed protein consisted of the mutations, T74C, N12A, Y52F.
                        </div>
                    </div>
                </Collapsible>
                <Collapsible open title="Docking Analysis with AutoDock Vina and Chimera">
                    <div className={styles.text_div}>
                        <div className={overallStyles.description}>
                            To test that the modified proteins from Rosetta protocols do have a higher binding energy with the ligand, docking analysis and binding energies are calculated for the top mutated proteins produced in the Build section. Autodock Vina is a program for performing molecular docking simulations using input receptor-ligand pairs. Performing ligand docking by AutoDock Vina results in the generation of multiple PDBQT files containing the coordinates in space for the docked protein complex. These PDBQT files can further be loaded into the previously mentioned UCSF Chimera for verification of binding in the desired pocket. Compared to its original counterpart, AutoDock Vina is 59% more accurate than AutoDock 4 in yielding binding mode predictions with an RMSD less than 2. Similarly, AutoDock Vina is nearly 450, and 65 times faster than AutoDock 4, running on an 8-, and 1- core CPU, respectively. Conveniently, the functionalities of AutoDock Vina are integrated into the Chimera GUI and can also be run using Chimera Scripts, so long as you have downloaded the AutoDock Vina executable on your local device. Previously, docking simulations were run manually using this functionality in Chimera by selecting a volumetric box for the binding pocket, setting the appropriate binding mode parameters, and running the docking one protein at a time. To circumvent the issue of long process times using this manual method, an automated method using Chimera’s support for Python scripts was implemented.
                        </div>
                        <div className={overallStyles.description}>
                            The Python script serves several purposes including, opening the mutated protein output from Rosetta, deleting the ligand from the complex, adding the native ligand file to the environment, and performing ligand docking, saving only the docking coordinate of the highest scoring conformer. These scores were then copied and written to a master energy score text file automatically and saved. Both singly- and doubly- mutated proteins generated by Rosetta were used for docking. The doubly mutated proteins combined mutations from both the binding pocket and a non-binding region in efforts to decrease the energy score of the overall structure for enhanced stability. Implementation of this process revealed that singly mutated trypsin-PEA complexed proteins outperformed doubly-mutated trypsin-PEA protein complexes on average. To illustrate this, the following distributions were observed for singly- vs doubly- mutated trypsin proteins. As you can see, the maximum energy score for doubly mutated proteins was -4.8 kcal/mole, while an energy score of -4.9 kcal/mole was frequently seen in singly-mutated proteins. From these preliminary energy score results we can deduce that double mutations on the complex did not have any effect on decreasing its energy score, and thus stability was not affected. To further confirm this a secondary energy analysis should be performed using the score_jd2 protocol in Rosetta or structure scoring in GROMACS.
                        </div>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div className={overallStyles.figure_text}>
                            1UTM-PEA Docking Scores
                        </div>
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
                    <div className={styles.text_div}>
                        <div className={overallStyles.description}>
                            <p>A similar energy conformer analysis using the above-mentioned automated approach using a Python script was implemented for mutation candidates generated by Rosetta on the monomeric streptavidin-biotin complex. The lowest scoring multi-mutant streptavidin proteins yielded an energy score of -7.4 kcal/mole.</p>
                        </div>
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
                    </Collapsible>
                </div>
            </div>
        )
    }
}

export default ProteinOptimization;