import React from 'react';
import { render } from 'react-dom';
import App from './App';
import data from './data/data.json';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

render(<App data={data} />, document.getElementById('root'));
registerServiceWorker();
