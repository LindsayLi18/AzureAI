import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const PdfPopup = (pdfUrl) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} style={{marginLeft: '2rem'}}>
        View Vector Database Content
      </Button>

      <Modal show={show} onHide={() => setShow(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>PDF Viewer</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: '80vh' }}>
          <iframe
            src='/China-Tourism-Industry-Action-Plan.pdf'
            title="PDF"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
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
