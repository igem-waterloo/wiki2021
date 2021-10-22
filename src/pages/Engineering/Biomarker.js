import React, {Component} from 'react';
import styles from './biomarker.module.scss';
import overallStyles from '../overall.module.scss';
import Collapsible from '../../utils/Collapsible';

class Biomarker extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div} style={{marginBottom: 40}}>
                    <span className={overallStyles.text_heading}>Biomarker Detection: Fusion Protein Design</span>
                </div>
                <Collapsible open title="Design">
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>The Big Picture</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>When initially considering how to approach developing an ADHD diagnosis tool that was noninvasive, we decided that detection of a urinary ADHD-associated biomarker would be viable for our purposes. From here, we needed to explore the literature to answer the following questions:</p>
                        
                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>What urinary ADHD-associated biomarker should we choose to detect?</li>
                            <li>What binding molecule should we use to bind/detect our chosen ADHD-associated biomarker? What considerations are there for the design of our chosen binding molecule?</li>
                            <li>How would we design our binding molecule to produce a signal in response to detection of the ADHD-associated biomarker?</li>
                        </ul>
                        </p>

                        <p>In this Design section, our considerations and answers to these “big picture questions” will be discussed</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Selection of a Target ADHD-Associated Biomarker</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Selection of an optimal ADHD biomarker hinged on the following key characteristics:</p>
                        
                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>The biomarker should be collected via a non-invasive sample (e.g. urine, sweat, saliva).</li>
                            <li>It should be present in an appreciable quantity in the sample.</li>
                            <li>It should have well-defined numerical values of statistical data present in literature.</li>
                            <li>It should have a discernible diagnostic window relative to healthy individuals.</li>
                        </ul>
                        </p>

                        <p>While several sources report a link between ADHD and impaired regulation of brain catecholamines, quantifying these catecholamines in a non-invasive manner would be challenging for a number of reasons (Pliszka et al. 1996; Biederman 2005; Oades et al. 2005). Due to their rapid metabolism and trace levels in biological samples, analytes such as norepinephrine or dopamine would not be strong candidates to measure (Feres et al., 2014). Therefore, it was more feasible to investigate precursors or derivatives of norepinephrine or dopamine as markers of their imbalance rather than measuring the catecholamine concentrations themselves.</p>

                        <p>Various biomarkers that showed evidence of imbalances of the noradrenergic or dopaminergic systems were mostly found in blood, requiring a more invasive collection method and thus less ideal for an affordable point of care diagnostic tool. Additional biomarker candidates were excluded from consideration due to insufficient evidence supporting a specific linkage to ADHD as opposed to other behavioural disorders. These eliminated analytes included neuropeptide Y, homovanillic acid (HVA), monoamine oxidase, 3-methoxy-4-hydroxyphenylglycol (MHPG) and 5-hydroxyindoleacetic acid (5-HIAA) (Faraone et al., 2014; Gerra et al., 2007; Jayamohananan et al., 2019).</p>

                        <p>Scassellati et al., (2012) published an extensive review of promising biomarkers of ADHD to be used in diagnostics. One such marker was phenylethylamine (PEA), a stimulant for the release of dopamine. Meta-analysis of PEA-ADHD data reports significantly lower urinary PEA levels in ADHD patients versus controls based on three unique studies (Baker et al., 1991; Kusaga et al., 2002; Zametkin et al., 1984). One such study also showed evidence of lowered PEA levels being associated with symptoms of inattentiveness (Baker et al., 1991). Kusaga et al., (2002) investigated PEA alongside MHPG, HVA and 5-HIAA, comparing against individuals with an autistic disorder as a disease control. PEA was the only tested analyte in the study that showed significant differences relative to negative and disease controls.</p>

                        <p>Given the consistent literature support of PEA as a viable marker linked to ADHD, readily available data and quantifiable numbers, and its presence in a relatively non-invasive biological sample, it was determined to be the strongest candidate to use as a biomarker in our detection device.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading}>Human Physiology of PEA</span>
                        </div>

                        <p>PEA is a small molecule most known for its role as a neurotransmitter implicated in psychological disorders such as ADHD, depression, and schizophrenia (Irsfeld, Spadafore & Pruess, 2014). PEA is most commonly found as a trace amine in the brain of mammals, justified by its high solubility within plasma and permeability across the blood-brain barrier. In this context, it mainly functions as an inhibitor of dopamine and serotonin transporters by binding to the TAAR1 protein. As a result, PEA supplements are commonly administered as antidepressants (Sabelli, Fink, Fawcett & Tom, 1996).</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Selection of a PEA-Binding Molecule</span>
                    </div>
                    <div className={overallStyles.description}>
                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading}>Consideration of Aptamers for PEA-Binding</span>
                        </div>

                        <p>Aptamers are single-stranded oligonucleotides or oligopeptides that bind to target molecules, and are generally between 20 and 60 units in length (Keefe et al., 2010). For aptamers consisting of nucleotides, both DNA and RNA sequences can be used. RNA aptamers offer greater structural diversity and thus more flexibility in terms of potential targets, but simultaneously suffer from lower stability, especially under high temperatures and alkaline conditions (Thiel & Giangrande, 2009). Aptamers can be found naturally in the form of riboswitches, but are more commonly engineered for a specific target. The relatively simple design and engineering process geared towards a wide range of analytes, including proteins, antibiotics, organophosphates and various low molecular weight compounds (Ilgu & Nilsen-Hamilton, 2016), has made aptamers a popular choice for molecular biologists.</p>

                        <p>In terms of the procedure for aptamer engineering, SELEX (Systematic Evolution of Ligands by EXponential enrichment) is an iterative method for selecting the aptamers with optimal binding to the analyte. The process starts with a randomized library of nucleotide sequences, otherwise known as the initial oligonucleotide pool, which is flanked by primer regions (Zhuo et al., 2017). This then allows for amplification via PCR (for DNA) or reverse transcription-PCR (for RNA) to build up a synthetic library, which is incubated with the target molecule. Next, a selection round is performed by separating the target-bound sequences from unbound sequences (Zhuo et al., 2017), followed by amplification of the former via PCR (for DNA) or reverse transcription-PCR (for RNA). This new enriched library pool is then used for the next screening round, and the process is repeated while steadily increasing the stringency of the selection process until only a select few high-affinity aptamers are left. This generally takes around 5-15 rounds (Zhuo et al., 2017). The high-affinity aptamers are then analyzed in detail for optimal design.</p>
                        
                        <p>The key design aspect of aptamers centers on the stem-loop/hairpin folding structure (Sabri et al., 2020), which is the functional part of the aptamer that specifically binds to the target molecules. As such, computational methods have been developed to aid with the modelling of aptamer structures from primary sequences specifically by first predicting the secondary stem-loop structure (Hu et al., 2021), which can be carried out by various classes of computational software based on their underlying logic. Commonly used tools include RNAfold and Mfold (currently amalgamated into UNAfold), which are based on minimizing the free energy; CentroidFold, which is based on multiple sequence alignment; Vfold, which makes use of RNA motif-based loop entropies, and RNAstructure, which has several complicated underlying structure prediction methods, including maximum expected accuracy, stochastic sampling, exhaustive traceback and pseudoknot prediction. Next, the equivalent tertiary RNA structure is synthesized using generally fragment-based computational methods, such as RNAComposer, 3dRNA, Vfold3D or simRNA, which generally involve dividing the input secondary structure into fragments, including the helices and loops, then assembling the corresponding 3D templates, and finally applying energy minimization to the overall structure. The developed computational tools mainly focus on RNA structure modelling, and so if necessary, the output can be converted it back into the corresponding DNA structure by directly replacing uracil residues with thymine in the RNA structure .pdb file in PyMOL and fixing the distance of each H atom with the “fix hydrogen” mode. For evaluating the strength of binding to the target, various docking tools may be used, including Autodock, ZDOCK, HADDOCK, PatchDock or MolSoft, followed by molecular dynamics simulations and binding affinity estimations in AMBER or VMD.</p>

                        <p>A variant on aptamers is the molecular beacon, which is a cDNA hairpin structure with a fluorophore at one end and a quencher at the other end, with the quencher stopping the fluorophore from creating a signal in its natural state (Tyagi & Kramer, 2012). However, in the presence of the analyte, the stem and loop will open to bind to the analyte, and the quencher is no longer able to quench the fluorophore, so the fluorophore creates a fluorescent signal. Molecular beacons generally consist of 15-30 base pairs in the loop region for binding to the target analyte, which can be nucleic acid sequences, toxins, proteins, and so on, as well as 4-6 base pairs at the double stranded stem (Tyagi & Kramer, 2012). Their high specificity and selectivity in binding has enabled a wide range of functionality in messenger RNA detection, intercellular imaging, protein and small molecule analysis, biosensors, biochip development, single nucleotide polymorphism and gene expression studies. Due to the similarity in structure, the process of engineering molecular beacons is practically identical to that of aptamers.</p>

                        <p>Despite how well-developed and widely-applied the SELEX method is, it depends rather heavily on lab work. The outlined <em>in silico</em> selection of aptamers cannot act as a full replacement for the <em>in vitro</em> process, given that computational methods only provide theoretical structures and binding affinities that may not approximate the true values even remotely. Any mathematical model has its exceptions and inaccuracies, and thus in general, <em>in silico</em> work is done to narrow down the possible sequences for the SELEX method from a large starting pool. For instance, Chushak and Stone proposed a method that takes around 2.5 x 10<sup>8</sup> sequences and selects 10<sup>3</sup> to 10<sup>4</sup> of them with potentially high binding affinity to the target molecule, and these selected sequences are then passed along for further screening in the lab (Chushak & Stone, 2009).</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading}>Decision to Pursue a Protein-Based Detection Method</span>
                        </div>

                        <p>Unfortunately, given our complete lack of lab access due to the COVID-19 situation, in addition to our aversion for proposing an aptamer part based on purely computational structure modelling and binding affinity evaluations, we ultimately decided against aptamer design in favour of engineering existing proteins. Even so, we have documented our aptamer research in summary here in the hopes that it may be of use to any future projects considering aptamers as a potential solution.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Overview of PEA-Binding Fusion Protein Design</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>As mentioned, we decided to pursue a protein-based detection method. Specifically, in order to facilitate both detection of PEA as well as signal production, we decided to design a fusion protein to be the PEA-binding molecule. One domain of the fusion protein would consist of a PEA-binding protein domain, while the other domain of the fusion protein would consist of a chemiluminescent enzyme, which could react with a chemiluminescent substrate to produce a signal. PEA would be conjugated to the test chamber of the microfluidic assay (using the small molecule conjugation method discussed in the Design section of the Chip Design engineering cycle). This effectively allows for quantification of the amount of urinary PEA by quantification of the number of binding molecules that bind to the PEA in the test chamber. As well, in order to facilitate a signal at the control chamber, the fusion protein would also be biotinylated; by conjugating streptavidin to the control chamber, fusion proteins could be “caught” at the control chamber, thereby producing a signal.</p>
                        
                        <p>Overall, the flow of events of the microfluidic assay chip (with respect to PEA detection) would be as follows:</p>

                        <p>
                        <ol className={overallStyles.description} style={{marginTop: 0}}>
                            <li>After applying the urine sample to the microfluidic assay chip, the fusion protein binds to any PEA in the sample.</li>
                            <li>Then, the sample travels to the test chamber, where any fusion proteins with open binding sites will bind to the PEA conjugated to the test chamber.</li>
                            <li>Any other fusion proteins will travel to the control chamber; since they are biotinylated, they will be bound by the streptavidin conjugated to the control chamber.</li>
                            <li>Then, the chemiluminescent substrate is released to the test and control chambers, allowing a signal to be produced in each chamber.</li>
                        </ol>
                        </p>

                        <p>In the test chamber, the higher the signal, the lower the amount of PEA in the urine sample, which would correspond to a higher risk of ADHD.</p>

                        <p>With the above in mind, the design of the microfluidic assay for the detection of biomarkers (such as PEA) would be as follows:</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/5/52/T--Waterloo--MCFAoverviewPEA.png" alt="MCFA overview PEA" className={styles.design_img} style={{borderRadius: 20, marginLeft: '5%'}}></img>
                        <div className={overallStyles.figure_text}>Diagram of the microfluidic assay designed to detect urinary biomarkers (i.e. PEA).</div>
                    </div>
                    <div className={overallStyles.description}>
                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading}>Selection of a PEA-Binding Protein Domain</span>
                        </div>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={styles.sub_sub_heading}>Criteria for a Protein Domain Suitable for Use in a Fusion Protein</span>
                        </div>

                        <p>To ensure that the diagnostic test is as accurate as possible, the protein must have a high binding affinity for PEA in urine, and preferably only PEA, considering the array of constituents typically present in urine (Boulton & Milward, 1971). Selecting a monomeric protein that is not naturally localized within the cell membrane is also preferable to ensure proper folding of the selected domain as part of a fusion protein, as well as proper binding of PEA when incorporated into the fusion protein (Urbina et al., 2019). It was also necessary to ensure that the protein folding of the selected domain would not be altered if folding were to occur as part of the formation of a recombinant protein. Candidates that demonstrated an inability to bind without the presence of multiple subunits were excluded, as they were unlikely to be stable and functional in the aqueous environment of our assay. Integral membrane proteins were similarly excluded as their conformational state is dependent on the preservation of a membrane-embedded hydrophobic region, incompatible with our assay’s aqueous format (Marinko et al., 2019).</p>

                        <p>The sequence of the protein must be known to enable the use of engineering tools for development, testing, and validation, namely 3D modelling, docking, and dynamics simulations. The protein must also be stable in the environment where binding is expected to take place; specifically, the protein must demonstrate stability under conditions similar to human urine. In addition, not only is the stability of the protein important, but it also must be uninhibited by the conditions of urine. That is, in order to be considered viable for use in processing urine samples, it had to be demonstrated that the pH, temperature, and salinity of standard human urine would not interfere with normal functionality of the binding domain. Finally, the catalytic activity of the protein must be removed without compromising the protein’s ability to bind to its substrate.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={styles.sub_sub_heading}>PEA-Binding Protein Candidates</span>
                        </div>

                        <p>Proteins that were considered for their reported interaction with PEA included VMAT2, FeaR, TAAR1, TAAR4, TynA, and 1UTM (Eiden & Weihe, 2011; Lindemann et al., 2005; Murakawa et al., 2015; Zeng & Spiro, 2013; Zucchi et al., 2006). Using the criteria outlined above, the following proteins were ruled out:</p>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>VMAT2 is non-specific to PEA, and binds a multitude of urinary biogenic amines (Eiden & Weihe, 2011).</li>
                            <li>FeaR is a transcription factor regulating PEA levels but does not bind PEA itself, making it unsuitable for PEA quantification ( Lindemann et al., 2005).</li>
                            <li>TAAR1 and TAAR4 are transmembrane G protein coupled receptors (GPCRs) that are very unlikely to be stable in an aqueous diagnostic context and are thus inadmissible (Murakawa et al., 2015; Zeng & Spiro, 2013).</li>
                            <li>TynA is a dimer, and its stability and ability to bind PEA in a fusion protein was uncertain (Zucchi et al., 2006).</li>
                        </ul>
                        </p>

                        <p>From this assessment of the protein candidates, the most optimal PEA-binding protein for use in our microfluidic assay was selected as 1UTM, a monomeric trypsin derived from <em>Salmo salar</em>, with a dissociation constant (Kd) of 0.000972 (RCSB PDB, n.d.).</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/f/fe/T--Waterloo--1UTM.png" alt="3D structure of 1UTM" className={styles.design_img} style={{borderRadius: 20, marginLeft: '5%'}}></img>
                        <div className={overallStyles.figure_text}>The 3D structure of 1UTM, as visualized using UCSF Chimera, is as follows, where 1UTM is orange and PEA is green.</div>
                    </div>
                    <div className={overallStyles.description}>
                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading}>Selection of a Chemiluminescent Enzyme Domain</span>
                        </div>

                        <p>The method of detection selected for quantification of the marker analyte PEA in urine was based on the chemiluminescence produced by the interaction of horseradish peroxidase (HRP) and Amplex Red. HRP is a commonly used enzyme to catalyze chemiluminescent reactions, with multiple candidate substrates such as Luminol, Acridan or Amplex Red (Ghosh et al., 2020; Heo et al., 2021; Osman et al., 2000). Compared to other prevalent enzymes utilized in chemiluminescence detection, such as alkaline phosphatase, horseradish peroxidase was a smaller protein candidate (44 kDa), reported to be stable in neutral pH, and when directly evaluated against alkaline phosphatase, exhibited greater detection sensitivity (Beyzavi et al., 19987; Chattopadhyay et al., 2000). There are multiple examples of HRP specifically being used for measuring analyte concentrations in urine samples, suggesting this to be a reliable method of detection for our purposes (Chang et al., 2017; Eamudomkarn et al., 2018).</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading}>Selection of a Chemiluminescent Substrate for HRP</span>
                        </div>

                        <p>Several chemiluminescent substrates for HRP were considered, including Acridan, a compound that emits light when oxidized in the presence of HRP (Roda, 2011). Unfortunately, there was insufficient data on the chemiluminescent properties of pure Acridan, particularly an expected value for a ratio of concentration to chemiluminescence. Without this knowledge, and without lab access to determine the relationship between concentration and chemiluminescence, we would not be able to confidently interpret the resulting chemiluminescent signal.</p>

                        <p>Instead, a compound known as Amplex Red was explored as an option. Amplex Red has definitive values for excitation and emission maxima provided by ThermoFisher Scientific, and has been found to oxidize in the presence of HRP, forming a red-fluorescent product known as resorufin (ThermoFisher Scientific, n.d.).</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading}>Protein Biotinylation</span>
                        </div>

                        <p>The biotin-streptavidin complex system has one of the highest specificities and affinities for non-covalent binding observed in nature (Wilchek et al., 2006), and is exploited in our design for the detection of proteins. In particular, this requires biotinylation, which is the process of attaching biotin (a small molecule) to some target protein or other macromolecule, so that the biotinylated analyte may be recognized and bound to streptavidin (a protein) (Kay et al., 2009). Recall that in our microfluidic assay, our fusion protein is biotinylated to allow streptavidin (conjugated to the control chamber) to bind, thereby eliciting a signal at the control chamber.</p>

                        <p>Typically in designing fusion proteins, biotinylation of the fusion protein is preferred to fusion with streptavidin, since biotin is smaller in size than globular proteins, which allows for the minimization of steric interference and the conjugation of multiple biotin molecules to a single protein for signal amplification. When designing a fusion protein, reducing the size of the fusion is advantageous to prevent instability and aggregation, making biotinylation of a fusion protein preferable over adding another protein domain. In addition, biotin has a valeric acid side chain, which can be easily derivatized and conjugated to reactive structures without affecting its avidin-binding function (Kay et al., 2009). This feature allows for the incorporation of many biotinylation reagents that target specific functional groups or residues, including primary amines, sulfhydryls, carboxyls and carbohydrates, without inactivating the target macromolecule.</p>

                        <p>Biotinylation is most commonly performed through chemical means, although it can also occur through enzymatic approaches. Enzymatic methods generally require the co-expression of bacterial biotin ligase and an exogenously expressed protein of interest that is modified to carry a biotin acceptor peptide, which provides a more uniform biotinylation than chemical methods and can be cell compartment specific (Cull & Schatz, 2000). Chemical methods, on the other hand, provide much greater flexibility in the type of biotinylation needed. This is especially preferred to enzymatic methods when specific functional groups such as carbonyls, carboxyls, primary amines or sulfhydryls are targeted (Chapman-Smith & Cronan Jr, 1999).</p>

                        <p>For our purposes, it suffices to biotinylate the protein at any residue, and so the enzymatic method was used by fusing the protein at its C-terminus to the AviTag or the Acceptor Peptide (Cull & Schatz, 2000), a 15-amino acid peptide (GLNDIFEAQKIEWHE). The protein is then incubated with BirA in the presence of biotin and ATP, which allows for biotinylation to occur at the C-terminus.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Fusion Protein Linker Design</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Linkers are amino acid sequences that fuse two or more protein domains together - in this case, 1UTM and HRP. The design of linkers is vital to fusion protein functionality, since inappropriate linkers may lead to misfolding of the fusion proteins, low yield in protein production, or impaired bioactivity (Chen et al., 2013). Linkers are generally classified into 3 categories by structure: flexible linkers, rigid linkers, and in vivo cleavable linkers. Flexible linkers are usually used when the joined domains require a certain degree of movement or interaction. They are generally composed of small, non-polar (e.g. Gly) or polar (e.g. Ser or Thr) amino acids, where the small size of these residues provides flexibility, and allows for mobility of the connected functional domains (Argos, 1990). The incorporation of Ser or Thr can maintain the stability of the linker in aqueous solutions by forming hydrogen bonds with the water molecules, and therefore reduces the unfavorable interaction between the linker and the protein moieties. The most commonly used flexible linkers have sequences consisting primarily of stretches of Gly and Ser residues, known as a GS linker. One of the most widely used flexible linkers has sequence (Gly-Gly-Gly-Gly-Ser)<sub>n</sub>. Varying the copy number n allows for different lengths of the GS linker to be constructed, so that appropriate separation of the functional domains or necessary inter-domain interactions can be achieved.
