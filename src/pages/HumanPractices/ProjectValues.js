import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";

class CurrentDiagnosis extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>
                        Project Values
                    </span>
                </div>
                <div className={overallStyles.description}>
                    TBD                
                </div>
                
            </div>
        )
    }
}

export default CurrentDiagnosis;