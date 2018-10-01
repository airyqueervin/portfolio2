import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Carousel from './Carousel';

const ModalCarousel = ({
  modal, toggle, img, title, url,
}) => (
  <div>
    <Modal isOpen={modal} toggle={toggle} style={{ maxWidth: '75%' }}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>
        <Carousel items={img} />
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => {
          window.open(url);
          toggle();
        }}
        >Vist The App
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
);

export default ModalCarousel;

ModalCarousel.propTypes = {
  toggle: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  img: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

Modal.propTypes = {
  // boolean to control the state of the popover
  isOpen: PropTypes.bool,
  autoFocus: PropTypes.bool,
  // if modal should be centered vertically in viewport
  centered: PropTypes.bool,
  size: PropTypes.string,
  // callback for toggling isOpen in the controlling component
  toggle: PropTypes.func,
  role: PropTypes.string, // defaults to "dialog"
  // used to reference the ID of the title element in the modal
  labelledBy: PropTypes.string,
  keyboard: PropTypes.bool,
  // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static']),
  ]),
  // allows for a node/componet to exist next to the modal (outside of it).
  // Useful for external close buttons
  // external: PropTypes.node,
  // called on componentDidMount
  onEnter: PropTypes.func,
  // called on componentWillUnmount
  onExit: PropTypes.func,
  // called when done transitioning in
  onOpened: PropTypes.func,
  // called when done transitioning out
  onClosed: PropTypes.func,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  // boolean to control whether the fade transition occurs (default: true)
  fade: PropTypes.bool,
  cssModule: PropTypes.oneOfType([
    PropTypes.object,
  ]),
  // zIndex defaults to 1000.
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};
