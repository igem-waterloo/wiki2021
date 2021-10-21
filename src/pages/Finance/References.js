import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";

class References extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>References</span>
                    <ul className={overallStyles.description}>
                        <li>
                            Centre for ADHD Awareness Canada. (2013, October, 14).  Paying Attention to the Cost of ADHD… The Price Paid by Canadian Families, Governments and Society. https://caddac.ca/wp-content/uploads/2017/01/Socioeconomic-Policy-Paper-1.pdf 
                        </li>
                        <li>
                            Government of Ontario. (n.d). What OHIP Covers. https://www.ontario.ca/page/what-ohip-covers#section-9                    
                        </li>
                        <li>
                            Ministry of Health. (n.d). Ontario Health Insurance Plan. https://www.health.gov.on.ca/en/public/programs/ohip/ohipfaq_mn.aspx
                        </li>
                        <li>
                            LabOnTheCheap. (2018, July 10). Technical Tuesday: Protein purification on a budget: Lab on the cheap. Lab On The Cheap |. Retrieved October 7, 2021, from https://www.labonthecheap.com/protein-purification-on-a-budget/.                    </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default References;