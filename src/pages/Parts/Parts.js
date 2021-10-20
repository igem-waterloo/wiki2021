
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import styles from "./parts.module.scss";
import overallStyles from '../overall.module.scss';
import Improvement from './Improvement';
import References from './References';

const tabs = ['Improvement of an Existing Part (Gold #2)', 'References'];

const Parts = () => {
        const [active, setActive] = useState(tabs[0]);
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Parts.</div>
                    </div>
                    <div className={overallStyles.illustration}></div>
                </div>
                <div className={overallStyles.text_div}>
                    <span className={overallStyles.text_heading}>Overview</span>
                    <div className={overallStyles.description}>
                        This year, our team added six new parts, contributed new documentation to two parts, and improved an existing part on the Registry. Below are links to the Registry pages of each of these parts.
                    </div>
                </div>
                <div className={overallStyles.figure_div} style={{width: "80%"}}>
                    <Table bordered className={styles.table}>
                        <colgroup>
                            <col span="1" style={{width: "21%"}}/>
                            <col span="1" style={{width: "12%"}}/>
                            <col span="1" style={{width: "50%"}}/>
                            <col span="1" style={{width: "37%"}}/>
                        </colgroup>
                        <thead>
                            <tr>
                                <th>Part Name</th>
                                <th>Part Type</th>
                                <th>Description</th>
                                <th>Medal Criterion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a className={overallStyles.text_link} href="http://parts.igem.org/Part:BBa_K2926001" target="_blank" rel="noreferrer">
                                        BBa_K2926001 
                                    </a>
                                </td>
                                <td>Coding</td>
                                <td>Cas13a Lbu</td>
                                <td>Bronze #4: Contribution</td>
                            </tr>
                            <tr>
                                <td>
                                    <a className={overallStyles.text_link} href="http://parts.igem.org/Part:BBa_K1615022" target="_blank" rel="noreferrer">
                                        BBa_K1615022 
                                    </a>
                                </td>
                                <td>Coding</td>
                                <td>CMonoamine Oxidase A RFC25</td>
                                <td>Bronze #4: Contribution</td>
                            </tr>
                            <tr>
                                <td>
                                    <a className={overallStyles.text_link} href="http://parts.igem.org/Part:BBa_K3843000" target="_blank" rel="noreferrer">
                                        BBa_K3843000 
                                    </a>
                                </td>
                                <td>Coding</td>
                                <td>PEA-binding salmon trypsin (1UTM)</td>
                                <td>Silver #1: Engineering Success</td>
                            </tr>
                            <tr>
                                <td>
                                    <a className={overallStyles.text_link} href="http://parts.igem.org/Part:BBa_K3843001" target="_blank" rel="noreferrer">
                                        BBa_K3843001 
                                    </a>
                                </td>
                                <td>Coding</td>
                                <td>Affinity-improved PEA-binding salmon trypsin (1UTM+)</td>
                                <td>Silver #1: Engineering Success</td>
                            </tr>
                            <tr>
                                <td>
                                    <a className={overallStyles.text_link} href="http://parts.igem.org/Part:BBa_K3843002" target="_blank" rel="noreferrer">
                                        BBa_K3843002 
                                    </a>
                                </td>
                                <td>Coding</td>
                                <td>1UTM-HRP (fusion)</td>
                                <td>Silver #1: Engineering Success</td>
                            </tr>
                            <tr>
                                <td>
                                    <a className={overallStyles.text_link} href="http://parts.igem.org/Part:BBa_K3843006" target="_blank" rel="noreferrer">
                                        BBa_K3843006 
                                    </a>
                                </td>
                                <td>RNA</td>
                                <td>LbuCas13a guide RNA - DRD4-targeting (missense deletion in VNTR motif 3)</td>
                                <td>Silver #1: Engineering Success</td>
                            </tr>
                            <tr>
                                <td>
                                    <a className={overallStyles.text_link} href="http://parts.igem.org/Part:BBa_K3843007" target="_blank" rel="noreferrer">
                                        BBa_K3843007 
                                    </a>
                                </td>
                                <td>RNA</td>
                                <td>LbuCas13a guide RNA - SNAP25-targeting (SNP T1065T>G)</td>
                                <td>Silver #1: Engineering Success</td>
                            </tr>
                            <tr>
                                <td>
                                    <a className={overallStyles.text_link} href="http://parts.igem.org/Part:BBa_K3843008" target="_blank" rel="noreferrer">
                                        BBa_K3843008 
                                    </a>
                                </td>
                                <td>RNA</td>
                                <td>LbuCas13a guide RNA - DRD4-targeting (missense deletion in VNTR motif 1)</td>
                                <td>Silver #1: Engineering Success</td>
                            </tr>
                            <tr>
                                <td>
                                    <a className={overallStyles.text_link} href="http://parts.igem.org/Part:BBa_K3843005" target="_blank" rel="noreferrer">
                                        BBa_K3843005 
                                    </a>
                                </td>
                                <td>Coding</td>
                                <td>Affinity-improved monomeric streptavidin (mSA2+)</td>
                                <td>Gold #2: Improvement of an Existing Part</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className={overallStyles.sections_div}>
                    {tabs.map(tab => (
                        <div key={tab} active={active === tab} onClick={() => setActive(tab)}>
                            <div className={overallStyles.sections}>
                            <div className={overallStyles.section_img}></div>
                            <div className={overallStyles.section_text}>
                                {tab}
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    { active === tabs[0] && (
                        <Improvement/>
                    )}
                    { active === tabs[1] && (
                        <References/>
                    )}
                </div>
            </div>
        )
}

export default Parts;