import React, {Component} from 'react';
import styles from './microfluidic.module.scss';
import overallStyles from '../overall.module.scss';
import Collapsible from '../../utils/Collapsible';

class Microfluidic extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div} style={{marginBottom: 40}}>
                    <span className={overallStyles.text_heading}>Microfluidic Chip Design</span>
                </div>
                <Collapsible open title="Design">
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Selection of Flow Assay Type</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>When deciding on the mechanism to detect analyte in the test chamber, we considered both a competitive method and a sandwich method. In a competitive format, the analyte of interest in the free sample competes with the immobilized analyte in the test chamber to bind a binding molecule (i.e. an aptamer or fusion protein). In a sandwich assay, the analyte binds to both the binding molecule and an immobilized molecule in the test chamber. Thus, the analyte is “sandwiched” between two binding molecules. Originally, we considered both of these detection methods with phenylethylamine (PEA) as the target analyte in mind, as PEA was our first biomolecule of focus (as discussed in the Design section of the Biomarker Detection engineering cycle). Given the small size of PEA, we determined that a sandwich detection method would not be possible, as this would require two molecules to bind to PEA. Given the small size of PEA, it would not be feasible for two molecules to simultaneously bind this analyte, thus we ruled out the sandwich format and decided to utilize the competitive format.</p>

                        <p>In designing NeuroDetech, we wanted to design a quick and easy to use system that would detect multiple analytes found in urine. We decided early on that a lateral flow assay detection method would be the best way to do this, as it is well-researched, quick and easy to use, and cost effective. The typical pregnancy test served as our preliminary model, and with this in mind, we began designing our system. We consider all the components involved in a lateral flow assay including a sample pad, test pad, control pad, etc. A key distinction we wanted to make between our system and that of a pregnancy test was the final output. While a pregnancy test provides a distinct yes or no answer, we wanted something that would produce a quantitative output. SInce there are multiple factors that could affect any given analyte, we knew that it would not be feasible to create a binary system. In order to get the desired output, we returned to the literature to research different types of assays we could use. We determined that a microfluidic assay was best because it has high precision for biomarker quantification and there’s a significant improvement in sensitivity when compared to other methods. To read more about the different types of assays for quantification please go to the Design section of the Optical Detector and Application Development engineering cycle.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Overview of MCFA Chip Design</span>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/c/c1/T--Waterloo--MCFAoverview.png" className={styles.design_img} style={{borderRadius: 20, width: '100%', height: '100%'}}></img>
                        <div className={overallStyles.figure_text}>Simplified diagram of the microfluidic assay chip.</div>
                    </div>
                    <div className={overallStyles.description}>
                        <p>A microfluidic assay is essentially a fancy version of a lateral flow assay (i.e. a pregnancy test) that is designed to work precisely with small volumes. The general design of the microfluidic assay used in NeuroDetech includes the following components, as can be seen in the figure above:</p>

                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>A sample application site, where the urine sample is dispensed.</li>
                            <li>A binding molecule chamber, where the binding molecule is an aptamer or fusion protein that can:
                                <ul className={overallStyles.description} style={{marginTop: 5, marginBottom: 5}}>
                                    <li>bind the biomolecule analyte of interest, and</li>
                                    <li>react with another molecule (i.e. a chemiluminescent substrate) to produce a quantifiable signal.</li>
                                </ul>
                            </li>
                            <li>A chemiluminescent substrate chamber, which houses a substrate for the binding molecule; conversion or breakdown of the substrate by the binding molecule produces chemiluminescence or fluorescence that can be quantified.</li>
                            <li>A fluid delay system, which is implemented after the chemiluminescent substrate chamber. This ensures that the binding molecule and chemiluminescent substrate cannot intermix until the binding molecule has reached the test chamber. Otherwise, the test chamber would always produce a signal, rendering the assay useless.</li>
                            <li>The test chamber, where the biomarker analyte of interest is conjugated. The binding molecule may bind here, producing a quantifiable signal. Interpreting the signal/number of binding molecules that bind gives insight into the concentration of the target analyte in the urine sample. Generally, the higher the concentration of the target analyte in the sample, the lower the signal produced at the test chamber.</li>
                            <li>The control chamber, where streptavidin is conjugated. Binding molecules that are not bound in the test chamber will be bound in the control chamber. In effect, a signal is always produced at the control chamber. This positive control helps to prevent false negatives.</li>
                            <li>A capillary pump, which pulls the sample through the microfluidic assay.</li>
                        </ul>
                        </p>

                        <p>The output signal of the microfluidic assay can then be interpreted by an optical detector and application, which returns the concentration of the target analyte.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Microfluidic Chip Mechanical Design</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>The main inspiration for the design of the NeuroDetech lab chip is a similar point-of-care diagnostic device for infectious diseases created by Ghosh et al. (2020). The testing device designed by Ghosh et al. (2020) prioritized functions such as accessibility and speed which are applicable to NeuroDetech. Hence many concepts from this paper, like the device dimensions and parts sequence, are incorporated into our work. Overall, the objective of our work is to create a user-friendly tool for quantitative biomolecular detection. (Ghosh et al., 2020)</p>
                        
                        <p>While designing the device, multiple factors were taken into account, including flow and reaction rate. The concentration of PEA in the sample is low, which can be difficult to detect. In the design of the chip, both capillary and surface tension forces contribute to the generation of transient flow within the microstructures due to the pressure gradient. The high surface-to-volume ratio increases antigen binding, ensuring more precise and accurate results. In summary, this microfluidic device utilizes many principles of fundamental fluid dynamics. The model of the NeuroDetech lab chip is shown below.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/9/90/T--Waterloo--Cornerview_assembly.png" className={styles.design_img} style={{borderRadius: 20, width: '80%', height: '80%', marginLeft: '10%'}}></img>
                        <div className={overallStyles.figure_text}>Assembly of the microfluidic chip. Note that the top plane surfaces are transparent for easy visualization of the chip inner components.</div>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/5/5e/T--Waterloo--LabelledChipGood.png" className={styles.design_img} style={{borderRadius: 20, width: '50%', height: '50%', marginLeft: '25%'}}></img>
                        <div className={overallStyles.figure_text}>Full assembly of the microfluidic chip. Fluid flows from the top left through the capillary pump through to the spiral control chamber, then to the spiral test chamber. At the same time, fluid flows from the top right through the drying chamber and into the spiral test chamber.</div>
                    </div>
                    <div className={overallStyles.description}>   
                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Sample Loading Chamber and Drying Chamber Design</span>
                        </div>

                        <p>The geometry of the NeuroDetech lab chip is critical to the chip’s function. The test begins when the sample is deposited into the loading chamber through a sample loading port located at the top of the chip. A hydrophobic spot in the middle of the loading chamber splits the sample into two equal parts (Ghosh et al., 2020). Separate pathways move the samples toward a series of small tubes then into the drying chambers.</p>

                        <p>Path one leads to the binding protein drying chamber, and path two leads to the chemiluminescent substrate drying chamber. There are 10 tubes leading to the binding protein drying chamber and 7 tubes leading to the chemiluminescent substrate drying chamber. The tubes help maintain pressure to transfer fluid into the drying chambers and prevent unwanted backflow into the loading chamber.</p>

                        <p>Both drying chambers have a grid of rectangular pillars to increase mixing, providing binding proteins with sufficient time and space to bind to target biomarkers (Ghosh et al., 2020). The chemiluminescent substrate drying chamber has a row of tubes separating sections of the grid to maintain fluid pressure; this also ensures that fluid does not enter the test chamber before the binding protein fluid. Ramps descending into and ascending out of the drying chambers help retain fluid in the drying chamber for a sufficient period of time for uniform mixing and drying (Ghosh et al., 2020).</p>

                        <p>The drying chambers connect to a series of delay valves with initially small diameters that progressively enlarge by widening the tube diameter; the fluid meniscus is thus increased in size, consequently decreasing capillary pressure. In turn, this helps ensure that no air bubbles form as the solution flows to the test chamber. The chemiluminescent substrate drying chamber pathway has a long serpentine delay tube in addition to the traditional delay valves, resulting in all the fluid from path two entering the reaction chamber only after all the fluid from path one has entered (Ghosh et al., 2020).</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/f/f5/T--Waterloo--LabelledDryingChamber.png" className={styles.design_img} style={{borderRadius: 20, marginLeft: '5%'}}></img>
                        <div className={overallStyles.figure_text}>Annotated loading and drying chamber.</div>
                    </div>
                    <div className={overallStyles.description}>
                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Capillary Pump Design</span>
                        </div>
                        
                        <p>Based on our previous research and referenced studies, few considerations were determined to be particularly important for fluid flow in the capillary pump. Through background research, we identified factors that affect fluid flow in a capillary pump. These include wettability, frequency of microstructures in the flow chamber, and the geometry of the microstructures used to increase flow resistance. These factors are the foundation for determining flow rates due to capillary flow (Olanrewaju et al., 2018).</p>

                        <p>In general, more densely packed orientations of microstructures lead to higher flow resistance, in turn increasing flow pressure. Some of the key microstructure geometries commonly found in capillary pumps include tree lines, symmetric lines, balled lines, and posts. These structures must be small enough to generate enough capillary pressure for flow through the chamber (Olanrewaju et al., 2018).</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/b/be/T--Waterloo--processCapillaryPumpTypes.png" className={styles.design_img} style={{borderRadius: 10}}></img>
                        <div className={overallStyles.figure_text}>Various Capillary Pump Designs (Olanrewaju et al., 2018)</div>
                    </div>
                    <div className={overallStyles.description}> 
                        <p>We chose to compare three different microstructures and their effect on fluid flow: (1) symmetric oblong shapes  (400 by 200μm); (2) treelines in the shape of a hexagon (thickness 1mm); and (3) balled lines (radius 500 μm, lines 1mm).</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                            <img src="https://2021.igem.org/wiki/images/b/b5/T--Waterloo--processOblongMicrostructures.png" className={styles.design_img} style={{borderRadius: 20, width: '28%', height: '28%'}}></img>
                            <img src="https://2021.igem.org/wiki/images/7/78/T--Waterloo--processTreeMicrostructures.png" className={styles.design_img} style={{borderRadius: 20, width: '26%', height: '26%'}}></img>
                            <img src="https://2021.igem.org/wiki/images/1/11/T--Waterloo--ProcessBalledlineMicrostructures.png" className={styles.design_img} style={{borderRadius: 20, width: '27%', height: '27%'}}></img>
                        </div>
                        <div className={overallStyles.figure_text}>From left to right: Oblong microstructures. Treeline microstructures. Balled lines microstructures.</div>
                    </div>
                    <div className={overallStyles.description}>
                        <p>The section housing these different microstructure designs are connected in series with a serpentine channel section and a spherical microstructure capillary chamber. The purposes of these additional chambers are to (1) prevent air bubbles from moving from the main capillary channel to the reaction chambers downstream and perhaps (2) to create a more uniform flow of fluid as it moves from a high capillary pressure area to the reaction chambers downstream (Ghosh et al., 2020) (Olanrewaju et al., 2018). The detailed motivations for each of these shapes are discussed in their respective sections below.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/a/a0/T--Waterloo--processCapillaryPumpLower.png" className={styles.design_img} style={{borderRadius: 20, width: '70%', height: '70%', marginLeft: '15%'}}></img>
                        <div className={overallStyles.figure_text}>Sample of the lower common components of the capillary pump with oblong microstructures as an example.</div>
                    </div>
                    <div className={overallStyles.description}>
                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={styles.sub_sub_heading}>Capillary Pump Design: Iteration 1</span>
                        </div>

                        <p>Our initial iteration utilized a high-pressure capillary pump consisting of oblong shapes that are 400 by 200 μm. These serve as posts in the chamber. According to Ghosh et al. (2020) [a], the motivation for a high-pressure capillary pump is to prevent reagents from accumulating in and around the edges of the posts and walls. This also facilitates rapid fluid flow from the openings to the reaction chambers.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/1/1e/T--Waterloo--processOblongiter1.png" className={styles.design_img} style={{borderRadius: 20, width: '100%', height: '100%'}}></img>
                        <div className={overallStyles.figure_text}>Full image of iteration 1.</div>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Some benefits of this design include high-pressure creation and strong mixing of the reagent in the capillary pump chamber. Some drawbacks of this design include its relatively large size and the more condensed microstructures. This could pose challenges during manufacturing. Smaller microstructures require more precise tools and may have an impact on manufacturing methods and cost.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={styles.sub_sub_heading}>Capillary Pump Design: Iteration 2</span>
                        </div>

                        <p>Our second design is quite different from our first design in terms of its shape and purpose. Treeline designs are typically used to pump fluid through chambers for assay purposes, but can result in different capillary pressures in different areas of the pump. For example, the pressure in a long branch of a chamber will have accumulated much higher pressure than in the meeting point of a few branches, where the shape is less uniform and the area is bigger (Olanrewaju et al., 2018).</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/b/b4/T--Waterloo--processOblongiter2.png" className={styles.design_img} style={{borderRadius: 20, width: '100%', height: '100%'}}></img>
                        <div className={overallStyles.figure_text}>Full image of iteration 2.</div>
                    </div>
                    <div className={overallStyles.description}>
                        <p>A problem that may arise with this design is lower capillary pressure due to wider branches (compared to the oblong microstructures in the previous design). However, this design is easier to manufacture in terms of precision and material costs. If we require more delays on our chip, this design could potentially provide bubbleless, even fluid flow.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={styles.sub_sub_heading}>Capillary Pump Design: Iteration 3</span>
                        </div>

                        <p>The last iteration of our capillary pump design utilizes a combination of circular posts and linear walls, forming a dumbbell shape. According to literature, balled lines have lower flow rates than treelines (Zimmermann et al., 2007). It is noted that it may be filled in an orientation perpendicular to the inlet shown in Figure 8 below, with fluid flow facing the round post, parallel to the lines. This is because the presence of a wall between round posts will greatly limit the flow of a liquid.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/1/10/T--Waterloo--processOblongiter3.png" className={styles.design_img} style={{borderRadius: 20, width: '100%', height: '100%'}}></img>
                        <div className={overallStyles.figure_text}>Full image of iteration 3.</div>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Similar to the tree line design, a problem with this design is its lower capillary pressure compared to the symmetric oblongs. This, combined with the slightly shorter chamber length of designs 2 and 3, may cause the pump to not form any positive pressure at all, resulting in a failing capillary pump. A benefit of this design is the increased distribution of fluid flow across the whole capillary chamber. There is a lower risk of fluid only flowing along a linear path at any point in the chamber since the shape of the microstructures is so irregular. Compared to symmetric lines (iteration 2), there is a lower risk of undisturbed flow happening in the chamber (Zimmermann et al., 2007).</p>

                        <p>Due to the high capillary pressure generation and suitability for reagent mixing, the oblong capillary pump structure is chosen for the final chip assembly design.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Selection of Chip Material</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>We looked into multiple materials in order to determine whether they fulfilled certain characteristics, such as surface hydrophilicity and ability to be biotinylated, while still being cost-effective and practical to fabricate. In order to evaluate possible candidates, we researched various materials used in microfluidic chips and outlined the characteristics of each candidate: glass, PDMS (polydimethylsiloxane), COC (cyclic olefin copolymer), and thiol-ene polymers.</p>
                        
                        <p>The first material that we looked into was glass. On one hand, glass is chemically inert, biocompatible, and impermeable to gas. Additionally, it is easy to biotinylate and has excellent optical transparency (Ghosh et al., 2020). On the other hand, glass is relatively expensive, and its hardness makes it difficult to construct and etch (Ghosh et al., 2020).</p>

                        <p>The second material that we looked into was PDMS, also known as polydimethylsiloxane. PDMS is easy to fabricate and inexpensive. It is currently the most commonly used material in microfluidic chips. Additionally, it is gas-permeable, biocompatible, and non-toxic. It can be biotinylated, and complex microfluidic designs can be made by stacking layers (Ghosh et al., 2020). PDMS is naturally hydrophobic, but it can be treated to control the hydrophobicity (Ghosh et al., 2020).</p>

                        <p>Additionally, we also looked into cyclic olefin copolymer, also known as COC. On one hand, this amorphous polymer has good biocompatibility and high transparency. Additionally, it can be biotinylated (Ali Aghvami et al., 2017). Nevertheless, one disadvantage of COC is that hydrophobicity treatments are transient on this material relative to PDMS (Oh et al., 2013). Additionally, the literature on COC surface treatments is much less robust when compared to the literature regarding PDMS (Oh et al., 2013).</p>

                        <p>Finally, we looked into thiol-ene polymers. These polymers are easy to fabricate and manipulate, and can be easily biotinylated (Sticker et al., 2020). These polymers, however, are prohibitively expensive, and there are fewer suppliers available for purchase (Sticker et al., 2020).</p>

                        <p>We then evaluated the properties of each material, and finally decided to use PDMS as the chip material. PDMS is cost-effective, easy to fabricate and handle, and can be easily biotinylated (Ghosh et al., 2020). While PDMS’s surface is naturally hydrophobic (Tan et al., 2010), it can easily be pre-treated in order to regulate and decrease its hydrophobicity (Tan et al, 2010; Trantidou et al., 2017). These pre-treatments are further explained in the Build section below. Additionally, the literature on the fabrication and pre-treatment of PDMS for microfluidics is extremely robust relative to the other materials.</p>
                    </div>
                </Collapsible>

                <Collapsible open title="Build">
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Computer-aided Chip Assembly Design</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>A complete assembly of the microfluidic chip is built and shown below. The specific dimensions are also labelled and presented. The team used OnShape to create the CAD model throughout the year.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/8/8c/T--Waterloo--DimensionedFullChip.png" className={styles.design_img} style={{borderRadius: 20}}></img>
                        <div className={overallStyles.figure_text}>Dimensioned drawing of the microfluidic chip.</div>
                    </div>

                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/9/90/T--Waterloo--Cornerview_assembly.png" className={styles.design_img} style={{borderRadius: 20, marginLeft: '5%'}}></img>
                        <div className={overallStyles.figure_text}>Assembly of the microfluidic chip. Note that the top plane surfaces are transparent for easy visualization of the chip inner components.</div>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Pretreatment of PDMS</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>As discussed in the Design section above, PDMS, or polydimethylsiloxane, was chosen as the polymer material to line the inside of the microfluidic chip. PDMS is widely used for the fabrication and prototyping of microfluidic chips as well as for other purposes such as contact lenses. It is usually supplied with two components, a base elastomer and a curing agent. PDMS as a material is hydrophobically classified as having a water contact angle greater than 100 degrees. This has negative consequences for droplet-based microfluidic chips, such as the one utilized in our project. There have been numerous studies investigating methods to reduce the hydrophobicity of the material ranging from physical methods to chemical methods; however, many have proven to be either unsuccessful or temporary.</p>
                        
                        <p>In our project hydrophobicity poses a problem as the PDMS can absorb hydrophobic molecules present in urine and thus expand and deform in the microfluidic assay. Previous attempts, such as UV irradiation and plasma oxidization, lead to the PDMS generally returning to a hydrophobic state after only a few minutes. Other treatment options last from a matter of weeks to months, but none are permanent. The treatment explored was using the deposition of polyvinyl alcohol (PVA) through plasma treatment. PVA is a hydrophobic polymer that can be irreversibly adsorbed onto a hydrophobic polymer such as PDMS. This absorption is done through a matter of means such as via heat immobilization following plasma treatment, plasma oxidation, and the covalent attachment of a 3-aminopropyl linker via the synthesis of a PVA PDMS copolymer micro-suspension. The pretreatment method that we chose to use for our microfluidic assay was to coat the PDMS microfluidic chip channels with PVA immediately after plasma treatment. Plasma treatment refers to the use of oxygen to introduce polar functional groups and change the surface properties. In the case of PDMS, it increases the -OH groups on the surface, which form strong covalent bonds. In turn, these improve bonding characteristics between the PVA and the PDMS. In previous studies, glass has also been used to bond with the PDMS. The first step involves dissolving the PVA in water, and then adding the solution to Milli-Q water (1% by weight) and stirring at room temperature for 40 minutes. The temperature is then gradually increased to 100°C and stirred again. This decreases the concentration of PVA to around 87-90%, which is found to be more effective than PVA at over 99%. The temperature is then reduced to 65°C, and the solution is stirred overnight. The PDMS is then degreased, blow-dried, and placed inside a plasma cleaner. From there the plasma treatment begins with an oxygen flow rate of 20 sccm and a pressure of 0.67 mbar. The specific configuration of the plasma cleaner is 100W for 1 min. The PVA solution is then poured onto the plasma-treated surface using a plastic syringe and left for 10 minutes to coat. The excess PVA solution is removed using pressurized nitrogen and heating to 110°C for 15 minutes removing any residual moisture. For the channels of the chip, the PVA is passed using a syringe and pump. The residual PVA is removed the same way using pressurized nitrogen, and the device is heated to 110°C for 15 minutes. Contact angle taken before treatment and after treatment is then compared, which should ideally show a decrease in contact angle and thus a greater surface wettability and hydrophilicity.</p>
                        
                        <p>Through previous attempts, it was seen that this method of treating the hydrophobicity resulted in long-term and sustained hydrophilicity as compared to other methods. Average contact angles were 24.9 degrees for PVA 87%, while using higher concentrations of PVA led to a higher contact angle. Further storage under a temperature of -80°C can maintain hydrophobicity for plasma exposed PDMS for almost 1000 days. At 100W this also had a positive correlation with the length of hydrophilic properties which sustain for about 30 days at a contact angle of 21 degrees. Other methods looked into involved the physical patterning of the PDMS surface; however, patterning within channels was found to be extremely difficult. Due to COVID-19, lab access was restricted and none of the procedures were able to be performed, as the pretreatment protocol required specialized equipment only present in Waterloo labs. Therefore it is our hope that this procedure for treating PDMS can be used for future projects.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Methods for the Conjugation of Biomolecules to PDMS</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Key components of the microfluidic assay are the test and control chambers. Recall that the test chamber must contain molecules that can detect the analyte of interest and produce a signal; in a similar sense, the control chamber must contain a molecule that always produces a signal upon contact with the sample. In order to achieve this, any molecules involved in detection and signal production must be bound to the chambers in a stable fashion. Specifically, these specific molecules must be securely conjugated to the chamber material (PVA-treated PDMS) such that the internal chambers are able to successfully retain all the required attached molecules during fabrication, processing, storage and usage of the microfluidic assay.</p>

                        <p>We used different methods to ensure optimal binding for each unique molecule conjugating to the test and control chambers. Specifically, methods for phenylethylamine (PEA) and mRNA were needed, as these were the ADHD-associated analytes of interest that we planned to quantify using the microfluidic chip. In addition, a method for protein conjugation was needed in order to conjugate streptavidin to the control chamber, as a biotin-streptavidin interaction to a biotinylated protein would be used to elicit a control signal. In all cases, covalent conjugation was used. This was to ensure that binding would occur between the chamber and the biotinylated binding molecule we engineered.</p>

                        <p>Three main conjugation methods were identified in literature pertaining to microfluidic chip assays (Kim &amp; Herr, 2013):</p>
                        
                        <p>
                        <ol className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Physisorption: Molecules are adsorbed to a surface via intermolecular forces achieved through simple immersion of the surface in a solution.</li>
                            <li>Bioaffinity Interaction: Molecules are attached to a surface through specific binding phenomena existing in nature (such as the biotin-streptavidin bond).</li>
                            <li>Covalent Conjugation: Molecules are attached to a surface through a covalent bond and the use of many active reagents.</li>
                        </ol>
                        </p>

                        <p>We wanted our chosen method of conjugation to be independent of environmental factors, such as pH and temperature. This ruled out the physisorption method, as the resulting bond strength is heavily dependent on such factors (Kim et al., 2013). Furthermore, we wanted our conjugation method to be secure so our attached molecules would not detach from agitation. Thus, covalent bonding was chosen as the method for conjugation considering its greater strength compared to bioaffinity interactions. Through this method, we could ensure the bond between the sample pad and the binding molecule was secure. The strength of the covalent bond guarantees system durability in the face of external factors.</p>

                        <p>The covalent method acts through amino groups on glutaraldehyde (GA), which has two reactive ends. These ends allow GA to act as a cross linker between the PDMS chamber and the molecule we want to covalently bind. Another compound (3-Aminopropyl)triethoxysilane (APTES) is able to attach to both the PDMS chamber and GA, creating a strong interaction and bond between the cross linker and the chamber (Kim et al., 2013). GA is a common crosslinker used in the field of biochemistry given its ability to effectively stabilize biomaterials (Pal et al., 2013). Therefore, carrying out crosslinking with GA gives our system an extra degree of stability.</p>

                        <p>To implement covalent conjugation, a treatment containing APTES is first used to coat the surface of the chambers. APTES binds to the hydroxyl groups on the surface of the PDSM. Then a GA treatment is used, binding GA to APTES. Finally, the system is treated with our chosen molecule, which will bind to GA covalently at its free amine residues (Pal et al., 2013). Thus, this method is appropriate for conjugation of PEA and proteins (at their lysine residues or N-termini).</p>
                        
                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Protocol for Covalent Conjugation of Biomolecules Containing Free Amine Groups:</span>
                        </div>

                        <p>The procedure as outlined below was used for the covalent conjugation of both PEA in the test chamber and streptavidin in the control chamber (Thomsen et al., 2007):</p>

                        <p>
                        <ol className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Pretreat the PDMS sample pad with pyrogenic silicic acid (silicon oxide powder in a prepared oxyhydrogen flame) to add -OH groups to the surface of the PDMS.</li>
                            <li>Conduct in-flow treatment (0.15 mL/min) of a 10% w/v solution of APTES at 80°C for 3 hours.</li>
                            <li>Derivatize the silanized microstructure in a 2.5% w/v solution of glutaraldehyde (GA) for 2 hours at room temperature.</li>
                            <li>Recirculate 95 μg/mL of the molecule to be immobilized over the microstructure for 10-15 hours to achieve covalent immobilization. The specific amount of immobilized molecule can be determined through the difference in its concentration of the solution before and after immobilization.</li>
                            <li>Circulate bovine serum albumin (BSA) blocking buffer (20 mg/mL) through the microstructure for 30 minutes to ensure that the unbinded areas of PDMS are blocked from picking up extraneous molecules in the urine that may interfere with the function of the microarray.</li>
                        </ol>
                        </p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Covalent Conjugation of RNA:</span>
                        </div>

                        <p>In the case of conjugation of RNA, a slight modification is necessary, as RNA does not contain free amine groups. Prior to adding the glutaraldehyde, an aqueous solution of pyridinium chlorochromate (PCC/H<sub>2</sub>O) is circulated around the pad. Following this step, SOCl is also circulated around the pad, and finally, an mRNA solution is circulated in order to achieve conjugation (during which mRNA is conjugated at its 3′ OH group).</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Lyophilization Protocols</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Lyophilization, or freeze-drying, is the process of removing ice or frozen solvents via sublimation as a means of preserving heat-sensitive materials such as proteins (Barley, n.d.). Lyophilization is necessary to preserve the contents of the microfluidic assay, as the assay contains proteins, small biomolecules, and potentially RNA, all of which are biomolecules that must be kept viable for storage until the time of use.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Lyophilization of Small Biomolecules</span>
                        </div>

                        <p>The following procedure for lyophilization of small biomolecules, such as PEA or chemiluminescence substrates, was adapted from Ghosh and Ahn (2019):</p>

                        <p>
                        <ol className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Pre-freeze the <strong>substrate solution</strong> of <strong>Amplex Red</strong> as well as the <strong>enhancer solution</strong> for Amplex Red in <strong>liquid nitrogen</strong> for 5 minutes.</li>
                            <li>Freeze-dry the above solutions in a freeze-drying system (ex: <strong>Labconco Lyophilizer HRFD-SCIL</strong>) set at -54°C with 0.010 mbar pressure for 24 hours.</li>
                        </ol>
                        </p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Protein Lyophilization</span>
                        </div>

                        <p>The following procedure for protein lyophilization was adapted from a previous study which tested four formulations for lyophilization of 15 different proteins over a range of molecular weights and structural properties (Roughton et al., 2013). This study used sucrose, glycine, urea, and guanidine hydrochloride as additives in the lyophilization formulation. The proteins were dialyzed to remove any extraneous additives.</p>

                        <p>The solution preparation procedure below was adapted from Roughton et al. (2013):</p>

                        <p>
                        <ol className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Dissolve protein to 2.0 mg/mL in a potassium phosphate buffer (20 mM, pH 7.4).</li>
                            <li>Dialyze protein solution against a phosphate buffer (20 mM, pH 7.4) for 24h at 4°C. Switch out the dialysis buffer twice within the 24h period - once after 1h elapsed time, and once more after 2h total elapsed time.</li>
                            <li>Filter protein solution through a 0.2 µm syringe filter.</li>
                            <li>Prepare sucrose (2.0 mg/mL), glycine (2.0 mg/mL), urea (2.0 M), and guanidine-HCl (2.0 M) solutions in phosphate buffer. Filter these solutions through a 0.2 µm syringe filter, and store at 4°C.</li>
                        </ol>
                        </p>

                        <p>The lyophilization procedure was adapted from Roughton et al. (2013):</p>

                        <p>
                        <ol className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Mix protein stock solution with an additive solution to a final protein concentration of 1.0 mg/mL.</li>
                            <ul className={overallStyles.description} style={{marginTop: 5, marginBottom: 5}}>
                                <li>The protein to additive ratio should be 1:1 by weight for sucrose and glycine, with final urea and guanidine-HCl concentrations of 1.0 M. To encourage cake formation, 5% trehalose should be added as a key additive. This is based on the personal experience of one of our lab members, and differs from the procedure of Roughton et al. (2013).</li>
                            </ul>
                            <li>Add 400 µL of the lyophilization formulation to a lyophilization vial.</li>
                            <li>Lyophilize samples in a VirTis adVantage Plus freeze dryer with the following temperature cycle:</li>
                            <ol className={overallStyles.description} style={{marginTop: 5, marginBottom: 5}}>
                                <li>Pre-cool shelves at -2°C for 15 min.</li>
                                <li>Freeze samples at -40°C for 50 min.</li>
                                <li>Dry samples under vacuum (100 mTorr) at -35°C for 10 h, -20°C for 8 h, -5°C for 6 h, 10°C for 6 h, 25°C for 6 h, and 4°C for 0.5 h. This removes water by sublimation.</li>
                            </ol>
                        </ol>
                        </p>
                    </div>
                </Collapsible>

                <Collapsible open title="Test">
                    <div className={overallStyles.description} style={{marginTop: 30}}>
                        <p>Due to unforeseen circumstances (one of which was a global pandemic, and the other of which was unforeseen maintenance and construction of our lab space by the University), we unfortunately did not have lab access this year. As a result, we were unable to experimentally test the microfluidic assay with all of its components. With that said, the following methodology outlines how we have used computational modelling to gain insight into the physical dynamics within the microfluidic chip, as well as our plan of action to test our microfluidic assay chip if we had lab access.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Fluid Dynamics Simulation with COMSOL</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>We completed microfluidics simulations in COMSOL on parts of our chip to model the flow of the fluid through the microchannels. This was done by using the Laminar Flow physics interface in a Time Dependent Study on COMSOL. The following equations were solved by COMSOL to model the laminar flow.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <img src="https://2021.igem.org/wiki/images/9/9b/T--Waterloo--flowsetting.png" className={styles.design_img} style={{borderRadius: 20}}></img>
                        {/* <div className={overallStyles.figure_text}>Dimensioned drawing of the microfluidic chip.</div> */}
                    </div>
                    <div className={overallStyles.description}>
                        <p>Here are the velocity and pressure plots for a serpentine microchannel and for the spiral test chambers.</p>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                            <img src="https://2021.igem.org/wiki/images/1/1a/T--Waterloo--capillarypressure.png" className={styles.design_img} style={{borderRadius: 20, width: '43%'}}></img>
                            <img src="https://2021.igem.org/wiki/images/e/ec/T--Waterloo--capillaryVelocity.png" className={styles.design_img} style={{borderRadius: 20, width: '43%'}}></img>
                        </div>
                    </div>
                    <div className={overallStyles.figure_div}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                            <img src="https://2021.igem.org/wiki/images/f/f2/T--Waterloo--spiralpressure.png" className={styles.design_img} style={{borderRadius: 20, width: '43%'}}></img>
                            <img src="https://2021.igem.org/wiki/images/c/c6/T--Waterloo--spiralvelocity.png" className={styles.design_img} style={{borderRadius: 20, width: '43%'}}></img>
                        </div>
                    </div>
                    <div className={overallStyles.description}>
                        <p>The above are preliminary examples of how the chip design can be validated in COMSOL. In the future, we would like to perform simulations on the entire assembled chip, so that we can provide an accurate estimate of the length of time the fluid will take to flow through the chip, or create the chip and conduct experimental analysis.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading} style={{paddingBottom: 0}}>Assessment of Streptavidin Binding to Evaluate the Success of PDMS Derivatization, Conjugation, and Lyophilization</span>
                    </div>
                    <div className={overallStyles.description}>
                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Preliminary Assessment: Assessment of PDMS Alone</span>
                        </div>

                        <p>The success of our microfluidic assay is contingent on the ability of molecules to remain covalently conjugated to PDMS when desired. Thus, it would need to be verified that PDMS would be successfully derivatizated by PVA treatment, that the conjugation method would be successful, and that the lyophilization and resuspension steps would not impede the functionality of the lyophilized molecules. A way to test the success of all of these steps would involve an experiment testing the ability of streptavidin in the control chamber to bind biotin. Without successful derivatization of the PDMS surface, conjugation of streptavidin to the control chamber would not be successful. As well, assessment of binding after lyophilization by running a biotin solution would give insight into whether lyophilization is somehow damaging the effectiveness of the lyophilized molecules (in this case, streptavidin).</p>

                        <p>To test these, the derivatization, conjugation, and lyophilization methods from the Build section should be adapted for a small, test-scale PDMS film. Specifically, the following procedure, adapted from Thomsen et al. (2007), should be performed:</p>
                        
                        <p>Materials:</p>
                        <p>
                        <ul className={overallStyles.description} style={{marginTop: 0}}>
                            <li>PDMS film</li>
                            <li>Pyrogenic silicic acid</li>
                            <li>10% w/v (3-Aminopropyl)triethoxysilane (APTES)</li>
                            <li>2.5% w/v Glutaraldehyde</li>
                            <li>5 mg/mL streptavidin</li>
                        </ul>
                        </p>

                        <p>Procedure:</p>
                        <p>
                        <ol className={overallStyles.description} style={{marginTop: 0}}>
                            <li>Soak a PDMS film with pyrogenic silicic acid (Thomsen et al., 2007).</li>
                            <li>Drain the pyrogenic silicic acid and rinse the PDMS film.</li>
                            <li>Incubate the PDMS film with a 10% w/v solution of APTES at 80°C for 3 hours.</li>
                            <li>Drain the APTES solution and rinse the PDMS film.</li>
                            <li>Incubate the PDMS film with a 2.5% w/v solution of glutaraldehyde (GA) on a rocking shaker for 2 hours at room temperature.</li>
                            <li>Drain the glutaraldehyde solution and rinse the PDMS film.</li>
                            <li>Incubate the PDMS film with the 5 mg/mL solution of streptavidin on a rocking shaker for 10-15 hours at 4˚C.</li>
                            <li>Aliquot 1 mL of the residual solution for determination of streptavidin concentration. This can be done by absorbance at 280 nm, or using a Bradford assay.</li>
                            <li>Drain the rest of the residual solution and rinse the PDMS film.</li>
                            <li>Incubate the PDMS film with a solution of bovine serum albumin (BSA) on a rocking shaker for 30 minutes at room temperature.</li>
                            <li>Drain the residual solution and rinse the PDMS film.</li>
                        </ol>
                        </p>
                        <p>Knowing the initial streptavidin concentration and the determined concentration of the residual streptavidin solution, the amount of streptavidin conjugated to the PDMS film can be determined.</p>

                        <p>The streptavidin-conjugated PDMS film can then be lyophilized by first freezing the film in liquid nitrogen for 5 minutes, then utilizing a freeze-drying system such as the Labconco Lyophilizer HRFD-SCIL set at -54°C with 0.010 mbar pressure for 24 hours.</p>

                        <p>In the meantime, fluorophore-conjugated biotin molecules can be prepared using principles of organic chemistry related to carboxylic acid derivatives. First, HCl should be added to a biotin solution until the pH is around 1. The molar amount of biotin should be the same as the molar amount of streptavidin conjugated to the PDMS film. The purpose of lowering pH to around 1 is as follows: biotin has a carboxylic acid/carboxylate group; adding HCl to a pH of around 1 protonates any carboxylates, thereby preparing biotin for the subsequent reaction. From here, the acidified biotin should be reacted with an equimolar amount of thionyl chloride. This produces a “biotin chloride” that can then be reacted with an equimolar amount of a nucleophilic fluorophore, which effectively substitutes with the chlorine atom to produce biotin conjugated to a fluorophore.</p>

                        <p>From here, the freeze-dried PDMS film can be resuspended in the fluorescent biotin solution and incubated on a rocking shaker for 20 minutes (which is the same as the assay time for NeuroDetech’s microfluidic assay chip). The residual solution can be drained, and its fluorescence measured using a spectrophotometer.</p>

                        <p>Since the fluorescent biotin and streptavidin were in equimolar amounts, and since the binding affinity of streptavidin to biotin is so strong, it is expected that there should be little to no fluorescence in the residual solution, since most or all of the fluorescent biotin should have been bound to the streptavidin on the PDMS film.</p>

                        <div style={{margin: '20px 0 40px 0'}}>
                            <span className={overallStyles.subheading} style={{marginLeft: 0}}>Assessment in Microfluidic Assay Chip Conditions</span>
                        </div>

                        <p>After construction of the chip, the general method for the preliminary assessment (described above) would need to be repeated to ensure that the success of derivatization, conjugation, and lyophilization for the PDMS film could also be replicated in the actual microfluidic assay chip.</p>

                        <p>To do this, a “sacrificial” microfluidic assay chip should be prepared, such that the sample can be recovered after running the sample. Once again, fluorescent biotin should be prepared, as described in the preliminary assessment method (above).</p>

                        <p>From here, the fluorescent biotin sample should be flowed through the sacrificial microfluidic assay, as if the fluorescent biotin sample was an actual urine sample. Again, the molar amount of fluorescent biotin should be the same as the molar amount of streptavidin conjugated to the control chamber. The expected result is that the fluorescent biotin sample should bind to the conjugated streptavidin at the control chamber, thereby producing fluorescence at the control chamber. As well, the sample fluid should be recovered, and its fluorescence measured; the fluorescence should be negligible, as most (if not all) of the biotin should have been bound at the control chamber. If these expected results are observed, then it would be demonstrated that the methods for PDMS derivatization and conjugation, as well as the viability of lyophilization, would be successful in the microfluidic assay chip.</p>
                    </div>
                </Collapsible>
                <Collapsible open title="Learn">
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Chip Design Improvements and Next Steps</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>The above drying chamber design is quite similar in structure to the source paper. While the test sample used in the source is blood, NeuroDetech uses urine as the test sample; as urine is less viscous than blood, the flow rate will be faster in the former. For this reason, the probability that air bubbles will generate increases, potentially lowering device sensitivity. Future iterations will work to decrease the flow rate within the device. This can be accomplished by increasing the quantity or intensity of delay valves and altering microstructure sizes and shapes. One way to decrease flow rate is to add a delay in both paths one and two; hence slowing the flow rate in both paths would improve substrate recovery and thus increase test sensitivity.</p>

                        <p>An addition of a hydrophobic vent between path two and the test chamber would decrease the probability of trapped air bubbles, thus increasing efficiency and accuracy. Another possible improvement is to shrink the scale of the microstructures, in order to increase the number of microstructures for each capillary pump and increase laminar flow. At the microscale, fluid flow will have less turbulence and bubble formation can be reduced. Lastly, it would be optimal to create all of the capillary pump exteriors with identical geometries for a future design. This design oversight should be improved for future COMSOL simulations to mitigate any errors that might have arisen.</p>

                        <p>Experimental results of the newly developed POC test will allow designers to adapt the reaction time, flow rate, and other factors to suit their purposes by changing channel lengths and widths.</p>
                    </div>
                    <div className={overallStyles.text_div}>
                        <span className={overallStyles.text_heading}>Concerns Regarding Streptavidin Solubility</span>
                    </div>
                    <div className={overallStyles.description}>
                        <p>Although the use of streptavidin and biotin as a general-purpose method to bind binding molecules at the control chamber is, in theory, perfectly functional, a question arose during the Design phase of this engineering cycle: would a high concentration of streptavidin conjugated to the control chamber result in solubility issues? Streptavidin is a rather large protein, and is tetrameric. Would there be an alternative version of streptavidin that could be used to decrease the risk of solubility issues arising from the impracticality of shoving many tetrameric streptavidin molecules into a small space?</p>

                        <p>As it turns out, an engineered monomeric form of streptavidin exists; though its binding affinity is not as high as tetrameric streptavidin, its monomeric form mitigates the aforementioned solubility issues (DeMonte et al., 2013). As a result, we decided to utilize monomeric streptavidin in the control chamber of our microfluidic assay. To address the issue of reduced affinity, we decided to utilize computational rational protein design to improve the affinity of monomeric streptavidin; this process is discussed in the Protein Optimization engineering cycle.</p>
                    </div>
                </Collapsible>
            </div>
        )
    }
}

export default Microfluidic;