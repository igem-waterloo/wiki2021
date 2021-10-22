import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImageModal from './ImageModal';
import overallStyles from '../overall.module.scss';
import styles from './teampage.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const LabDesign = () =>  {
        return (
            <Carousel className={styles.carousel} indicators={false} interval={null} nextIcon={<FontAwesomeIcon className={styles.arrow_buttons} icon={faAngleRight} />} prevIcon={<FontAwesomeIcon className={styles.arrow_buttons} icon={faAngleLeft} />} >
                <Carousel.Item className={styles.carousel_slide}>
                    <div className={styles.img_div}>
                        <ImageModal source='https://2021.igem.org/wiki/images/f/f1/T--Waterloo--MembersAnanyaLab.jpeg' name='Ananya Muralidharan' team='Lab &amp; Design' program='Chemical Engineering' term='2B' place='Hawaii' song='That pina coladas song' />
                        <ImageModal source='https://2021.igem.org/wiki/images/e/e0/T--Waterloo--MembersAngadSinghLab.jpeg' name='Angad Singh' team='Lab &amp; Design' program='Nanotechnology Engineering' term='3B' place='Greece' song=''/>
                        <ImageModal source='https://2021.igem.org/wiki/images/4/4d/T--Waterloo--MembersAnthonyDangLab.jpeg' name='Anthony Dang' team='Lab &amp; Design' program='Biochemistry' term='2B' place='to bed' song='EDEN - Times Like These'/>
                    </div>
                    <div className={styles.img_div}>
                        <ImageModal source='https://2021.igem.org/wiki/images/4/47/T--Waterloo--MembersAshishKumarLab.png' name='Ashish Kumar' team='Lab &amp; Design' program='Biomedical Sciences' term='3A' place='Hawaii' song='All the Stars'/>
                        <ImageModal source='https://2021.igem.org/wiki/images/3/30/T--Waterloo--MembersBraedenMacDougallLab.jpeg' name='Braeden MacDougall' team='Lab &amp; Design' program='Nanotechnology Engineering' term='2B' place='' song=''/>
                        <ImageModal source='https://2021.igem.org/wiki/images/7/75/T--Waterloo--MembersFatimaAnwarLab.jpeg' name='Fatima Anwar' team='Lab &amp; Design' program='Biomedical Sciences' term='4A' place='School!' song='Shinzo wo Sasageyo'/>
                    </div>
                </Carousel.Item>
                <Carousel.Item className={styles.carousel_slide}>
                    <div className={styles.img_div}>
                        <ImageModal source='https://2021.igem.org/wiki/images/e/e8/T--Waterloo--MembersJanieOngLab.jpeg' name='Janie Ong' team='Lab &amp; Design' program='Science and Business' term='2B' place='Singapore' song={"Live While We're Young"}/>
                        <ImageModal source='https://2021.igem.org/wiki/images/b/bc/T--Waterloo--MembersJessicaZhangLab.jpeg' name='Jessica Zhang' team='Lab &amp; Design' program='Computer Science joint Chemistry' term='3B' place='' song=''/>
                        <ImageModal source='https://2021.igem.org/wiki/images/5/59/T--Waterloo--MembersJiminLeeLab.png' name='Jimin Lee' team='Lab &amp; Design' program='Honours Science' term='3A' place='I would like to go to the lab and master pipetting' song='L.A.B - No Roots'/>
                    </div>
                    <div className={styles.img_div}>
                        <ImageModal source='https://2021.igem.org/wiki/images/8/8c/T--Waterloo--MembersJoshuaHannesonLab.jpeg' name='Joshua Hanneson' team='Lab &amp; Design' program='Nanotechnology Engineering' term='3B' place='Juggling Festivals!!!' song='Hit the Road Jack'/>
                        <ImageModal source='https://2021.igem.org/wiki/images/9/99/T--Waterloo--MembersLorenzoPérezLab.jpeg' name='Lorenzo Perez' team='Lab &amp; Design' program='Chemical Engineering' term='2B' place='Chilean Patagonia' song='Sonido Amazonico-Los Mirlos'/>
                        <ImageModal source='https://2021.igem.org/wiki/images/0/08/T--Waterloo--MembersMichaelLamLab.jpeg' name='Michael Lam' team='Lab &amp; Design' program='Biomedical Engineering' term='3B' place='London, UK' song='Civilizations by Masayoshi Soken'/>
                    </div>
                </Carousel.Item>
                <Carousel.Item className={styles.carousel_slide}>
                    <div className={styles.img_div}>
                        <ImageModal source='https://2021.igem.org/wiki/images/1/16/T--Waterloo--MembersSarahHardyLab.jpeg' name='Sarah Hardy' team='Lab &amp; Design' program='Biology' term='2B' place='Australia' song='Used To Be by Steve Aoki'/>
                        <ImageModal source='https://2021.igem.org/wiki/images/5/58/T--Waterloo--MembersSophiaTanLab.jpeg' name='Sophia Tan' team='Lab &amp; Design' program='Honours Biology Co-op' term='3B' place='Italy or Iceland' song='Time of Our Lives - Pitbull'/>
                    </div>
                </Carousel.Item>
            </Carousel>
        )
}

export default LabDesign;