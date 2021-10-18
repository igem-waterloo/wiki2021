import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';
import Collapse from 'react-bootstrap/Collapse';
import { Pause, Play, ArrowCounterclockwise, PlusLg, DashLg, Sun, MoonFill } from 'react-bootstrap-icons';
import styles from './accessibility.module.scss';
import { setTheme, changeFontSize } from '../utils/themes';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className={styles.fixed}>
            <div className={styles.same}>
                <CloseButton style={{color: "white", fontSize: "15px" }} 
                    onClick={() => toggleVisibility()}>{arrow}</CloseButton>
                <div className={styles.toolbar_title}>Accessibility</div>
                <div className={styles.shortcut}>Ctrl/Cmd + Shift + A</div>
            </div>
            <Collapse in={visibility}>
                <div>
                <Container className={styles.toolbar_options}>
                        <Row>
                            <Col xs="7">
                                <div className={styles.words}>Font Size</div>
                                <p className={styles.shortcut}>Ctrl/Cmd + Alt + [ Ctrl/Cmd + Alt + ]</p>
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
                                <p className={styles.shortcut}>Ctrl/Cmd + Alt + L Ctrl/Cmd + Alt + ]</p>
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
                    <Container className={styles.toolbar_options}>
                        <Row>
                            <Col xs="7">
                            <div className={styles.words}>Read Aloud</div>
                                <p className={styles.shortcut}>Ctrl/Cmd+Shift+P</p>
                            </Col>
                            <Col xs="3">
                                <ButtonGroup style={{marginRight: "5px"}}>
                                    <Button size="sm" variant="light" onClick={() => {}}>
                                        <Pause size={13}/>
                                    </Button>
                                    <Button size="sm" variant="light">
                                        <Play size={13}/>
                                    </Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="7">
                            <div className={styles.words}>Restart</div>
                                <p className={styles.shortcut}>Ctrl/Cmd+Shift+R</p>
                            </Col>
                            <Col xs="3">
                                    <Button variant="light">
                                        <ArrowCounterclockwise size={13}/>
                                    </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Collapse>
        </div>
    );
}

export default Accessibility;