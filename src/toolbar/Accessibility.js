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
import { setTheme } from '../utils/themes';
import 'bootstrap/dist/css/bootstrap.min.css';

function Accessibility({changeFontSizeMult, setLightMode}) {
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

    const increaseSize = () => {
        changeFontSizeMult(0.25);
    }

    const decreaseSize = () => {
        changeFontSizeMult(-0.25);
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
                <h1 className={styles.toolbar_title}>Accessibility</h1>
                <div className={styles.shortcut}>Ctrl/Cmd + Shift + A</div>
            </div>
            <Collapse in={visibility}>
                <div>
                    <Container className={styles.toolbar_options}>
                        <Row>
                            <Col xs="7">
                            <h1 className={styles.words}>Read Aloud</h1>
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
                            <h1 className={styles.words}>Restart</h1>
                                <p className={styles.shortcut}>Ctrl/Cmd+Shift+R</p>
                            </Col>
                            <Col xs="3">
                                    <Button variant="light">
                                        <ArrowCounterclockwise size={16}/>
                                    </Button>
                            </Col>
                        </Row>
                    </Container>
                    <Container className={styles.toolbar_options}>
                        <Row>
                            <Col xs="7">
                                <h1 className={styles.words}>Font Size</h1>
                                <p className={styles.shortcut}>Ctrl/Cmd + Alt + [ Ctrl/Cmd + Alt + ]</p>
                            </Col>
                            <Col xs="3">
                                <ButtonGroup style={{marginRight: "5px"}}>
                                    <Button size="sm" variant="light" onClick={() => decreaseSize()}>
                                        <DashLg size={13}/>
                                    </Button>
                                    <Button size="sm" variant="light" onClick={() => increaseSize()}>
                                        <PlusLg size={13}/>
                                    </Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </Container>
                    <Container className={styles.toolbar_options}>
                        <Row>
                            <Col xs="7">
                                <h2 className={styles.words}>Change Mode</h2>
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
                </div>
            </Collapse>
        </div>
    );

    // return (
    //     <div class="accessibility-tool">
    //         <div class="fixed" style={{height: visibility ? '283px' : '78px'}}>
    //             <div class="same">
    //                 <Button variant="dark" onClick={() => setVisibility(!visibility)}>▾</Button>
    //                 <h1 class="toolbar-title"> Accessibility </h1>
    //                 <div class="shortcut">Ctrl/Cmd + Shift + A</div>
    //             </div>
    //             <div class="toolbar-read" style={{visibility: visibility ? 'visible' : 'hidden'}}>
    //                 <div class="words">
    //                     <h2>Read Aloud</h2>
    //                     <div class="shortcut">Ctrl/Cmd + Shift + L</div>
    //                     <h3>Restart</h3>
    //                     <div class="shortcut">Ctrl/Cmd + Alt + R</div>
    //                 </div> 
    //                 <div class="articulate-area">
    //                     <svg width="53" height="26" viewBox="0 0 53 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                         <rect width="53" height="26" rx="13" fill="white"/>
    //                         <line x1="26.5" y1="2.10751e-08" x2="26.5" y2="26" stroke="black"/>
    //                         <path d="M45.3784 13.0004L35.3446 19.1796L35.3446 6.82116L45.3784 13.0004Z" fill="black"/>
    //                         <line x1="11.5608" y1="7.64844" x2="11.5608" y2="18.5738" stroke="black" stroke-width="3.12152"/>
    //                         <line x1="17.8039" y1="7.64844" x2="17.8039" y2="18.5738" stroke="black" stroke-width="3.12152"/>
    //                         <rect id="pause" width="26.5" height="26" fill="white" fill-opacity="0"/>
    //                         <rect id="play" width="26.5" height="26" x="26.5" y="0" fill="white" fill-opacity="0"/>
    //                     </svg>
    //                     <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                         <circle cx="13" cy="13" r="13" fill="white"/>
    //                         <path d="M10.5518 10.3581C10.9024 10.7023 11.2531 11.0399 11.6037 11.3841C11.6946 11.475 11.792 11.5789 11.844 11.6892C11.9803 11.9814 11.7466 12.3645 11.4284 12.4035C11.3765 12.41 11.3245 12.41 11.2661 12.41C10.0453 12.41 8.8246 12.41 7.60387 12.41C7.29869 12.41 7.08441 12.2542 7.01948 11.9879C7 11.9425 7 11.884 7 11.8256C7 10.5984 7 9.37115 7 8.13743C7 7.80627 7.16233 7.60498 7.48699 7.54005C7.61686 7.51408 7.74023 7.54654 7.83114 7.63745C8.04541 7.83874 8.25969 8.04003 8.46747 8.24782C8.64279 8.42313 8.81811 8.61144 8.99992 8.79974C9.04537 8.76078 9.07784 8.73481 9.11031 8.70884C10.0323 7.88419 11.0907 7.34525 12.2985 7.11799C13.74 6.84527 15.1166 7.04656 16.4282 7.70888C17.9476 8.47508 18.9865 9.66984 19.5904 11.2542C19.9086 12.0788 20.0449 12.9424 19.9865 13.8255C19.8631 15.7086 19.0904 17.2799 17.6424 18.4942C16.7658 19.2344 15.7464 19.6954 14.6166 19.8967C13.4413 20.1045 12.292 19.9941 11.1752 19.572C10.1297 19.176 9.24017 18.5461 8.52591 17.689C8.40904 17.5526 8.41553 17.3968 8.5389 17.2669C8.90252 16.8968 9.27264 16.5267 9.64275 16.1566C9.79859 16.0073 9.96742 16.0137 10.1103 16.1891C10.4544 16.6176 10.8635 16.9812 11.344 17.254C12.0582 17.663 12.8244 17.8513 13.6491 17.8254C14.6296 17.7864 15.4932 17.4552 16.2529 16.8449C17.0061 16.2345 17.4931 15.4358 17.7139 14.4943C17.9476 13.5074 17.8372 12.5528 17.4022 11.6308C16.9996 10.7932 16.3957 10.1503 15.5776 9.7088C14.7205 9.24128 13.7984 9.07895 12.8309 9.2283C12.0063 9.35816 11.2726 9.69581 10.6492 10.2542C10.6297 10.2737 10.6038 10.2932 10.5843 10.3127C10.5778 10.3127 10.5713 10.3192 10.5713 10.3257C10.5648 10.3386 10.5583 10.3516 10.5518 10.3581Z" fill="black"/>
    //                         <circle id="restart" cx="13" cy="13" r="13" fill="white" fill-opacity="0"/>
    //                     </svg>
    //                 </div>
    //             </div>
    //             <div class="toolbar-size" style={{visibility: visibility ? 'visible' : 'hidden'}}>
    //                 <div class="words">
    //                     <h2>Font Size</h2>
    //                     <div class="shortcut">Ctrl/Cmd + Alt + [</div>
    //                     <div class="shortcut">Ctrl/Cmd + Alt + ]</div>
    //                 </div>
    //                 <div class="size-area">
    //                     <svg width="53" height="26" viewBox="0 0 53 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                         <rect width="53" height="26" rx="13" fill="white"/>
    //                         <path d="M40.0732 8.16895L40.0732 13L40.0732 17.8311" stroke="black" stroke-width="2"/>
    //                         <line x1="35" y1="13" x2="45" y2="13" stroke="black" stroke-width="2"/>
    //                         <line x1="9" y1="13" x2="19" y2="13" stroke="black" stroke-width="2"/>
    //                         <line x1="26.5" y1="2.10751e-08" x2="26.5" y2="26" stroke="black"/>
    //                         <rect id="minus" width="26.5" height="26" fill="white" fill-opacity="0"/>
    //                         <rect id="plus" width="26.5" height="26" x="26.5" y="0" fill="white" fill-opacity="0"/>
    //                     </svg>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
  }

export default Accessibility;