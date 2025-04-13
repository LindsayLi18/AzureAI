import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from '../styles/App.module.css';

const PdfPopup = ({ pdfUrl }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button 
        variant="success" 
        onClick={() => setShow(true)} 
        className={styles.pdfButton}
      >
        View Vector Database Content
      </Button>

      <Modal 
        show={show} 
        onHide={() => setShow(false)} 
        size="xl"
        centered
        dialogClassName="pdf-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Vector Database Content</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: '80vh', padding: 0 }}>
          <iframe
            src={pdfUrl}
            title="PDF"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allowFullScreen
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PdfPopup;