import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";
import styles from "./chipdesign.module.scss";
import Collapsible from '../../utils/Collapsible';

class ChipDesign extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        Microfluidic Capillary Assay Chip Design 
                    </div>
                    <div className={overallStyles.description}>
                        In order to establish a standardized and safe methodology of implementing NeuroDetech, it is essential that this diagnostic test is protected by a patent. Existing under a patent ensures that the exact same product is produced with the same accuracy by one manufacturer. Additionally, protecting NeuroDetech with a patent comes with the ability to outsource manufacturing costs to a 3rd-party pharmaceutical diagnostics company with the technology to produce it at a much lower cost, to ultimately lower the cost of the test to patients. This provides a profitable exchange to both manufacturer (who obtains a share of patent rights) and patient, at the expense of the designer. These costs, however, are absorbed by the fact that more tests are able to be sold, and the fact that it is typically cheaper for the designer to employ contract manufacturing than to build multiple units themselves.                
                    </div>
                    <Collapsible open title="Overall Chip Mechanical Design">
                        <div className={overallStyles.text_div}>
                            <span className={overallStyles.subheading} style={{marginLeft: "0"}}>Microfluidic Chip Mechanical Design</span>
                        </div>
                        <div className={overallStyles.description}>
                            <p>The main inspiration for the design of the NeuroDetech lab chip is a similar point-of-care diagnostic device for infectious diseases created by Ghosh et al. (2020). The testing device designed by Ghosh et al. (2020) prioritized functions such as accessibility and speed which are applicable to NeuroDetech. Hence many concepts from this paper, like the device dimensions and parts sequence, are incorporated into our work. Overall, the objective of our work is to create a user-friendly tool for quantitative biomolecular detection. (Ghosh et al., 2020)</p>
                            
                            <p>While designing the device, multiple factors were taken into account, including flow and reaction rate. The concentration of PEA in the sample is low, which can be difficult to detect. In the design of the chip, both capillary and surface tension forces contribute to the generation of transient flow within the microstructures due to the pressure gradient. The high surface-to-volume ratio increases antigen binding, ensuring more precise and accurate results. In summary, this microfluidic device utilizes many principles of fundamental fluid dynamics. The model of the NeuroDetech lab chip is shown below.</p>
                        </div>
                        <div className={overallStyles.figure_div}>
                            <img src="https://2021.igem.org/wiki/images/9/90/T--Waterloo--Cornerview_assembly.png" className={styles.design_img} style={{borderRadius: 20, width: '80%', height: '80%'}}></img>
                            <div className={overallStyles.figure_text}>Assembly of the microfluidic chip. Note that the top plane surfaces are transparent for easy visualization of the chip inner components.</div>
                        </div>
                        <div className={overallStyles.figure_div}>
                            <img src="https://2021.igem.org/wiki/images/5/5e/T--Waterloo--LabelledChipGood.png" className={styles.design_img} style={{borderRadius: 20, width: '50%', height: '50%', marginLeft: '25%'}}></img>
                            <div className={overallStyles.figure_text}>Full assembly of the microfluidic chip. Fluid flows from the top left through the capillary pump through to the spiral control chamber, then to the spiral test chamber. At the same time, fluid flows from the top right through the drying chamber and into the spiral test chamber.</div>
                        </div>
                        <div className={overallStyles.description}>   
                            <div style={{margin: '20px 0 40px 0'}}>
                                <span className={overallStyles.subsubheading}>Sample Loading Chamber and Drying Chamber Design</span>
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
                                <span className={overallStyles.subsubheading}>Capillary Pump Design</span>
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
                                <span className={overallStyles.subsubheading}>Capillary Pump Design: Iteration 1</span>
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
                                <span className={overallStyles.subsubheading}>Capillary Pump Design: Iteration 2</span>
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
                                <span className={overallStyles.subsubheading}>Capillary Pump Design: Iteration 3</span>
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
                    </Collapsible>
                    <Collapsible open title="Selection of Chip Material">
                        <div className={overallStyles.description}>
                            <p>We looked into multiple materials in order to determine whether they fulfilled certain characteristics, such as surface hydrophilicity and ability to be biotinylated, while still being cost-effective and practical to fabricate. In order to evaluate possible candidates, we researched various materials used in microfluidic chips and outlined the characteristics of each candidate: glass, PDMS (polydimethylsiloxane), COC (cyclic olefin copolymer), and thiol-ene polymers.</p>
                            
                            <p>The first material that we looked into was glass. On one hand, glass is chemically inert, biocompatible, and impermeable to gas. Additionally, it is easy to biotinylate and has excellent optical transparency (Ghosh et al., 2020). On the other hand, glass is relatively expensive, and its hardness makes it difficult to construct and etch (Ghosh et al., 2020).</p>

                            <p>The second material that we looked into was PDMS, also known as polydimethylsiloxane. PDMS is easy to fabricate and inexpensive. It is currently the most commonly used material in microfluidic chips. Additionally, it is gas-permeable, biocompatible, and non-toxic. It can be biotinylated, and complex microfluidic designs can be made by stacking layers (Ghosh et al., 2020). PDMS is naturally hydrophobic, but it can be treated to control the hydrophobicity (Ghosh et al., 2020).</p>

                            <p>Additionally, we also looked into cyclic olefin copolymer, also known as COC. On one hand, this amorphous polymer has good biocompatibility and high transparency. Additionally, it can be biotinylated (Ali Aghvami et al., 2017). Nevertheless, one disadvantage of COC is that hydrophobicity treatments are transient on this material relative to PDMS (Oh et al., 2013). Additionally, the literature on COC surface treatments is much less robust when compared to the literature regarding PDMS (Oh et al., 2013).</p>

                            <p>Finally, we looked into thiol-ene polymers. These polymers are easy to fabricate and manipulate, and can be easily biotinylated (Sticker et al., 2020). These polymers, however, are prohibitively expensive, and there are fewer suppliers available for purchase (Sticker et al., 2020).</p>

                            <p>We then evaluated the properties of each material, and finally decided to use PDMS as the chip material. PDMS is cost-effective, easy to fabricate and handle, and can be easily biotinylated (Ghosh et al., 2020). While PDMS’s surface is naturally hydrophobic (Tan et al., 2010), it can easily be pre-treated in order to regulate and decrease its hydrophobicity (Tan et al, 2010; Trantidou et al., 2017). These pre-treatments are further explained in the Build section below. Additionally, the literature on the fabrication and pre-treatment of PDMS for microfluidics is extremely robust relative to the other materials.</p>
                        </div>
                    </Collapsible>
                    <Collapsible open title="Computer-aided Chip Assembly Design">
                        <div className={overallStyles.description}>
                            <p>A complete assembly of the microfluidic chip is built and shown below. The specific dimensions are also labelled and presented. The team used OnShape to create the CAD model throughout the year.</p>
                        </div>
                        <div className={overallStyles.figure_div}>
                            <img src="https://2021.igem.org/wiki/images/8/8c/T--Waterloo--DimensionedFullChip.png" className={styles.design_img} style={{borderRadius: 20}}></img>
                            <div className={overallStyles.figure_text}>Dimensioned drawing of the microfluidic chip.</div>
                        </div>

                        <div className={overallStyles.figure_div}>
                            <img src="https://2021.igem.org/wiki/images/9/90/T--Waterloo--Cornerview_assembly.png" className={styles.design_img} style={{borderRadius: 20}}></img>
                            <div className={overallStyles.figure_text}>Assembly of the microfluidic chip. Note that the top plane surfaces are transparent for easy visualization of the chip inner components.</div>
                        </div>
                    </Collapsible>
                </div>
            </div>
        )
    }
}

export default ChipDesign;