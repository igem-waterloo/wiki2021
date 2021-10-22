import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImageModal from './ImageModal';
import overallStyles from '../overall.module.scss';
import styles from './teampage.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const MathModelling = () => {
        return (
            <Carousel className={styles.carousel} indicators={false} interval={null} nextIcon={<FontAwesomeIcon className={styles.arrow_buttons} icon={faAngleRight} />} prevIcon={<FontAwesomeIcon className={styles.arrow_buttons} icon={faAngleLeft} />}>
                <Carousel.Item className={styles.carousel_slide}>
                    <div className={styles.img_div}>
                        <ImageModal source='https://2021.igem.org/wiki/images/9/91/T--Waterloo--MembersAmyWohlgemuthMath.jpeg' name='Amy Wohlgemuth' team='Math &amp; Modelling' program='Chemical Engineering' term='2B' place='Greece' song='Anything ABBA' />
                        <ImageModal source='https://2021.igem.org/wiki/images/6/67/T--Waterloo--MembersChelseaHuangMath.jpeg' name='Chelsea Huang' team='Math &amp; Modelling' program='Biomedical Engineering' term='2B' place='Hangzhou' song='Butterfly by J.UNA' />
                        <ImageModal source='https://2021.igem.org/wiki/images/1/1a/T--Waterloo--MembersChimdinduOhaegbuMath.jpeg' name='Chimdindu Ohaegbu' team='Math &amp; Modelling' program='Chemical Engineering' term='2B' place='Invermere, British Columbia' song="I'm Still Waiting by Diana Ross" />
                    </div>
                    <div className={styles.img_div}>
                        <ImageModal source='https://2021.igem.org/wiki/images/2/2d/T--Waterloo--MembersDanielMatlinMath.png' name='Daniel Matlin' team='Math &amp; Modelling' program='Computer Science' term='2B' place='' song='' />
                        <ImageModal source='https://2021.igem.org/wiki/images/4/48/T--Waterloo--MembersGeraldLeeMath.jpeg' name='Gerald Lee' team='Math &amp; Modelling' program='Computer Science' term='3A' place='' song='' />
                        <ImageModal source='https://2021.igem.org/wiki/images/3/35/T--Waterloo--MembersJessySongMath.jpeg' name='Jessy Song' team='Math &amp; Modelling' program='Biomedical Engineering' term='3B' place='Paris, and the in person jamb :(' song='Good Day by Surfaces' />
                    </div>
                </Carousel.Item>
                <Carousel.Item className={styles.carousel_slide}>
                    <div className={styles.img_div}>
                        <ImageModal source='https://2021.igem.org/wiki/images/f/f9/T--Waterloo--MembersKellieChongMath.jpeg' name='Kellie Chong' team='Math &amp; Modelling' program='Nanotechnology Engineering' term='3B' place='California' song='Better - Khalid' />
                        <ImageModal source='https://2021.igem.org/wiki/images/2/28/T--Waterloo--MembersKevinKimMath.png' name='Kevin Kim' team='Math &amp; Modelling' program='Electrical Engineering' term='2A' place='Cusco, Peru' song='Stormy Weather, Etta James' />
                        <ImageModal source='https://2021.igem.org/wiki/images/f/f0/T--Waterloo--MembersReneLamMath.jpeg' name='Rene Lam' team='Math &amp; Modelling' program='Nanotechnology' term='2B' place='Japan!!' song='Lost in Japan ;) ' />
                    </div>
                    <div className={styles.img_div}>
                        <ImageModal source='https://2021.igem.org/wiki/images/0/09/T--Waterloo--MembersSerenaHackerMath.jpeg' name='Serena Hacker' team='Math &amp; Modelling' program='Software Engineering' term='3B' place='Japan' song="One Summer's Day (Spirited Away)" />
                        <ImageModal source='https://2021.igem.org/wiki/images/f/fd/T--Waterloo--MembersSergiuPocolMath.jpeg' name='Sergiu Pocol' team='Math &amp; Modelling' program='Computer Science' term='3B' place='Italy' song="Fine dell’estate" />
                        <ImageModal source='https://2021.igem.org/wiki/images/c/c1/T--Waterloo--MembersTeodoraVujovicMath.png' name='Teodora Vujovic' team='Math &amp; Modelling' program='Applied Mathematics' term='4A' place='Greece!' song='Smooth by Rob Thomas' />
                    </div>
                </Carousel.Item>
                <Carousel.Item className={styles.carousel_slide}>
                    <div className={styles.img_div}>
                        <ImageModal source='https://2021.igem.org/wiki/images/3/32/T--Waterloo--MembersWendyLuMath.jpeg' name='Wendy Lu' team='Math &amp; Modelling' program='Computer Science' term='3B' place='Yosemite National Park' song='Saw You In A Dream by The Japanese House' />
                    </div>
                </Carousel.Item>
            </Carousel>
        )
    // }
}

export default MathModelling;