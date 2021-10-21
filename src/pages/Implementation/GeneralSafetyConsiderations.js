import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";

class GeneralSafetyConsiderations extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        General Safety Considerations for NeuroDetech Usage                    
                    </div>
                    <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                        To properly determine how NeuroDetech would be implemented in a real life medical laboratory setting, our team developed a list of safety considerations that must be taken into account when our tool is being used. 
                    </div>
                    <ol className={overallStyles.description}>
                        <li>
                            As with any other flow assay tests, the results from NeuroDetech should not be taken to be 100% accurate (TWinFM). The chance of the tool malfunctioning, or giving misleading results always exists, thus only properly trained individuals, such as lab technicians, should use NeuroDetech. This will ensure proper sample and MCFA chip handling, as well as the ability to troubleshoot, should it be necessary.
                        </li>
                        <li>
                            Furthermore, the test contains a variety of chemicals, and should not be broken/tampered with to reveal the inner contents, at any point in the life of the tool. Chemicals such as Amplex Red that can cause harm if in contact with the user. Thus the user must take precautions to not break or alter the structure of the MCFA chip at any point during its usage to expose these chemicals in an unsafe manner. (Iacobucci, 2021)
                        </li>
                        <li>
                        Once the test has been completed, post-handling is required to interpret the results (eg: running the chip on an app to yield a graph). Since the test would contain traces of urine, it will have to be handled with care to ensure that there is no contamination from the chip to the user, or external environment, such as the computer.
                        </li>
                        <li>
                            Lastly, the chip and the test must be discarded safely (biohazardous waste bin), and must not be left laying in the open.
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default GeneralSafetyConsiderations;