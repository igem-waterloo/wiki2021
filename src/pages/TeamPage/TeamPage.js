import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import overallStyles from '../overall.module.scss';
import styles from './teampage.module.scss';
import { Link } from 'react-router-dom';

class TeamPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className={styles.container}>
                <div>
                    <span className={overallStyles.text_heading}>Team Members</span>
                </div>
                <div style={{margin: '30px 0px'}}>
                    <span className={overallStyles.page_heading}>Who We Are</span>
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
                    <span className={overallStyles.text_heading}>Team</span>
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
            </div>
        )
    }
}

export default TeamPage;