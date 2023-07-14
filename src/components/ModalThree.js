import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import Image from "react-bootstrap/Image";
import headshot from "../imgs/headshot_wigleyr.jpg";

const ModalThree = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton={false} className="p-1 border-bottom-0 d-flex">
        <Modal.Title className="" id="contained-modal-title-vcenter">
          Modal Header
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body className="p-2">
        <Image src={headshot} thumbnail className="border-0 p-0" />
        <Modal.Title
          className="border-top mt-1"
          id="contained-modal-title-vcenter"
        >
          Modal Header 3
        </Modal.Title>
        <h4 className="modal-stack m-0">Centered Modal</h4>
        <p className="modal-content border-0 m-0">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer
        closeButton
        className="border-0 justify-content-between p-2"
      >
        <Button
          className="btn-info modal-stack border-0 m-0 px-2 py-1"
          onClick={props.onHide}
        >
          Visit Project
        </Button>
        <CloseButton className="p-0 m-0" onClick={props.onHide} />
      </Modal.Footer>
    </Modal>
  );
};

export default ModalThree;
