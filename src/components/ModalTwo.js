import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import Image from "react-bootstrap/Image";
import adduser from "../imgs/add-user-demo.png";

const ModalTwo = (props) => {
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
        <Image src={adduser} thumbnail className="border-0 p-0" />
        <Modal.Title
          className="border-top mt-1"
          id="contained-modal-title-vcenter"
        >
          Add User Demo
        </Modal.Title>
        <h4 className="modal-stack m-0 title-primary-emphasis">HTML CSS React</h4>
        <p className="modal-content border-0 m-0">
          A demo project that shows basic understanding of React hooks, managing state, rendering conditional content, event listening, and styling components.
        </p>
      </Modal.Body>
      <Modal.Footer
        closeButton
        className="border-0 justify-content-between p-2"
      >
        <Button
          className="btn-info modal-stack border-0 m-0 px-1 py-1 fw-bold"
          onClick={props.onHide}
          href="https://rwigley55.github.io/add-user-demo/"
          target="_blank"
        >
          Visit Project
        </Button>
        <CloseButton className="p-0 m-0" onClick={props.onHide} />
      </Modal.Footer>
    </Modal>
  );
};

export default ModalTwo;
