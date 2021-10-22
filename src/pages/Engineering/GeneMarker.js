import React, {Component} from 'react';
import styles from './genemarker.module.scss';
import overallStyles from '../overall.module.scss';
import Collapsible from '../../utils/Collapsible';

class GeneMarker extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div} style={{marginBottom: 40}}>
                    <span className={overallStyles.text_heading} style={{paddingBottom: 0}}>Gene Marker Detection: Design of mRNA-Binding CRISPR-Cas System</span>
                </div>
                <Collapsible open title="Design">
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Rationale for Switching to Detection of Genetic Markers</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Attention deficit hyperactivity disorder (ADHD) is a common yet complex neurological disorder, and while PEA was (serendipitously) a suitable biomarker for a diagnostic application, continuing on the path of biomarkers was not feasible. First of all, there is much conflicting and limited recent evidence of urinary biomarker variances within ADHD patients, and furthermore, genetic markers are generally better candidates for diagnostics given the genetic nature of ADHD (Faraone et al., 2014). Firstly, biomarkers such as 5-HIAA, MHPG, NPY, DBH, and HVA are indeed relevant to ADHD (Faraone et al., 2014), but conflicting evidence and limited case studies makes it difficult to use for diagnostics. As an example, a paper from <em>Biology Psychiatry</em> observed a decrease in urinary MHPG in patients with ADHD, but a more recent paper from <em>Molecular Chemistry</em> <em>Neuropathology</em> observed no such variances (Shekim et al., 1983 &amp; Baker et al., 1993). Due to much conflicting evidence, diagnostics using biomarkers became a recurring issue. Secondly, genetic markers are strong candidates for detecting ADHD (Faraone et al., 2014). Genes of the dopaminergic and serotonergic systems (particularly <em>DAT1, DRD4, DBH, SNAP25, CHRNA4</em>, and <em>TPH-2</em>) make for good candidates, and there is recent evidence linking their genetic behaviour to ADHD (Zhang et al., 2012). Alongside this, CRISPR-Cas13 methods of quantifying RNA, particularly the SATORI method, makes diagnostics possible without the need for prior amplification (Shinoda et al., 2021). With the literature pointing us away from biomarkers and towards genetic markers, we decided to adapt our microfluidic assay for the quantification of genetic markers - specifically, the detection of ADHD-associated mutations present in mRNA.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Review of RNA Stability in a Diagnostic Context</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>When initially considering an mRNA detection system, we were quite worried about the stability of mRNA - would it be even possible to quantify mRNA in urine? To address this concern, we looked into the literature to determine the following:</p>
                        
                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>What RNases are present in urine that would need to be inactivated for our system to work?</li>
                            <li>Do any successful urinary mRNA quantification methods exist in literature?</li>
                        </ul>
                        </p>

                        <p>In this section, we will review our findings from the literature, and also discuss the experience of one of our lab members with mRNA quantification using a lateral flow assay.</p>

                        <p>Ribonucleases (RNases) belong to a large class of enzymes, ubiquitous across both bacterial and eukaryotic organisms (Eun, 1996). Found in nearly all mammalian tissues and fluids, they are critical to a number of processes such as digestion, RNA metabolism, RNA processing and serve an integral role in protection against infection (Eun, 1996; Gotte &amp; Menegazzi, 2019). Most human secretary RNases serve vital to anti-inflammatory, antibacterial and antiviral actions, catalysing the degradation of foreign intracellular RNA, DNA:RNA hybrids and dsRNA as indicators of infection (Gotte &amp; Menegazzi, 2019). For this reason, an initial concern of using urinary RNA as a source to detect ADHD-associated mutations was the risk of RNase activity compromising RNA integrity (Becknell et al., 2019).</p>

                        <p>The functionality of our device in the detection of ADHD-associated mutations is contingent on RNA being stable in a biological sample from the point of collection to the point at which the sample reaches the test chamber. While literature on use of urine as a source of RNA suggests that proper sample storage conditions circumvent these concerns, we did not have the opportunity to test this given our lack of lab access. One of our lab members, however, has had extensive experience working with RNA in the context of COVID-19 diagnostics from saliva.</p>

                        <p>The company at which she worked, aimed to detect SARS-CoV2 RNA from saliva samples in an analogous lateral-flow assay microfluidic chip, while also incorporating detection of human RNA as a control for RNA stability. The results that our lab member collected highly supported the use of biological samples as a source of RNA, despite the risk of RNase activity potentially compromising the RNA quality. The use of RNase inhibitors during sample collection was sufficient in protecting the RNA, providing a reliable signal for the human RNA control at the test point. The significance of proper sample storage was further tested in negative controls lacking the RNase inhibitor. Absence of the inhibitor yielded consistently negative results in detecting the human RNA control gene, demonstrating that the RNase inhibitor was necessary in stabilizing RNA in saliva. Similar efforts of SARS-CoV2 RNA detection in saliva using the same methods of detection have been reported with success since then (Aoki et al., 2021; Lalli et al., 2021).</p>

                        <p>In addition to the personal experience of our lab member, numerous literature sources suggest that despite the general instability of RNA, absolute and relative methods of mRNA quantification in urine are viable, given careful handling and storage of RNA samples as well as proper inactivation of RNases. This literature is summarized below: <br></br>Seo et al. (2017) successfully performed RT-qPCR to quantify the mRNA of three genes associated with kidney transplant rejection. To ensure stability of the RNA, they added their urine samples to RNAlater, an RNA inhibitor cocktail, and stored these samples at -80˚C (Seo et al., 2017). Sample-to-sample variation in measured mRNA concentrations could be circumvented by normalizing the absolute quantity of mRNA to the quantity of a constitutively expressed housekeeping gene (Seo et al., 2017). Note that this is a common practice for mRNA quantification in general, not just in urine samples.</p>

                        <p>Bradley et al. (2019) were also successful in extracting and quantifying mRNA by RT-qPCR across multiple RNA extraction kits. Under clinical settings, urine samples cannot always be processed immediately or stored under -80°C conditions, making RNA degradation a concern for clinical processing. To test the efficacy of RNA extraction under clinical settings, the RNA samples were processed using centrifugation, filtration, and aliquoting methods under clinical settings (Bradley et al., 2019). With the use of RNAlater, the subsequent RNA extractions were successful in isolating RNA for quantification by RT-qPCR (Bradley et al., 2019).</p>
                        
                        <p>Overall, from the personal experience of our lab member, replicated results in the field, and literature supporting the viability of RNA quantification in urine, we found it safe to state that detection of RNA in urine would be achievable for our purposes in a microfluidic assay.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Overview of CRISPR-Cas Design</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Initially, to allow for generation of a quantifiable signal, we considered constructing a Cas-HRP fusion protein, similarly to the PEA-binding fusion protein. However, we realized that a simpler method that is commonly used in literature is to utilize the inherent RNase activity of CRISPR-Cas systems to cleave a fluorophore and quencher, thereby producing fluorescence. In effect, the design of the microfluidic assay for gene marker detection remains very similar to that for PEA detection; the only changes include the following:</p>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Instead of the chemiluminescent substrate, a fluorophore and quencher would be used, linked by ssRNA.</li>
                            <li>Instead of a fusion protein, a simple CRISPR-Cas complex would be used. The Cas protein should be biotinylated to allow for a signal to be produced at the control chamber.</li>
                            <li>At the test chamber, the target mRNA should be conjugated (instead of PEA).</li>
                            <li>At the control chamber, in addition to conjugated streptavidin, a known sample of the target mRNA (not conjugated) should also be lyophilized in order to activate the RNase activity of any CRISPR-Cas that binds to the control chamber.</li>
                        </ul>
                        </p>

                        <p>This design is able to detect specific ADHD-associated mutations present in the target mRNA. If the target mRNA (containing the mutation) in the urine is detected and bound by the CRISPR-Cas complex, then less CRISPR-Cas complexes with “open binding sites” are available to bind to the mRNA conjugated to the test chamber, resulting in a lower signal. Overall, if the signal is a certain threshold level lower than the signal for an individual without ADHD, then the person is deemed to have the mutation.</p>

                        <p>With the above in mind, the design of the microfluidic assay for the detection of gene markers would be as follows:</p>
                    </div>
                    <div className={overallStyles.figure_div} style={{marginBottom: 30}}>
                        <img src="https://2021.igem.org/wiki/images/0/02/T--Waterloo--MCFAoverviewCRISPR.png" className={styles.design_img} style={{borderRadius: 20}}></img>
                        <div className={overallStyles.figure_text}>Diagram of the microfluidic assay designed to detect gene markers (ADHD-associated mRNA mutations).</div>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>The Big Picture</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>With the above design considerations in mind, the outstanding questions to be answered for the design of an mRNA-quantifying CRISPR-Cas system include the following:</p>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>What specific genes (and by extension, their ADHD-associated mutations) should be detected?</li>
                            <li>What Cas protein should be used? Would we need to adapt the Cas protein to our system in any way?</li>
                            <li>How should we design the CRISPR guide RNA sequences?</li>
                        </ul>
                        </p>

                        <p>In the following sections, our considerations and answers to these “big picture questions” will be discussed.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading}>Selection of ADHD-associated genes to be quantified by mRNA transcript detection</span>
                        </div>

                        <p>ADHD is often comorbid with other psychological disorders, such as schizophrenia, depression, anxiety, and bipolar disorder, to name a few. In a similar sense, biomarkers and gene markers associated with ADHD can often be associated with other psychological disorders as well. In order to reduce the likelihood that our microfluidic assay system produces false positive results associated with other psychological disorders, we aimed to detect multiple ADHD-associated gene markers. In selecting the most viable gene candidates, we conducted literature research into the following ADHD-associated genes. We favoured genes whose ADHD-associated mutations would also be present in their corresponding mRNA transcripts; that is, mutations in the promoter region or introns were ruled out. We also favoured genes whose ADHD-associated mutations were well-characterized and had known sequences. As well, variable number of tandem repeat mutations (VNTRs) were ruled out, as these would not be easily detected by hybridization.</p>

                        <p>In searching the literature for suitable gene markers, we considered the following genes:</p>

                        <p><em>DBH</em> codes for dopamine beta-hydroxylase, which catalyzes the conversion of dopamine into norepinephrine. However, the major ADHD-associated mutations for DBH occur within introns, making it impossible to detect these mutations in the corresponding mRNA transcript (Roman et al., 2002).</p>

                        <p><em>MAOA</em> codes for monoamine oxidase A, a mitochondrial enzyme which degrades monoamines such as serotonin, norepinephrine and dopamine (known ADHD-associated biomarkers). However, the major ADHD-associated mutations for MAOA occurred within the promoter region or introns, making it impossible to detect these mutations in the corresponding mRNA transcript. As well, differential expression of MAOA between males and females made it unfavourable for universal use (Rommelse et al., 2008).</p>

                        <p><em>GRIN2A</em> codes for a subunit of the NMDA receptor complex, which is implicated in memory and learning. However, it is not certain whether there truly is an association between ADHD and GRIN2A; thus it was ruled out (Adams et al., 2004).</p>

                        <p><em>DRD4</em> codes for a major dopamine receptor. A predictable 7-repeat VNTR is associated with ADHD (this is different from VNTRs where the number of repeats is not predictable). Notably, 7-repeat VNTR alleles containing missense mutations led to an observed three-fold increase in likelihood of hyperactivity (Tovo-Rodrigues et al., 2013). This makes sense, as a lack of DRD4 functionality in the DRD4 dopamine receptor would lead to an inability to bind dopamine; with dopamine being an ADHD biomarker, the association between ADHD and the DRD4 missense mutations makes sense (Tovo-Rodrigues et al., 2013). Thus, targeting these missense mutations within the 7-repeat region could be a viable strategy. Specifically, the following missense mutations are viable targets:</p>
                        
                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>A single base deletion of cytosine in VNTR motif 3</li>
                            <li>A single base deletion of cytosine in VNTR motif 1</li>
                        </ul>
                        </p>

                        <p><em>HTR1B</em> codes for 5-hydroxytryptamine receptor 1B, and polymorphisms in HTR1B have been implicated in ADHD; however, it is only implicated in some ADHD subtypes and thus is not a good universal indicator of ADHD (Ickowicz et al., 2006).</p>

                        <p><em>TPH-2</em> codes for tryptophan hydroxylase, which is involved in the synthesis of serotonin, an ADHD-associated biomarker. Multiple SNPs in TPH-2 are statistically significant with regard to ADHD association, including the ones listed below. However, these SNPs are intronic, making them unsuitable for detection in mRNA.</p>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>rs1843809-T allele</li>
                            <li>rs1386497-A allele</li>
                            <li>rs1386493-C allele</li>
                        </ul>
                        </p>

                        <p><em>CHRNA4</em> codes for a nicotinic acetylcholine receptor, where the following SNP mutations were found to be ADHD-associated (Lee et al., 2007). However, these SNPs are intronic, making them unsuitable for detection in mRNA.</p>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>rs2273505-G allele</li>
                            <li>rs3787141-T allele</li>
                        </ul>
                        </p>

                        <p><em>SNAP25</em> codes for a presynaptic membrane protein involved in the regulation of neurotransmitter release. The SNP T1065T&gt;G is known to be ADHD-associated (Faraone &amp; Mick, 2010). This SNP occurs in the 3′ untranslated region and is thus present and detectable in mRNA.</p>

                        <p>Of the above mutations, the ADHD-associated genes that we chose to detect using our microfluidic assay included the following:</p>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li><em>DRD4</em></li>
                            <li><em>SNAP25</em></li>
                        </ul>
                        </p>

                        <p>To detect the ADHD-associated genes selected above, we decided to utilize a CRISPR-Cas-based system. CRISPR-Cas would allow for sensitive detection of mRNA, with enough specificity to distinguish single nucleotide polymorphisms (SNPs) (Shinoda et al., 2021). As a result, mutations associated with ADHD could be quantified, even SNP mutations. The following describes the design considerations of employing a CRISPR-based system in a microfluidic assay.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading}>Selection of Cas protein</span>
                        </div>

                        <p>CRISPR Cas systems involve a Cas protein and a CRISPR guide RNA (gRNA); the Cas protein exhibits endonuclease activity when bound to its guide RNA. In selecting the appropriate Cas protein for detection of urinary mRNA, it is important to consider the distinctions between the Cas proteins - specifically, their targets:</p>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>CRISPR-Cas9 cleaves double-stranded DNA (dsDNA), creating blunt ends. It cleaves a single, specific target (Koonin &amp; Makarova, 2019).</li>
                            <li>CRISPR-Cas12 cleaves double-stranded DNA (dsDNA), creating sticky (staggered) ends. It cleaves and remains bound to its target. When bound, it also exhibits nonspecific nuclease activity, indiscriminately cleaving DNA other than the target (Koonin &amp; Makarova, 2019).</li>
                            <li>CRISPR-Cas13 cleaves single-stranded RNA (ssRNA). Similarly to Cas12, it cleaves its target and remains bound, and will also exhibit nonspecific nuclease activity, indiscriminately cleaving ssRNA other than the target (Koonin &amp; Makarova, 2019).</li>
                        </ul>
                        </p>

                        <p>Due to the ability of CRISPR-Cas13 to target ssRNA, such as mRNA transcripts, we chose to utilize a Cas13-based system.</p>

                        <p>There are several relatively well-characterized Cas13 proteins that originate from different species of the <em>Leptotrichia</em> genus, such as Cas13a from <em>L. wadei, L. buccalis</em>, and <em>L. shahii</em>. Of these Cas13a variants, <em>L. shahii</em> was the earliest discovered; however, diagnostics tools have favoured <em>L. wadei</em> and <em>L. buccalis</em> for their increased analyte sensitivity. In fact, Fozouni et al. (2020) utilized Cas13a from <em>L. buccalis</em> to detect SAR-CoV-2 RNA, favouring the <em>L. buccalis</em> variant as it had the highest sensitivity compared to the other Cas13a variants (Fozouni et al., 2020). Inspired by this, we decided to adapt Cas13a from <em>L. buccalis</em> (henceforth referred to as LbuCas13a) for the detection of ADHD-associated mRNA transcripts in our microfluidic assay.</p>

                        <p>Overall, Cas13a from <em>L. buccalis</em> was chosen for the detection of ADHD-associated mRNA.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading}>Adaptation of LbuCas13a for use in a microfluidic assay</span>
                        </div>

                        <p>Recall that the microfluidic assay consists of a test chamber and control chamber. The analyte of interest (in this case, the target ADHD-associated mutant mRNA transcript) is covalently conjugated to the test chamber. This would allow LbuCas13a to bind to these conjugated target mRNA transcripts, thereby activating LbuCas13a’s nonspecific RNAse activity.</p>

                        <p>To utilize this nonspecific RNAse activity to produce fluorescence, we decided to use a fluorophore/quencher system, connected via an RNA linker. When the fluorophore is in close proximity to the quencher, the fluorophore is “quenched” by the quencher and does not produce fluorescence. However, when the fluorophore is separated from the quencher, the fluorophore produces fluorescence. The nonspecific RNAse activity of LbuCas13 (when bound to the target mRNA transcript) cleaves any surrounding RNA, including the RNA linker between the fluorophore and quencher. Ultimately, this allows for the production of fluorescence upon detection of the target mRNA, even for small quantities of mRNA.</p>

                        <p>The control chamber contains covalently conjugated streptavidin. In order to allow Cas13 to bind at the control chamber, LbuCas13a must be biotinylated, which would facilitate a strong biotin-streptavidin interaction at the control chamber. Biotinylation of LbuCas13a would be facilitated in the same manner as biotinylation of 1UTM, the PEA-binding protein.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading}>Design of CRISPR guide RNA sequences</span>
                        </div>

                        <p>CRISPR guide RNA consists of a stem sequence that forms a hairpin loop and is recognized by the Cas protein. In the case of LbuCas13a, Fozouni et al. (2020) suggests that the following 30-nucleotide sequence is appropriate as a stem sequence for the CRISPR guide RNA (Fozouni et al., 2020): <br></br>5′-GACCACCCCAAAAAUGAAGGGGACUAAAAC-3′</p>

                        <p>This stem sequence would be added to the 5′ end of a recognition sequence. This recognition sequence would be complementary to the target mRNA of interest, allowing for target mRNA binding by the CRISPR-Cas13 system.</p>

                        <p>Recall that the ADHD-associated genes whose mRNA transcripts would be detected include the following:</p>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li><em>DRD4</em></li>
                            <li><em>SNAP25</em></li>
                        </ul>
                        </p>

                        <p>The sequences of the ADHD-associated mutations for each gene were obtained from the papers describing the association of each gene with ADHD (the papers referenced can be seen with the guide RNA sequences below). These sequences were translated to RNA sequences by replacing all thymine residues with uracil, and converted to the complementary sequence for use as a CRISPR recognition sequence. Then, the stem sequence was appended to the 5′ end of each recognition sequence. Listed below are the guide RNA sequences for each ADHD-associated gene:</p>

                        <p><em>DRD4</em> missense deletion in VNTR motif 3 (recognition sequence obtained from Tovo-Rodrigues et al., 2013): <br></br>5′-GACCACCCCAAAAAUGAAGGGGACUAAAACGGCGCGGGCCGGAGGGGGGCCUGGGGACGCCGGG-3′ <br></br>This sequence was used to create a new BioBrick Part: <a href="http://parts.igem.org/Part:BBa_K3843005" target="_blank">BBa_K3843006</a></p>

                        <p><em>DRD4</em> missense deletion in VNTR motif 1 (recognition sequence obtained from Tovo-Rodrigues et al., 2013): <br></br>5′-GACCACCCCAAAAAUGAAGGGGACUAAAACGCGCGGGGCGGAGGGGGUCCUGGGGACGCCGGGG-3′ <br></br>This sequence was used to create a new BioBrick Part: <a href="http://parts.igem.org/Part:BBa_K3843005" target="_blank">BBa_K3843008</a></p>

                        <p><em>SNAP25</em> SNP T1065T&gt;G (recognition sequence obtained from Barr et al., 2000): <br></br>5′-GACCACCCCAAAAAUGAAGGGGACUAAAACCACCGAGAUUGAGGAACUCCAGAACUCAAAGUAA-3′ <br></br>This sequence was used to create a new BioBrick Part: <a href="http://parts.igem.org/Part:BBa_K3843005" target="_blank">BBa_K3843007</a></p>
                    </div>
                </Collapsible>

                <Collapsible open title="Build">
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Vector and Chassis Selection</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>The Zhang Lab, based in Massachusetts, USA, is highly experienced with the use of CRISPR-Cas13a; they have developed an excellent <a href="https://zlab.bio/cas13" target="_blank">resource page</a> for CRISPR-Cas13 work.</p>

                        <p>In this CRISPR-Cas13 guide, the Zhang Lab provides a pET-based plasmid vector for the expression of Cas13a from <em>Leptotrichia wadei</em>. In our case, for the expression of Cas13a from <em>Leptotrichia buccalis</em>, we would swap the insert with the sequence for LbuCas13a. The vector contains a 6-His tag at the N-terminus, suitable for affinity chromatography using an Ni-NTA resin column (Abudayyeh &amp; Gootenberg, n.d.).</p>

                        <p>The Zhang Lab suggests the use of <em>E. coli Rosetta 2(DE3)pLysS Singles</em> for Cas13a expression. With that said, this strain is a BL21 derivative for expression of human proteins (though bacterial expression is reportedly fine using the plasmid above). For bacterial expression, simply using <em>E. coli BL21</em> would likely be sufficient (Abudayyeh &amp; Gootenberg, n.d.).</p>

                        <p>The CRISPR guide RNA sequences would be ordered from a synthesis company, such as IDT, as the Zhang Lab reported better performance using synthesized guide RNAs (Abudayyeh &amp; Gootenberg, n.d.).</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Cas13a Purification</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Since the Zhang Lab’s plasmid allows for expression of a 6-His tag along with Cas13a, the expressed protein can be purified by affinity chromatography, similarly to the purification of the PEA-binding fusion protein. An Ni-NTA resin would be used to capture the His-tagged Cas13a. Then, elution of Cas13a would occur through the addition of imidazole.</p>
                    </div>
                </Collapsible>

                <Collapsible open title="Test">
                    <div className={overallStyles.description} style={{marginTop: 5}}>
                        <p>Due to unforeseen circumstances (one of which was a global pandemic, and the other of which was unforeseen maintenance and construction of our lab space by the University), we unfortunately did not have lab access this year. As a result, we were unable to experimentally test the functionality of the CRISPR-Cas13a constructs. With that said, the following methodology outlines our plan of action to test our CRISPR-Cas13a constructs if we had lab access.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Experimental Demonstration of CRISPR-Cas13a Success</span>
                    </div>
                    <div className={overallStyles.description}>
                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading}>Demonstration of CRISPR-Cas13a Stability in Urine-Like Conditions</span>
                        </div>

                        <p>In a solution containing ssRNA-linked fluorophores/quenchers, the nonspecific RNase activity of CRISPR-Cas13 after target ssRNA detection allows for the rapid production of a fluorescent signal. The stability and functionality of CRISPR-Cas13 in urine-like conditions can be tested in a similar way as described for the PEA-binding fusion protein. Once again, the expected conditions of urine include pH ~6, a low protein concentration (that can be simulated using BSA), a low glucose concentration, around 4 mM urea, and around 20 mM NaCl (Roxe, 1990). After preparing a solution in DI water with these conditions and adding CRISPR-Cas13a, the fluorophores/quenchers, and the target mRNA sequence, the simulated urine solution would be expected to display fluorescence of wavelength 535 nm that could be measured using a spectrophotometer (Shinoda et al., 2021). A negative control would involve only the simulated urine.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading}>Experimental Calibration Curve</span>
                        </div>

                        <p>Just like with the PEA-binding fusion protein, it would be useful to obtain an experimental standard curve for the fluorescence produced upon separation of the fluorophores and quenchers by CRISPR-Cas13a cleavage of the linker ssRNA. To do this, a series of dilutions of CRISPR-Cas13a would be made, then a known excess concentration of the ssRNA-linked fluorophores and quenchers would be added to each CRISPR-Cas13a dilution. In measuring the fluorescence produced by each dilution, a standard curve of fluorescence vs. CRISPR-Cas13a concentration can be plotted. A multiplate and multiplate analyzer can be used for this. This would simulate the conditions of fluorescence in the microfluidic assay chip, since in the MCFA chip, the number of CRISPR-Cas13a molecules that bind at the test chamber would be variable, while the amount of ssRNA-linked fluorophores and quenchers that pass through the test chamber would be a known excess amount.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading}>Experimental Calibration Curve</span>
                        </div>

                        <p>Proper identification of ADHD-associated gene markers by NeuroDetech relies on the ability of CRISPR-Cas13a to distinguish between two mRNA sequences differing only by a single nucleotide polymorphism (SNP). Shinoda et al. (2021) has demonstrated this to be possible and reliable; however, as a component of the proof of concept, we would need to test this for our specific mRNA sequences. To do so, mRNA sequences for the ‘normal’ allele as well as the ADHD-associated mutant allele would need to be obtained, likely by synthesis by a company like IDT. From here, the stability experiment described above should be repeated for the ‘normal’ and ADHD-associated sequences. It would be expected that the ‘normal’ mRNA sequences would not be recognized by CRISPR-Cas13a; thus, its nonspecific RNase activity would not be activated, and no fluorescence would be produced. For the ADHD-associated sequences, fluorescence should be expected, since these mutant sequences are the desired targets of the designed CRISPR-Cas13a guide RNAs.</p>
                    </div>
                </Collapsible>
                <Collapsible open title="Learn">
                    <div className={overallStyles.description} style={{marginTop: 5}}>
                        <p>Without lab access (as explained in the Test section), we were not able to perform the experiments outlined in the Test section. However, similarly to the PEA-binding protein engineering cycle, if we were to have performed those experiments, the standard curve experiment relating fluorescence to CRISPR-Cas13a concentration would have been valuable for quantification purposes. Specifically, it would have further informed the development of the optical detector and app (described below in the Optical Detector and Application Development engineering cycle), as the standard curve would allow for more accurate interpretation of the signal at the test chamber under simulated urine conditions, which would be most representative of true urine samples analyzed by NeuroDetech.</p>
                    </div>
                </Collapsible>
            </div>
        )
    }
}

export default GeneMarker;