import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import { Pause, Play, ArrowCounterclockwise, PlusLg, DashLg, Sun, MoonFill } from 'react-bootstrap-icons';
import styles from './accessibility.module.scss';
import { setTheme, changeFontSize } from '../utils/themes';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "./scrollToTop";

function Accessibility() {
    const [visibility, setVisibility] = useState(false);
    const [arrow, setArrow] = useState("▲");

    const toggleVisibility = () => {
        if (visibility) {
            setArrow("▲");
        } else {
            setArrow("▼");
        }
        setVisibility(!visibility);
    }

    const changeSize = (increase) => {
        let currentMult = localStorage.getItem("multiplier");
        currentMult = parseFloat(currentMult);
        if (increase && currentMult < 1.5) {
            currentMult += 0.25;
            changeFontSize(currentMult);
        } else if (!increase && currentMult > 0.5) {
            currentMult -= 0.25;
            changeFontSize(currentMult);
        }
    }

    const changeMode = (lightMode) => {
        if (lightMode && localStorage.getItem("theme") === "theme-dark") {
            setTheme("theme-light");
        } else if (!lightMode && localStorage.getItem("theme") === "theme-light"){
            setTheme("theme-dark");
        }
    }

    return (
        <div style={{position: "fixed"}}>
            <div className={styles.fixed}>
                <ScrollToTop />
                <div className={styles.same}>
                    <button className={styles.close_button} onClick={() => toggleVisibility()}>
                        {arrow}
                    </button>
                    <div className={styles.toolbar_title}>Accessibility</div>
                </div>
                <Collapse in={visibility}>
                    <div>
                    <Container className={styles.toolbar_options}>
                            <Row>
                                <Col xs="7">
                                    <div className={styles.words}>Font Size</div>
                                </Col>
                                <Col xs="3">
                                    <ButtonGroup style={{marginRight: "5px"}}>
                                        <Button size="sm" variant="light" onClick={() => changeSize(false)}>
                                            <DashLg size={13}/>
                                        </Button>
                                        <Button size="sm" variant="light" onClick={() => changeSize(true)}>
                                            <PlusLg size={13}/>
                                        </Button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        </Container>
                        <Container className={styles.toolbar_options}>
                            <Row>
                                <Col xs="7">
                                    <div className={styles.words}>Change Mode</div>
                                </Col>
                                <Col xs="3">
                                    <ButtonGroup style={{marginRight: "5px"}}>
                                        <Button size="sm" variant="light" onClick={() => changeMode(true)}>
                                            <Sun size={13}/>
                                        </Button>
                                        <Button size="sm" variant="light" onClick={() => changeMode(false)}>
                                            <MoonFill size={13}/>
                                        </Button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Collapse>
            </div>
        </div>
    );
}

export default Accessibility;