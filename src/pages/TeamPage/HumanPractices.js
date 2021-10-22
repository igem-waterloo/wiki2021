import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImageModal from './ImageModal';
import overallStyles from '../overall.module.scss';
import styles from './teampage.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const HumanPractices = () => {
        return (
            <div>
            <Carousel className={styles.carousel} indicators={false} interval={null} nextIcon={<FontAwesomeIcon className={styles.arrow_buttons} icon={faAngleRight} />} prevIcon={<FontAwesomeIcon className={styles.arrow_buttons} icon={faAngleLeft} />}>
                <Carousel.Item className={styles.carousel_slide}>
                    <div className={styles.img_div}>
                        <ImageModal source='https://2021.igem.org/wiki/images/7/77/T--Waterloo--MembersAlishaD%27souzaHP.jpeg' name="Alisha D'Souza" team='Human Practices' program='Psychology Science' term='3A' place='to school please and thank you' song="I Don't Want to Miss a Thing" />
                        <ImageModal source='https://2021.igem.org/wiki/images/e/ed/T--Waterloo--MembersAnaFernandezHP.jpeg' name='Ana Fernandez' team='Human Practices' program='Biochemistry' term='3B' place='Iceland' song='Ice Ice Baby by Vanilla Ice' />
                        <ImageModal source='https://2021.igem.org/wiki/images/2/20/T--Waterloo--MembersAnnieZouHP.jpeg' name='Annie Zou' team='Human Practices' program='Systems Design Engineering' term='3A' place='Singapore' song='' />
                    </div>
                    <div className={styles.img_div}>
                        <ImageModal source="https://2021.igem.org/wiki/images/6/63/T--Waterloo--MembersAyeshaAsifHP.jpeg" name='Ayesha Asif' team='Human Practices' program='Science and Business' term='3B' place="Honestly, anywhere that's just not my home!" song='One Dance - Drake' />
                        <ImageModal source='https://2021.igem.org/wiki/images/b/b9/T--Waterloo--MembersClareWeiHP.jpeg' name='Clare Wei' team='Human Practices' program='Biomedical Engineering' term='2B' place='Hawaii or any music festival' song='Find an Island - BENEE' />
                        <ImageModal source='https://2021.igem.org/wiki/images/f/f5/T--Waterloo--MembersDorothyLinHP.jpeg' name='Dorothy Lin' team='Human Practices' program='Honours Science' term='2A' place="Alaska!" song='' />
                    </div>
                </Carousel.Item>
                <Carousel.Item className={styles.carousel_slide}>
                    <div className={styles.img_div}>
                        <ImageModal source='https://2021.igem.org/wiki/images/4/4a/T--Waterloo--MembersEmilyDongHP.jpeg' name='Emily Dong' team='Human Practices' program='Biotechnology/Econ' term='3A' place="Brazil!" song='' />
                        <ImageModal source='https://2021.igem.org/wiki/images/1/11/T--Waterloo--MembersEmmaLouiseCatalanHP.jpeg' name='Emma Catalan' team='Human Practices' program='Biotechnology/CPA' term='2A' place='Fiji' song='T-Shirt Weather by Circa Waves' />
                        <ImageModal source='https://2021.igem.org/wiki/images/1/1e/T--Waterloo--MembersHrishikPatelHP.jpeg' name='Hrishik Patel' team='Human Practices' program='Biomedical Engineering' term='2A' place='Waterloo' song="That's what I like (Bruno Mars)" />
                    </div>
                    <div className={styles.img_div}>
                        <ImageModal source='https://2021.igem.org/wiki/images/c/c7/T--Waterloo--MembersJackieEassonHP.jpeg' name='Jackie Easson' team='Human Practices' program='Biochemistry' term='2A' place='Everywhere but going to start with Greece' song='The nights- Avicii' />
                        <ImageModal source='https://2021.igem.org/wiki/images/3/34/T--Waterloo--MembersJulieLiLHP.jpeg' name='Julie Li' team='Human Practices' program='Biotechnology and Economics' term='3B' place='Japan' song='Nomad by Zion. T' />
                        <ImageModal source='https://2021.igem.org/wiki/images/3/36/T--Waterloo--MembersNavreetSinghHP.png' name='Navreet Singh' team='Human Practices' program='Health Studies' term='4A' place='Italy!' song='' />
                    </div>
                </Carousel.Item>
                <Carousel.Item className={styles.carousel_slide}>
                    <div className={styles.img_div}>
                        <ImageModal source='https://2021.igem.org/wiki/images/d/d5/T--Waterloo--MembersSiranjitKaurHP.jpeg' name='Siranjit Kaur' team='Human Practices' program='Biology' term='4B' place="Rome" song='The Lizzie McGuire Movie Soundtrack' />
                        <ImageModal source='https://2021.igem.org/wiki/images/9/97/T--Waterloo--MembersTemitopeLekutiHP.jpeg' name='Temitope Lekuti' team='Human Practices' program='Biomedical Science' term='4A' place='South Korea' song='Enjoy by Tekno' />
                    </div>
                </Carousel.Item>
            </Carousel>
            </div>
        )
}

export default HumanPractices;