import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";

class References extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>References</div>
                    <ul className={overallStyles.description}>
                        <li>
                            European Molecular Biology Laboratory (EMBL-EBI). (2021). PEA : Summary. PDBeChem: Ligand Dictionary (PDB Ligand Chemistry - chemical component dictionary). Retrieved October 13, 2021, from https://www.ebi.ac.uk/pdbe-srv/pdbechem/chemicalCompound/complete/PEA.
                        </li>
                        <li>
                            Fields G. B. (2002). Introduction to peptide synthesis. Current protocols in protein science, Chapter 18, Unit–18.1. https://doi.org/10.1002/0471140864.ps1801s26 
                        </li>
                        <li>
                            Foulquier, E. (2020, January 20). Amino acids. IMGT Education. Retrieved October 8, 2021, from http://www.imgt.org/IMGTeducation/Aide-memoire/_UK/aminoacids/charge/.
                        </li>
                        <li>
                            Gao, M., &amp; Skolnick, J. (2012). The distribution of ligand-binding pockets around protein-protein interfaces suggests a general mechanism for pocket formation. Proceedings of the National Academy of Science of the United States of America , 109(10), 3784–3789. https://doi.org/10.1073/pnas.1117768109
                        </li>
                        <li>
                            Hardinger, S. A. (2017). Aromatic-aromatic interaction (aromatic stacking, pi stacking): Illustrated Glossary of Organic Chemistry . Retrieved October 8, 2021, from http://www.chem.ucla.edu/~harding/IGOC/A/aromatic_aromatic_interaction.html.
                        </li>
                        <li>
                            Huang, PS., Boyken, S. &amp; Baker, D. The coming of age of de novo protein design. Nature 537, 320–327 (2016). https://doi.org/10.1038/nature19946
                        </li>
                        <li>
                            Kaufmann, K. W., Lemmon, G. H., DeLuca, S. L., Sheehan, J. H., & Meiler, J. (2010). Practically Useful: What the Rosetta Protein Modeling Suite Can Do for You. Biochemistry (Easton), 49(14), 2987–2998. https://doi.org/10.1021/bi902153g 
                        </li>
                        <li>
                            Leiros, H.-K. S., Brandsdal, B. O., Andersen, O. A., Os, V., I Leiros, Helland, R., Otlewski, J., Willassen, N. P., & Smalas, A. O. (2003). Trypsin specificity as elucidated by LIE calculations, X-ray structures and association constant measurements. Doi: 10.2210/pdb1UTM/pdb
                        </li>
                        <li>
                            Merck KGaA. (2021). Amino acids reference chart. MilliporeSigma. Retrieved October 8, 2021, from https://www.sigmaaldrich.com/CA/en/technical-documents/technical-article/protein-biology/protein-structural-analysis/amino-acid-reference-chart.
                        </li>
                        <li>
                            National Center for Biotechnology Information (2021). PubChem Compound Summary for CID 6287, Valine. Retrieved October 8, 2021 from https://pubchem.ncbi.nlm.nih.gov/compound/Valine
                        </li>
                        <li>
                            National Center for Biotechnology Information (2021). PubChem Compound Summary for CID 750, Glycine. Retrieved October 8, 2021 from https://pubchem.ncbi.nlm.nih.gov/compound/Glycine
                        </li>
                        <li>
                            Packer, M., Liu, D. Methods for the directed evolution of proteins. Nat Rev Genet 16, 379–394 (2015). https://doi.org/10.1038/nrg3927 
                        </li>
                        <li>
                            Rohl CA, Strauss CE., Misura KM., Baker D. Protein Structure Prediction Using Rosetta. Methods in Enzymology. 2004;383:66-93. doi:10.1016/S0076-6879(04)83004-0 
                        </li>
                        <li>
                            Rosetta Commons. (n.d.) Point mutant ("pmut") scan application, pmut_scan_parallel. Retreived from https://www.rosettacommons.org/docs/latest/application_documentation/design/
                        </li>
                        <li>
                            Rosetta Commons. (n.d.). Energy Terms in Rosetta. Retrieved from https://www.rosettacommons.org/docs/latest/rosetta_basics/scoring/score-types 
                        </li>
                        <li>
                            Zhang CT, Chou KC. Monte Carlo simulation studies on the prediction of protein folding types from amino acid composition. Biophys J. 1992;63(6):1523-1529. 
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default References;