import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";
import styles from "./instagramoutreach.module.scss";

class InstagramOutreach extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>Instagram Outreach</div>
                    <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                        May:                
                    </div>
                    <ul className={overallStyles.description}>
                        <li> 
                            UW iGEM posted a “Science and Research Talk Series” where students could tune in and listen to current topics. If they had any questions or were just simply interested in learning about synthetic biology. 
                        </li>
                    </ul>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/3/33/T--Waterloo--ResearchTalkSeries.png" alt="WiSTEM Research Talk Series"/>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                        June:                
                    </div>
                    <ul className={overallStyles.description}>
                        <li> 
                            June was pride month and we wanted to showcase LGBTQ+ in Science. UW iGEM wanted to place the spotlight on some amazing scientists in the LGBTQ+ community. These accomplishments have greatly impacted the world of science and we are forever grateful for their legacies!
                        </li>
                    </ul>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/9/9b/T--Waterloo--PrideMonthIG.png" alt="LGBTQ+ in Science" className={styles.left_img} />
                    <img src="https://2021.igem.org/wiki/images/c/c1/T--Waterloo--PrideMonthIG2.png" alt="Ben Barres" className={styles.right_img} />
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                        August:                
                    </div>
                    <ul className={overallStyles.description}>
                        <li> 
                        July/August was when the 2020 Tokyo Summer Olympics took place. This instagram post highlighted that synthetic Biology can be found everywhere! This included the ever-changing world of sports and some of the advancements in sports from synthetic biology. 
                        </li>
                    </ul>
                </div>
                <div className={overallStyles.figure_div}>
                    <img src="https://2021.igem.org/wiki/images/2/2d/T--Waterloo--OlympicsIG1.png" alt="LGBTQ+ in Science" className={styles.left_img} />
                    <img src="https://2021.igem.org/wiki/images/0/0d/T--Waterloo--OlympicsIG2.png" alt="Ben Barres" className={styles.right_img} />
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.description}>
                        For iGEM social media posts, references at the end of each post allows the audiences to further look into the information we found from credible sources, increasing accessibility to more information. 
                    </div>
                    <div className={overallStyles.description}>
                        When it comes to posting online, especially on social media platforms, it is important we take into account those who are visually impaired. To ensure this we included in depth descriptions of our posts allowing viewers using text-to-speech features to also engage with our content.
                    </div>
                </div>
            </div>
        )
    }
}

export default InstagramOutreach;