The lack of rigidity of flexible linkers, however, can sometimes result in poor expression yields or loss of biological activity, due to an inefficient separation of the protein domains or insufficient reduction of their interference with each other. In these situations, rigid linkers have been successfully applied to keep a fixed distance between the domains and to maintain their independent functions. Alpha helix-forming linkers with the sequence of (EAAAK)<sub>n</sub> have been applied to the construction of many recombinant fusion proteins (Amet et al., 2008), where n generally takes on values between 2 and 5. The alpha helical conformation is exhibited by many natural linkers, with it having a rigid and stable structure, due to intra-segment hydrogen bonds and a closely packed backbone (Aurora et al., 1997). Therefore, the stiff alpha-helical linkers may act as rigid spacers between protein domains. Another type of rigid linker has a Pro-rich sequence, (XP)<sub>n</sub>, with X designating any amino acid, preferably Ala, Lys, or Glu. The incorporation of Pro in non-helical linkers can increase the stiffness, and allows for effective separation of the protein domains.</p>

                        <p>Cleavable linkers are less relevant to our discussion, since we require the fusion protein to function as a unit. For the sake of completion, cleavable linkers are linkers that allow for the release of free functional domains in vivo. They are oligopeptides without the versatility of crosslinking agents, and are designed to be cleaved under specific conditions such as the presence of reducing reagents or proteases in the <em>in vivo</em> environment. Cleavable linkers may reduce steric hindrance, improve bioactivity, or achieve independent actions/metabolism of individual domains of recombinant fusion proteins after linker cleavage.</p>
                        
                        <p>Keeping the above considerations in mind, we decided that a polar, flexible, and medium-sized linker would be best for our purposes, as this would allow for proper separation of protein domains in aqueous solution, without the risk of linker-domain interactions (namely, hydrophobic interactions) that might compromise the conformation of the domains. The flexibility and length of the linker would allow each domain to function effectively, without risk of steric hindrance between domains (especially around the active sites of each domain). The amino acid sequence of the chosen linker is as follows:</p>

                        <p>N’-SGSTSTSTSTSGS-C’</p>

                        <p>With all of the above design considerations in mind, we utilized multiple-domain homology modelling in UCSF Chimera to obtain a 3D model of our fusion protein, as pictured below, with 1UTM on the left and HRP on the right.</p>
                   </div>
                   <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/0/0e/T--Waterloo--1UTM-HRP.png" alt="3D structure of 1UTM HRP" className={styles.design_img} style={{borderRadius: 20}}></img>
                        {/* <div className={overallStyles.figure_text}>The 3D structure of 1UTM, as visualized using UCSF Chimera, is as follows, where 1UTM is orange and PEA is green.</div> */}
                    </div>
                </Collapsible>

                <Collapsible open title="Build">
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Vector Selection</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>We decided to use the pET28a plasmid vector, which is a general-purpose expression vector with a strong promoter (T7), making it appropriate for expression of our fusion protein. It contains a <em>lac</em> operon, allowing for induction of expression using ​​isopropyl beta-D-1-thiogalactopyranoside (IPTG), an allolactose analog.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Chassis Selection</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>For the expression chassis, we decided to use <em>E. coli BL21(DE3)</em>, which is a general-purpose strain for bacterial protein expression. BL21 lacks <em>lon</em> and <em>ompT</em> proteases involved in the cleavage of extraneous proteins and T7 RNA polymerase, respectively. The lack of these proteases ensure that protein expression is possible. As well, disulfide bond formation is possible, and is largely catalyzed by natively expressed thioredoxin reductase (trxB), glutathione reductase (gor) and oxidases DsbA/DsbC.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Protein Purification</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>To enable purification of the desired fusion protein by affinity chromatography, a 6-His tag with a TEV linker was appended to the N-terminus of the fusion protein. The His-tag has a very high affinity for nickel ions, and is only outcompeted by imidazole. To purify the protein, the expression cell culture would be lysed, centrifuged to remove cell debris, then the supernatant poured into an affinity chromatography column with Ni-NTA resin. The TEV linker of the fusion protein, containing a TEV recognition site, could be cleaved by adding TEV protease. This would allow for elution of the fusion protein while simultaneously removing the 6-His tag and TEV linker. The Ni-NTA resin could then be eluted by the addition of imidazole, which would cause the bound 6-His tags and TEV linkers to elute.</p>
                    </div>
                </Collapsible>

                <Collapsible open title="Test">
                    <div className={overallStyles.description} style={{marginTop: 5}}>
                        <p>Due to unforeseen circumstances (one of which was a global pandemic, and the other of which was unforeseen maintenance and construction of our lab space by the University), we unfortunately did not have lab access this year. As a result, we were unable to experimentally characterize the fusion protein. With that said, the following methodology outlines our plan of action to test our fusion protein construct if we had lab access.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Experimental Demonstration of Fusion Protein Stability</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>The beauty of working with a fusion protein with a chemiluminescent enzyme domain is that the activity (and by extension, stability) of the fusion protein can be assayed very easily. In the case of the 1UTM-HRP fusion, where Amplex Red is the chemiluminescent substrate of HRP, Amplex Red could be added to a sample of the purified fusion protein in a cuvette. The fusion protein solution would be expected to display chemiluminescence of wavelength 563-587 nm upon addition of Amplex Red; the chemiluminescence can be measured using a spectrophotometer. A negative control would involve adding Amplex Red to the protein’s buffer solution (but without the protein!) to ensure that chemiluminescence displayed by the protein solution is not due to some side reaction with the buffer solution components. A positive control would involve adding Amplex Red to a known pure solution of HRP (not in a fusion protein); this would ensure that Amplex Red is not degraded.</p>

                        <p>To follow up on the previous stability experiment, simulation of urine conditions (including pH, salt, and major metabolites) would allow us to demonstrate the stability and functionality of the protein in urine. Roxe (1990) determined that urine typically had the following conditions:</p>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>A pH range of 5-9, but usually slightly acidic. pH 6 is a reasonable generalization.</li>
                            <li>A protein concentration of much less than 30 mg/dL; equal or above indicates disease. To simulate protein in urine, bovine serum albumin (BSA) would be an appropriate, inert choice.</li>
                            <li>A glucose concentration of much less than 100 mg/dL; equal or above indicates disease.</li>
                            <li>Approximately 4 mM urea.</li>
                            <li>Approximately 20 mM salt (NaCl).</li>
                        </ul>
                        </p>

                        <p>These components could be dissolved in DI water to simulate a urine sample. Then, the experimental method described in the previous paragraph could be done to demonstrate stability and functionality of the fusion protein in urine-like conditions.</p>

                        <p>From here, it would be useful to obtain an experimental standard curve for the reaction between HRP and Amplex Red in urine-like conditions. To do this, a series of dilutions of the fusion protein would be made, then a known excess concentration of Amplex Red would be added to each fusion protein dilution. In measuring the chemiluminescence produced by each dilution, a standard curve of chemiluminescence vs. fusion protein concentration can be plotted. A multiplate and multiplate analyzer can be used for this. The same positive and negative controls from the stability experiment (above) should be implemented here as well. This would simulate the conditions of chemiluminescence in the microfluidic assay chip, since in the MCFA chip, the number of fusion protein molecules that bind at the test chamber would be variable, while the amount of Amplex Red that passes through the test chamber would be a known excess amount.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading} style={{paddingBottom: 0}}>Experimental Determination of PEA-Binding Affinity of the Fusion Protein</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Binding affinity between a protein and ligand can be expressed in terms of the protein’s dissociation constant, Kd. Mathematically, Kd is equivalent to the ratio of unbound protein to the ratio of bound protein. It follows that the lower the Kd, the more that protein is bound at any given time, and thus the higher the protein’s affinity for the ligand.</p>

                        <p>To determine the Kd of the PEA-binding fusion protein, we would need to determine the ratio of unbound:bound protein after incubation with PEA. To do so, an absorbance-based method can be used, as follows:</p>

                        <p>
                        <ol className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Prepare a solution of the PEA-binding fusion protein (the concentration can vary, so long as it is known).</li>
                            <li>Prepare an equimolar solution of PEA, prepared in the same buffer solution as the protein solution.</li>
                            <li>Using a spectrophotometer, measure the absorbance of a 1/2 diluted PEA solution at 257 nm.</li>
                            <ul className={overallStyles.description} style={{marginTop: 5, marginBottom: 5}}>
                                <li>PEA consists of a benzene ring and an amine group, the former of which exhibits absorbance around 257 nm due to the conjugated pi system (Tong et al., 2020).</li>
                                <li>If the absorbance is over 2.0, dilute the solution and try again until the absorbance is less than 2.0. The dilution factor can be used to calculate the concentration of PEA in the undiluted solution.</li>
                            </ul>
                            <li>Incubate the protein solution with the PEA solution in a 1:1 ratio.</li>
                            <ul className={overallStyles.description} style={{marginTop: 5, marginBottom: 5}}>
                                <li>To prevent protein loss to pipette tips during transfer, prime any tipes used with a solution of bovine serum albumin (BSA), which will prevent protein “sticking” to the tip.</li>
                            </ul>
                            <li>Centrifuge the incubated sample to pellet all of the fusion protein, including the fusion protein molecules bound to PEA. Recover the supernatant only.</li>
                            <li>Using a spectrophotometer, measure the absorbance of the PEA supernatant solution at 257 nm.</li>
                            <ul className={overallStyles.description} style={{marginTop: 5, marginBottom: 5}}>
                                <li>Again, if the absorbance is over 2.0, dilute the solution and try again until the absorbance is less than 2.0. The dilution factor can be used to calculate the concentration of PEA in the undiluted solution.</li>
                            </ul>
                        </ol>
                        </p>

                        <p>In order to interpret the absorbance values, a standard curve must be generated. This should be done by preparing a set of dilutions of a PEA solution of known concentration, then measuring the absorbance of each dilution. The resulting standard curve of absorbance vs. concentration can then be used to determine the concentration of an unknown PEA solution, given its absorbance.</p>

                        <p>Any amount of PEA that was “missing” from the supernatant (relative to the original known amount of PEA) will have been bound by the fusion protein (in a 1:1 molar ratio). Therefore, <br></br>Kd = concentration of unbound protein / concentration of bound protein <br></br>By extension, <br></br>Kd = PEA<sub>sup</sub> / (original concentration of PEA - PEA<sub>sup</sub>) where PEA<sub>sup</sub> = supernatant concentration of PEA.</p>

                        <p>It would be expected that the fusion protein exhibit an experimental Kd similar to the Kd of standalone 1UTM: approximately 0.000972 (RCSB PDB, n.d.). A dissociation constant much higher than the expected value (and by extension, a lower binding affinity) might indicate that the PEA-binding domain of the fusion protein is not individually stable or active.</p>
                    </div>
                </Collapsible>
                <Collapsible open title="Learn">
                    <div className={overallStyles.description} style={{marginTop: 5}}>
                        <p>Without lab access (as explained in the Test section), we were not able to perform the experiments outlined in the Test section. However, if we were to have performed those experiments, the standard curve experiment relating chemiluminescence to fusion protein concentration would have been valuable for quantification purposes. Specifically, it would have further informed the development of the optical detector and app (described below in the Optical Detector and Application Development engineering cycle), as the standard curve would allow for more accurate interpretation of the signal at the test chamber under simulated urine conditions, which would be most representative of true urine samples analyzed by NeuroDetech.</p>
                    </div>
                </Collapsible>
            </div>
        )
    }
}

export default Biomarker;