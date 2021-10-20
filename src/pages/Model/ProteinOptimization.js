import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import styles from './microfludic.module.scss';
import Collapsible from '../../utils/Collapsible';

class ProteinOptimization extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.text_div}>
                    <span className={styles.text_heading}>Protein Optimization</span>
                </div>
                <div className={styles.description}>
                    The selected proteins to be optimized, trypsin and monomeric streptavidin, are modelled and analyzed using software such as Rosetta, Chimera and Autodock. In the end, proteins with improved stability and affinity are designed. 
                </div>
                <Collapsible open title="Rosetta: Protein Mutations">
                    <div className={styles.first_section}>
                        <div className={styles.section_img}></div>
                        <div className={styles.section_text}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit.<br/>Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. </div>
                    </div>
                    <div className={styles.description} style={{marginTop: 60}}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius.</div>
                    <div className={styles.illustration} style={{marginBottom: 0}}></div>
                </Collapsible>
                <Collapsible open title="Improvement of Trypsin Protein">
                    <div className={styles.first_section}>
                        <div className={styles.section_img}></div>
                        <div className={styles.section_text}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit.<br/>Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. </div>
                    </div>
                    <div className={styles.description} style={{marginTop: 60}}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius.</div>
                    <div className={styles.illustration} style={{marginBottom: 0}}></div>
                </Collapsible>
                <Collapsible open title="Improvement of Monomeric Streptavidin">
                    <div className={styles.first_section}>
                        <div className={styles.section_img}></div>
                        <div className={styles.section_text}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit.<br/>Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. </div>
                    </div>
                    <div className={styles.description} style={{marginTop: 60}}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius.</div>
                    <div className={styles.illustration} style={{marginBottom: 0}}></div>
                </Collapsible>
                <Collapsible open title="Docking Analysis with AutoDock Vina and Chimera">
                    <div className={styles.first_section}>
                        <div className={styles.section_img}></div>
                        <div className={styles.section_text}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit.<br/>Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. </div>
                    </div>
                    <div className={styles.description} style={{marginTop: 60}}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius.</div>
                    <div className={styles.illustration} style={{marginBottom: 0}}></div>
                </Collapsible>
            </div>
        )
    }
}

export default ProteinOptimization;