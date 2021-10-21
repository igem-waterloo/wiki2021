import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";

class OpticalDetector extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        Optical Detector and Visualization Application
                    </div>
                    <div className={overallStyles.description}>
                        In order to establish a standardized and safe methodology of implementing NeuroDetech, it is essential that this diagnostic test is protected by a patent. Existing under a patent ensures that the exact same product is produced with the same accuracy by one manufacturer. Additionally, protecting NeuroDetech with a patent comes with the ability to outsource manufacturing costs to a 3rd-party pharmaceutical diagnostics company with the technology to produce it at a much lower cost, to ultimately lower the cost of the test to patients. This provides a profitable exchange to both manufacturer (who obtains a share of patent rights) and patient, at the expense of the designer. These costs, however, are absorbed by the fact that more tests are able to be sold, and the fact that it is typically cheaper for the designer to employ contract manufacturing than to build multiple units themselves.                
                    </div>
                </div>
            </div>
        )
    }
}

export default OpticalDetector;