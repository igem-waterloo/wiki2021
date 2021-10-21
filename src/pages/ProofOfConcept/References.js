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
                            Ghosh, S., Aggarwal, K., U., V.T. et al. A new microchannel capillary flow assay (MCFA) platform with lyophilized chemiluminescence reagents for a smartphone-based POCT detecting malaria. Microsyst Nanoeng 6, 5 (2020). https://doi.org/10.1038/s41378-019-0108-8
                        </li>
                        <li>
                            Olanrewaju, A., Beaugrandm M., Yafia, M., Juncker, D. Capillary microfluidics in microchannels: from microfluidic networks to capillaries circuits. Lab on a Chip 16, 2323-2347 (2018). https://doi.org/10.1039/C8LC00458G
                        </li>
                        <li>
                            RCSB PDB. (n.d.). <i>1UTM</i>. Retrieved October 17, 2021, from https://www.rcsb.org/structure/1UTM
                        </li>
                        <li>
                            Roxe, D. M. (1990). Urinalysis. In <i>Clinical methods: The history, physical, and Laboratory Examinations</i>. essay, Butterworths. Retrieved October 3, 2021, from https://www.ncbi.nlm.nih.gov/books/NBK302/.
                        </li>
                        <li>
                            Shinoda, H., Taguchi, Y., Nakagawa, R., Makino, A., Okazaki, S., Nakano, M., Muramoto, Y., Takahashi, C., Takahashi, I., Ando, J., Noda, T., Nureki, O., Nishimasu, H., &amp; Watanabe, R. (2021, April 19). Amplification-free RNA detection with CRISPR–Cas13. <i>Communications Biology, 4</i>, 476. doi: https://doi.org/10.1038/s42003-021-02001-8
                        </li>
                        <li>
                            Tong, A., Tang, X., Zhang, F., &amp; Wang, B. (2020, March 16). Study on the shift of ultraviolet spectra in aqueous solution with variations of the solution concentration. Spectrochimica Acta Part A: Molecular and Biomolecular Spectroscopy, 234, 118259. https://www.sciencedirect.com/science/article/pii/S1386142520302377?via%3Dihub.
                        </li>
                        <li>
                            Zimmermann, M., Schmid, H., Hunziker, P., Delamarche, E. Capillary pumps for autonomous capillary systems. Lab on a Chip 1, 119-125 (2007). https://doi.org/10.1039/B609813D
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default References;