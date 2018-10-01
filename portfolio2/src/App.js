import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import PropTypes from 'prop-types';
import CardsList from './components/CardsList';
import './App.css'
import { title, headMessage, summary } from './data/strings'

const App = ({ data }) => (
  <div id="top-space">
    <Container fluid>
      <Jumbotron>
        <h1 className="display-3">{title}</h1>
        <p className="lead">{headMessage}</p>
        <hr className="my-2" />
        <p>{summary}</p>
      </Jumbotron>
      <CardsList data={data} />
    </Container>
  </div>
);

export default App;

Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string,
};

Container.propTypes = {
  fluid: PropTypes.bool,
};

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
