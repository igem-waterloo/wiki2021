import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImageModal from './ImageModal';
import styles from './teampage.module.scss';

const Wiki = () => {
        return (
            <Carousel className={styles.carousel} indicators={false} interval={null} controls={false} >
                <Carousel.Item className={styles.carousel_slide}>
                    <div className={styles.img_div}>
                        <ImageModal source='https://2021.igem.org/wiki/images/4/4c/T--Waterloo--MembersHarshit_ManchandaWiki.jpeg' name='Harshit Manchanda' team='Wiki' program='Computer Engineering' term='3B' place='I would really like to go to Japan.' song='A Sky Full of Stars by Coldplay' />
                        <ImageModal source='https://2021.igem.org/wiki/images/1/15/T--Waterloo--MembersJamesPhanWiki.jpeg' name='James Phan' team='Wiki' program='Global Business & Digital Arts' term='3A' place='I would like to go to Paris' song='Paradise by Bazzi' />
                        <ImageModal source='https://2021.igem.org/wiki/images/0/05/T--Waterloo--MembersTszYanAuLab.jpeg' name='Tsz Yan Au' team='Wiki' program='Computer Science' term='2A' place="Japan or Korea! I can't wait to splurge on all the good food there" song='Yoasobi - Ano Yume o Nazotte' />
                    </div>
                </Carousel.Item>
            </Carousel>
        )
}

export default Wiki;