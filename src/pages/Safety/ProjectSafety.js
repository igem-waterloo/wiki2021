import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import overallStyles from "../overall.module.scss";

class ProjectSafety extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>
                        Project Safety Considerations
                    </span>
                    <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                        The following safety considerations were accounted for during the design of our project:
                    </div>
                    <ul className={overallStyles.description}>
                        <li> 
                            We have chosen non-pathogenic chassis organisms which are described as Biosafety Level 1 (<i>E. coli DH5alpha, E. coli BL21(DE3)</i>, and <i>E. coli Rosetta 2(DE3)pLysS Singles</i>).                        </li>
                        <li> 
                            Our project utilizes CRISPR-Cas13 to target mRNA from human genes. Though the risk of accidental targeting of mRNA within the body is low (unless CRISPR-Cas13 is accidentally ingested), caution should be exerted to avoid any such situations. Any work with the CRISPR guide RNAs or Cas13 would be done in a separate area, and the guide RNAs and Cas13 would only be combined only once absolutely ready. Proper disposal of gloves and used CRISPR-Cas13-related solutions into biohazard waste would be followed. Gloves, a lab coat, and goggles would be minimum PPE.
                        </li>
                        <li> 
                            Glutaraldehyde and (3-Aminopropyl)triethoxysilane, or APTES, are both used in the process of covalently conjugating biomolecules to polydimethylsiloxane (PDMS), the microfluidic assay material. Glutaraldehyde and APTES are both toxic and highly irritating to mucous membranes (such as the eyes or respiratory tract). As a result, when carrying out covalent conjugation to PDMS, we would ensure to handle these chemicals only in a fume hood, with gloves, goggles, and a lab coat being minimum PPE.  
                        </li>
                        <li>
                            Phenylethylamine (PEA) is one of the ADHD-associated analytes of interest, as it is an ADHD-associated neurotransmitter. Regarding safety, PEA is highly flammable, toxic upon ingestion, and poses a risk to aquatic life. All work with PEA would be done in the fume hood, and PEA-containing waste would be collected in a designated waste container to be disposed of at the University’s hazardous waste disposal centre.. To minimize exposure to pure PEA, PEA would be dissolved into aqueous solution as soon as possible.
                        </li>
                    </ul>
                    <div className={overallStyles.description}>
                        For more information about safe design and usage in relation to the proposed implementation plan for this project, see the 
                        <Link to="/Team:Waterloo/Implementation">
                            <span> Implementation </span>
                        </Link>
                        page.
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectSafety;