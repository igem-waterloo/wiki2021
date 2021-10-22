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
                            ​​Chivers, C. E., Koner, A. L., Lowe, E. D., &amp; Howarth, M. (2011). How the biotin–streptavidin interaction was made even stronger: Investigation via crystallography and a chimaeric tetramer. <i>Biochemical Journal, 435</i>(1), 55–63. https://doi.org/10.1042/bj20101593.
                        </li>
                        <li>
                            DeMonte, D., Drake, E. J., Lim, K. H., Gulick, A. M., &amp; Park, S. (2013, June 17). Structure‐based engineering of streptavidin monomer with a reduced biotin dissociation rate. <i>Proteins, 81</i>(9), 1621-33. https://onlinelibrary.wiley.com/doi/10.1002/prot.24320. 
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default References;