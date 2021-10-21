import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import styles from './references.module.scss';
import Collapsible from '../../utils/Collapsible';

class References extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.text_div}>
                    <span className={styles.text_heading}>References</span>
                </div>
                <div>
                    <div className={styles.illustration}></div>
                    {/* <img></img> */}
                </div>
                <div className={styles.description}>
                    Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius.
                </div>
                <Collapsible open title="Second Option">
                    <div className={styles.first_section}>
                        <div className={styles.section_img}></div>
                        <div className={styles.section_text}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit.<br/>Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. </div>
                    </div>
                    <div className={styles.description} style={{marginTop: 60}}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius.</div>
                    <div className={styles.illustration} style={{marginBottom: 0}}></div>
                </Collapsible>
                <Collapsible open title="Third Option">
                    <div className={styles.first_section}>
                        <div className={styles.section_img}></div>
                        <div className={styles.section_text}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit.<br/>Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. </div>
                    </div>
                    <div className={styles.description} style={{marginTop: 60}}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius.</div>
                    <div className={styles.illustration} style={{marginBottom: 0}}></div>
                </Collapsible>
                <Collapsible open title="Fourth Option">
                    <div className={styles.first_section}>
                        <div className={styles.section_img}></div>
                        <div className={styles.section_text}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit.<br/>Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. </div>
                    </div>
                    <div className={styles.description} style={{marginTop: 60}}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius. Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius.</div>
                    <div className={styles.illustration} style={{marginBottom: 0}}></div>
                </Collapsible>
                <Collapsible open title="Fifth Option">
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

export default References;