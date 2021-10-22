import React, { useState } from 'react';
import overallStyles from '../overall.module.scss';
import styles from './teampage.module.scss';
import LabDesign from './LabDesign';
import HumanPractices from './HumanPractices';
import Wiki from './Wiki';
import MathModelling from './MathModelling';

const teams = ["Lab & Design", "Human Practices", "Wiki", "Math & Modelling"];

const TeamPage = () => {
    const [team, setTeam] = useState(teams[0])

        return (
            <div className={styles.container}>
                <div>
                    <span className={overallStyles.text_heading}>Team Members</span>
                </div>
                <div style={{margin: '30px 0px'}}>
                    <span className={overallStyles.page_heading}>Who We Are</span>
                </div>
                <div>
                    { team === "Lab & Design" && (
                        <LabDesign/>
                    )}
                    
                    { team === "Human Practices" && (
                        <HumanPractices/>
                    )}
                    
                    { team === "Wiki" && (
                        <Wiki/>
                    )}

                    { team === "Math & Modelling" && (
                        <MathModelling/>
                    )}
                </div>
                <div style={{margin: '50px 0px'}}>
                    <span className={overallStyles.text_heading}>Team</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                    <div style={{padding: '20px 0'}} onClick={() => setTeam("Lab & Design")}>
                        <button className={styles.button_lbl}>Lab &amp; Design</button>
                    </div>
                    <div to="/Team:Waterloo/Human_Practices" style={{padding: '20px 0'}} onClick={() => setTeam("Human Practices")}>
                        <button className={styles.button_lbl}>Human Practices</button>
                    </div>
                    <div to="/Team:Waterloo" style={{padding: '20px 0'}} onClick={() => setTeam("Wiki")}>
                        <button className={styles.button_lbl}>Wiki</button>
                    </div>
                    <div to="/Team:Waterloo/Model" style={{padding: '20px 0'}} onClick={() => setTeam("Math & Modelling")}>
                        <button className={styles.button_lbl}>Math &amp; Modelling</button>
                    </div>
                </div>
            </div>
        )
}

export default TeamPage;