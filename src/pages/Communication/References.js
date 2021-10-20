import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";

class References extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>References</span>
                </div>
                <ol className={overallStyles.description}>
                    <li>
                        Loe, I. M., &amp; Feldman, H. M. (2007, June 14). Academic and Educational Outcomes of Children With ADHD. Retrieved September 17, 2021 from https://academic.oup.com/jpepsy/article/32/6/643/1021192?login=true                     
                    </li>
                    <li>
                        McComas, W. F., Reiss, M. J., Dempster, E., Lee, Y. C., Olander, C., Clément, P., . . . Waarlo, A. J. (2018, September 01). Considering Grand Challenges in Biology Education: Rationales and Proposals for Future Investigations to Guide Instruction and Enhance Student Understanding in the Life Sciences. Retrieved September 17, 2021, from https://online.ucpress.edu/abt/article/80/7/483/19020/Considering-Grand-Challenges-in-Biology-Education 
                    </li>
                    <li>
                        McKnight, M. (2011). Designing for Children with ADHD: The Search for Guidelines for Non-Experts. User Experience Magazine, 10(1). Retrieved September 17, 2021 from https://uxpamagazine.org/designing_children_adhd/ 
                    </li>
                    <li>
                        Rorrer, J. (2018). Free PDF Vol.1. Retrieved September 17, 2021 from https://www.colormephd.org/coloring-pages/free-pdf-vol-1 
                    </li>
                </ol>
            </div>
        )
    }
}

export default References;