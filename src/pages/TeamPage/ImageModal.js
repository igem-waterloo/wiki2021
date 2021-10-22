import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import overallStyles from '../overall.module.scss';
import styles from './imagemodal.module.scss';

const ImageModal = ({ source, name, team, program, term, place, song }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className={styles.modal_img} style={{width: 200, height: 200, margin: 'auto', overflow: 'hidden'}}>
            <img src={source} onClick={handleShow} style={{height: '100%', borderRadius: '100%'}}></img>
        </div>

        <Modal show={show} onHide={handleClose} size="lg" centered dialogClassName={styles.modal}>
            <Modal.Header closeButton className={styles.header}>
            <Modal.Title><div className={styles.header_title}>{name}</div></Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.description}>
                <div className={styles.img_div}>
                    <img src={source} style={{height: '100%', borderRadius: '100%', margin: '0 auto', display: 'block'}}></img>
                </div>
                <div className={styles.info_div}>
                    <div className={styles.team_name}>{team}</div>
                    <div className={styles.member_info}>Program: {program}</div>
                    <div className={styles.member_info}>Current Term: {term}</div>
                    {place && 
                        <div className={styles.member_info}><strong>Where would you like to go after pandemic ends?</strong> <br></br><em>{place}</em></div>
                    }
                    {song && 
                        <div className={styles.member_info}><strong>And recommend a song you will play when travelling to this place!</strong> <br></br><em>{song}</em></div>
                    }
                </div>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default ImageModal;