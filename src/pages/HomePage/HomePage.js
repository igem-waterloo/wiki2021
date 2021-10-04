import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Accessibility from '../../toolbar/Accessibility';
import styles from './homepage.module.scss';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            fontSizeMult: 1
        };
    }

    changeFontSizeMult = (newMult) => {
        console.log(this.state.fontSizeMult);
        if ((this.state.fontSizeMult > 0.5 && newMult > 0) || (this.state.fontSizeMult < 1.5 && newMult < 0)) {
            this.setState({
                fontSizeMult: this.state.fontSizeMult + newMult
            });
        }
    }

    render() {
        return (
            <div className={styles.container}>
                <div>
                    <span className={styles.page_heading}>Team Members</span>
                </div>
                <div style={{margin: '30px 0px'}}>
                    <span className={styles.banner_heading}>Who We Are</span>
                </div>
                <div>
                <Carousel className={styles.carousel} indicators={false} interval={null}>
                    <Carousel.Item className={styles.carousel_slide}>
                        <div className={styles.img_div}>
                            <img src='./headshot.png'></img>
                            <img src='./headshot.png'></img>
                            <img src='./headshot.png'></img>
                            <img src='./headshot.png'></img>
                        </div>
                        <div className={styles.img_div}>
                            <img src='./headshot.png'></img>
                            <img src='./headshot.png'></img>
                            <img src='./headshot.png'></img>
                            <img src='./headshot.png'></img>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className={styles.carousel_slide}>
                        <div className={styles.img_div}>
                            <img src='./headshot.png'></img>
                            <img src='./headshot.png'></img>
                            <img src='./headshot.png'></img>
                            <img src='./headshot.png'></img>
                        </div>
                        <div className={styles.img_div}>
                            <img src='./headshot.png'></img>
                            <img src='./headshot.png'></img>
                            <img src='./headshot.png'></img>
                            <img src='./headshot.png'></img>
                        </div>
                    </Carousel.Item>
                </Carousel>
                </div>
                <div style={{margin: '50px 0px'}}>
                    <span className={styles.team_label}>Team</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Link to="/lab&design">
                        <button className={styles.button_lbl}>Lab & Design</button>
                    </Link>
                    <Link to="/humanpractices">
                        <button className={styles.button_lbl}>Human Practices</button>
                    </Link>
                    <Link to="/">
                        <button className={styles.button_lbl}>Wiki</button>
                    </Link>
                </div>
                <Link to="/math" style={{marginTop: '50px'}}>
                        <button className={styles.button_lbl}>Math & Modelling</button>
                </Link>
                <Accessibility changeFontSizeMult={this.changeFontSizeMult}></Accessibility>
            </div>
        )
    }
}

export default HomePage;