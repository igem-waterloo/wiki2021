import React, { Component } from 'react';
import Collapsible from '../../utils/Collapsible';
import overallStyles from "../overall.module.scss";
import styles from "./microfluidic.module.scss";

class Microfluidic extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        Microfluidic Chip 
                    </div>
                    <Collapsible open title="Chip Model">
                        <div className={overallStyles.text_div}>
                            <div className={overallStyles.description}>
                                <p>The main inspiration for the design of the NeuroDetech lab chip is a similar point-of-care diagnostic device for infectious diseases created by Ghosh et al. (2020). The testing device designed by Ghosh et al. (2020) prioritized functions such as accessibility and speed which are applicable to NeuroDetech. Hence many concepts from this paper, like the device dimensions and parts sequence, are incorporated into our work. Overall, the objective of our work is to create a user-friendly tool for quantitative biomolecular detection. (Ghosh et al., 2020)</p>
                                
                                <p>While designing the device, multiple factors were taken into account, including flow and reaction rate. The concentration of PEA in the sample is low, which can be difficult to detect. In the design of the chip, both capillary and surface tension forces contribute to the generation of transient flow within the microstructures due to the pressure gradient. The high surface-to-volume ratio increases antigen binding, ensuring more precise and accurate results. In summary, this microfluidic device utilizes many principles of fundamental fluid dynamics. The model of the NeuroDetech lab chip is shown below.</p>
                            </div>
                        </div>
                        <div className={overallStyles.figure_div}>
                            <img src="https://2021.igem.org/wiki/images/9/90/T--Waterloo--Cornerview_assembly.png" className={styles.design_img} style={{borderRadius: 20, width: '80%', height: '80%'}}></img>
                            <div className={overallStyles.figure_text}>Assembly of the microfluidic chip. Note that the top plane surfaces are transparent for easy visualization of the chip inner components.</div>
                        </div>
                        <div className={overallStyles.figure_div}>
                            <img src="https://2021.igem.org/wiki/images/5/5e/T--Waterloo--LabelledChipGood.png" className={styles.design_img} style={{borderRadius: 20, width: '50%', height: '50%', marginLeft: '25%'}}></img>
                            <div className={overallStyles.figure_text}>Full assembly of the microfluidic chip. Fluid flows from the top left through the capillary pump through to the spiral control chamber, then to the spiral test chamber. At the same time, fluid flows from the top right through the drying chamber and into the spiral test chamber.</div>
                        </div>
                        <div className={overallStyles.text_div}>        
                            <div className={overallStyles.description}>   
                                <div style={{margin: '20px 0 40px 0'}}>
                                    <span className={overallStyles.subheading}>Sample Loading Chamber and Drying Chamber Design</span>
                                </div>

                                <p>The geometry of the NeuroDetech lab chip is critical to the chip’s function. The test begins when the sample is deposited into the loading chamber through a sample loading port located at the top of the chip. A hydrophobic spot in the middle of the loading chamber splits the sample into two equal parts (Ghosh et al., 2020). Separate pathways move the samples toward a series of small tubes then into the drying chambers.</p>

                                <p>Path one leads to the binding protein drying chamber, and path two leads to the chemiluminescent substrate drying chamber. There are 10 tubes leading to the binding protein drying chamber and 7 tubes leading to the chemiluminescent substrate drying chamber. The tubes help maintain pressure to transfer fluid into the drying chambers and prevent unwanted backflow into the loading chamber.</p>

                                <p>Both drying chambers have a grid of rectangular pillars to increase mixing, providing binding proteins with sufficient time and space to bind to target biomarkers (Ghosh et al., 2020). The chemiluminescent substrate drying chamber has a row of tubes separating sections of the grid to maintain fluid pressure; this also ensures that fluid does not enter the test chamber before the binding protein fluid. Ramps descending into and ascending out of the drying chambers help retain fluid in the drying chamber for a sufficient period of time for uniform mixing and drying (Ghosh et al., 2020).</p>

                                <p>The drying chambers connect to a series of delay valves with initially small diameters that progressively enlarge by widening the tube diameter; the fluid meniscus is thus increased in size, consequently decreasing capillary pressure. In turn, this helps ensure that no air bubbles form as the solution flows to the test chamber. The chemiluminescent substrate drying chamber pathway has a long serpentine delay tube in addition to the traditional delay valves, resulting in all the fluid from path two entering the reaction chamber only after all the fluid from path one has entered (Ghosh et al., 2020).</p>
                            </div>
                        </div>
                        <div className={overallStyles.figure_div}>
                            <img src="https://2021.igem.org/wiki/images/f/f5/T--Waterloo--LabelledDryingChamber.png" className={styles.design_img} style={{borderRadius: 20, marginLeft: '5%'}}></img>
                            <div className={overallStyles.figure_text}>Annotated loading and drying chamber.</div>
                        </div>
                        <div className={overallStyles.text_div}>
                            <div className={overallStyles.description}>
                                <div style={{margin: '20px 0 40px 0'}}>
                                    <span className={overallStyles.subheading}>Capillary Pump Design</span>
                                </div>
                                
                                <p>Based on our previous research and referenced studies, few considerations were determined to be particularly important for fluid flow in the capillary pump. Through background research, we identified factors that affect fluid flow in a capillary pump. These include wettability, frequency of microstructures in the flow chamber, and the geometry of the microstructures used to increase flow resistance. These factors are the foundation for determining flow rates due to capillary flow (Olanrewaju et al., 2018).</p>

                                <p>In general, more densely packed orientations of microstructures lead to higher flow resistance, in turn increasing flow pressure. Some of the key microstructure geometries commonly found in capillary pumps include tree lines, symmetric lines, balled lines, and posts. These structures must be small enough to generate enough capillary pressure for flow through the chamber (Olanrewaju et al., 2018).</p>
                            </div>
                        </div>
                        <div className={overallStyles.figure_div}>
                            <img src="https://2021.igem.org/wiki/images/b/be/T--Waterloo--processCapillaryPumpTypes.png" className={styles.design_img} style={{borderRadius: 10}}></img>
                            <div className={overallStyles.figure_text}>Various Capillary Pump Designs (Olanrewaju et al., 2018)</div>
                        </div>
                        <div className={overallStyles.text_div}>        
                            <div className={overallStyles.description}> 
                                <p>We chose to compare three different microstructures and their effect on fluid flow: (1) symmetric oblong shapes  (400 by 200μm); (2) treelines in the shape of a hexagon (thickness 1mm); and (3) balled lines (radius 500 μm, lines 1mm).</p>
                                <p>For a complete explanation of the comparison of designs, please navigate to the Microfluidic Chip Design section under the Engineering page. Due to the high capillary pressure generation and suitability for reagent mixing, the oblong capillary pump structure is chosen for the final chip assembly design. </p>
                            </div>
                        </div>
                        <div className={overallStyles.figure_div}>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                                <img src="https://2021.igem.org/wiki/images/b/b5/T--Waterloo--processOblongMicrostructures.png" className={styles.design_img} style={{borderRadius: 20, width: '28%', height: '28%'}}></img>
                                <img src="https://2021.igem.org/wiki/images/7/78/T--Waterloo--processTreeMicrostructures.png" className={styles.design_img} style={{borderRadius: 20, width: '26%', height: '26%'}}></img>
                                <img src="https://2021.igem.org/wiki/images/1/11/T--Waterloo--ProcessBalledlineMicrostructures.png" className={styles.design_img} style={{borderRadius: 20, width: '27%', height: '27%'}}></img>
                            </div>
                            <div className={overallStyles.figure_text}>
                                From left to right: Oblong microstructures. Treeline microstructures. Balled lines microstructures.
                            </div>
                        </div>
                    </Collapsible>
                    <Collapsible open title="Computer-aided Chip Assembly Design">
                        <div className={overallStyles.text_div}>
                            <div className={overallStyles.description}>
                                <p>A complete assembly of the microfluidic chip is built and shown below. The specific dimensions are also labelled and presented. The team used OnShape to create the CAD model throughout the year.</p>
                            </div>
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

export default Microfluidic;