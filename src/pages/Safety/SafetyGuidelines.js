import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";

class SafetyGuidelines extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>
                        Safety Guidelines
                    </span>
                    <div className={overallStyles.subheading} style={{marginLeft: "5%"}}>
                        Canadian Guidelines
                    </div>
                    <div className={overallStyles.description}>
                        In Canada, all research practices involving biological materials are strictly regulated by the&nbsp;
                        <a className={overallStyles.text_link} href="https://www.canada.ca/en/public-health.html" target="_blank" rel="noreferrer">
                            Public Health Agency of Canada
                        </a> 
                        . In addition, there are certain regulations that must be followed in every work place, as recorded by the&nbsp;
                        <a className={overallStyles.text_link} href="https://www.canada.ca/en/employment-social-development/services/health-safety/reports/workplace-health-safety-facts.html" target="_blank" rel="noreferrer">
                            Workplace Health &amp; Safety Regulations
                        </a>
                        .
                    </div>
                    <div className={overallStyles.subheading} style={{marginLeft: "5%"}}>
                        University Guidelines
                    </div>
                    <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                        All laboratory practices operated within the University of Waterloo iGEM Team are regulated by the&nbsp;
                        <a className={overallStyles.text_link} href="https://uwaterloo.ca/safety-office/" target="_blank" rel="noreferrer">
                            University of Waterloo’s Safety Office
                        </a>
                        . As such, everyone in the lab had been appropriately trained with the safety modules required by the University of Waterloo before they were permitted to work in the lab. The training included WHMIS 2015, Laboratory Biosafety Training, and General Lab Safety. The training was based on the following safety guidelines:
                    </div>
                    <ul className={overallStyles.description}>
                        <li>
                            <a className={overallStyles.text_link} href="https://uwaterloo.ca/safety-office/laboratory-safety" target="_blank" rel="noreferrer">
                                University of Waterloo Laboratory Safety Guidelines   
                            </a>
                        </li>
                        <li>
                            <a className={overallStyles.text_link} href="​​https://uwaterloo.ca/safety-office/laboratory-safety/biosafety" target="_blank" rel="noreferrer">
                                University of Waterloo Biological Safety Guidelines   
                            </a>
                        </li>
                        <li>
                            <a className={overallStyles.text_link} href="​​https://uwaterloo.ca/safety-office/occupational-health-safety/whmis" target="_blank" rel="noreferrer">
                                University of Waterloo Workplace Hazardous Materials Information System                            
                            </a>
                        </li>
                        <li>
                            <a className={overallStyles.text_link} href="​​https://uwaterloo.ca/safety-office/occupational-health-safety/workplace-violence-and-harassment" target="_blank" rel="noreferrer">
                                University of Waterloo Workplace Violence and Harassment
                            </a>
                        </li>
                    </ul>
                    <div className={overallStyles.description}>
                        Lastly, all protocols conducted by the Waterloo iGEM team at the University of Waterloo are described in Safe Operating Procedures (SOPs) approved by advisors in the Science Innovation Hub.
                    </div>
                    <div className={overallStyles.subheading} style={{marginLeft: "5%"}}>
                        Team Guidelines
                    </div>
                    <div className={overallStyles.description}>
                        Lab goggles, coats, and gloves are mandatory PPE in the lab. All of our chemical solutions are labelled and safely stored in appropriate containers. Flammable substances and acids are stored separately in appropriate cupboards. From our broken glass waste bin and regularly checked fire extinguisher, to our fully stocked first aid kit and highly visible safety information signs on the door, we take safety awareness and procedures seriously. We also dispose of our biohazardous waste properly -- materials such as contaminated pipette tips, microtubes, KimWipes, etc. are put in biohazardous waste containers and compiled into our large bin. Once the bin is full, we safely transport it to the hazardous waste disposal site on the university campus, where it is properly disposed of by qualified employees. We have also implemented a weekly eyewash maintenance program to ensure that stagnant, dead-leg water is removed from the tubing and that the apparatus is always clear and properly functional in the case of an emergency. Overall, our lab and project had many safety features implemented to ensure that if we had lab access, everyone involved inside and outside of the lab would have been kept safe.
                    </div>
                </div>
            </div>
        )
    }
}

export default SafetyGuidelines;