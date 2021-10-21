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
                            5 tips on designing colorblind-friendly visualizations. Tableau. (n.d.). Retrieved October 21, 2021, from https://www.tableau.com/about/blog/examining-data-viz-rules-dont-use-red-green-together. 
                        </li>
                        <li>
                            Blue Light has a dark side. Harvard Health. (2020, July 7). Retrieved October 21, 2021, from https://www.health.harvard.edu/staying-healthy/blue-light-has-a-dark-side?_ga=2.89087004.623627247.1634565693-1834042642.1634565693. 
                        </li>
                        <li>
                            Fottrell, Q. (2018, August 4). People spend most of their waking hours staring at screens. MarketWatch. Retrieved October 21, 2021, from https://www.marketwatch.com/story/people-are-spending-most-of-their-waking-hours-staring-at-screens-2018-08-01?_ga=2.151606590.623627247.1634565693-1834042642.1634565693. 
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default References;