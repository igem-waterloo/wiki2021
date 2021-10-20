import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import overallStyles from "../overall.module.scss";

class Improvement extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>
                        Improvement of an Existing Part (Gold #2)
                    </span>
                </div>
                <div className={overallStyles.description}>
                    Streptavidin and biotin exhibit one of the strongest known non-covalent interactions, with a dissociation constant (Kd) of 10<sup>-14</sup> M (Chivers et al., 2011). However, streptavidin is tetrameric and rather bulky, making solubility and stability a concern in the context of a microfluidic assay. An engineered monomeric form of streptavidin exists, albeit at some expense of binding affinity, where the monomeric streptavidin and biotin interaction has a Kd of 10<sup>-9</sup> M (DeMonte et al., 2013). As a result, we sought to improve the affinity of monomeric streptavidin using computational rational protein design.
                </div>
                <div className={overallStyles.description}>
                    The existing part for monomeric streptavidin (known as mSA2) is&nbsp;
                    <a className={overallStyles.text_link} href="http://parts.igem.org/Part:BBa_K3843007" target="_blank" rel="noreferrer">
                        BBa_K3843007 
                    </a>
                    . Our affinity-improved version of mSA2, dubbed mSA2+, is documented under part&nbsp;
                    <a className={overallStyles.text_link} href="http://parts.igem.org/Part:BBa_K3843005" target="_blank" rel="noreferrer">
                    BBa_K3843005 
                    </a>
                    .
                </div>
                <div className={overallStyles.description}>
                    Overall, through our computational rational protein design process (described in our&nbsp;
                    <Link to="/Team:Waterloo/Engineering" className={overallStyles.text_link}>
                        Engineering
                    </Link>
                    &nbsp;page), we improved mSA2’s biotin binding affinity by inducing the following mutations: T74C, N12A, and Y52F. These mutations were able to decrease the individual energy of mSA2 by 62.925 REU (Rosetta Energy Units) compared to the unmutated mSA2, based on Rosetta's scoring function. As well, the energy score of the mSA2-biotin complex decreased by 1.8 kcal/mol, or 7.5 kJ/mol (on AutoDock Vina), corresponding to an increase in binding affinity.
                </div>
                <div className={overallStyles.description}>
                    The following image depicts the improved mSA2, with mSA2+ coloured in blue and biotin highlighted in green, as visualized in UCSF Chimera:
                </div>
                <div className={overallStyles.figure_div}>
                <img src="https://2021.igem.org/wiki/images/a/a4/T--Waterloo--mSA2%2B.png" alt="mSA2+"/>
                </div>
            </div>
        )
    }
}

export default Improvement;