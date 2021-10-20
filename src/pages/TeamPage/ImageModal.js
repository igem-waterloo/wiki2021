import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import overallStyles from '../overall.module.scss';
import styles from './imagemodal.module.scss';

const ImageModal = ({ source, name }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <img src={source} onClick={handleShow}></img>

        <Modal show={show} onHide={handleClose} size="lg" centered dialogClassName={styles.modal}>
            <Modal.Header closeButton className={styles.header}>
            <Modal.Title><div className={styles.header_title}>{name}</div></Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.description}>
                <div className={styles.img_div}>
                    <img src={source} style={{width: 250, height: 260}}></img>
                </div>
                <div className={styles.info_div}>
                    <div className={styles.team_name}>Wiki</div>
                    <div className={styles.member_info}>Lorem ipsum dolor sit amet, ad eos dolore utamur, iusto recusabo ex sit. Vidit labitur consequuntur vix ex, ex vix habeo dicant quaerendum, ei alia summo facete nec. Latine persequeris et ius.</div>
                </div>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default ImageModal;