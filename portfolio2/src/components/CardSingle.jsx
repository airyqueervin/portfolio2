import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import Modal from './Modal';

class SingleCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }


  render() {
    const { card } = this.props;
    return (
      <Card>
        <CardImg onClick={this.toggle} top width="100%" src={card.Img[0]} alt="Card image cap" />
        <Modal modal={this.state.modal} toggle={this.toggle} img={card.Img} title={card.Title} url={card.URL} />
        <hr className="my-2" />
        <CardBody>
          <CardTitle>{ card.Title }</CardTitle>
          <CardSubtitle>{ card.Desc }</CardSubtitle>
          <CardText>{ card.Tasks.map(task => <li key={Math.random(0, 100)}>{task}</li>)}</CardText>
          <Button onClick={() => window.open(card.URL)}>Visit The App</Button>
        </CardBody>
      </Card>
    );
  }
}

export default SingleCard;

Card.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  body: PropTypes.bool,
  className: PropTypes.string,
};

CardBody.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

SingleCard.propTypes = {
  card: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]).isRequired,
};
