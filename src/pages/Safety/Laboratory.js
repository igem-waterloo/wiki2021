import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";

class Laboratory extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        Laboratory
                    </div>
                    <div className={overallStyles.description}>
                        Our lab is located on the third floor of the ESC (Earth Science and Chemistry) building at the University of Waterloo. We have our own tabletop centrifuges, thermal cycler, analytical and top-loading balances, -20°C freezer, and 4°C refrigerator. We share the -80°C freezer and 37°C incubator with the host lab, under the guidance and supervision of Dr. Roderick Slavcev at the Science Innovation Hub.
                    </div>
                </div>
            </div>
        )
    }
}

export default Laboratory;