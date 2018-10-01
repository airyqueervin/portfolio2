import React from 'react';
import PropTypes from 'prop-types';
import { CardColumns } from 'reactstrap';
import CardSingle from './CardSingle';

const CardsList = ({ data }) => (
  <CardColumns>
    {data.map(card => <CardSingle key={Math.random(0, 100)} card={card} />)}
  </CardColumns>
);

export default CardsList;

CardsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
