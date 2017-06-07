import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const mountElement = document.getElementById('root');

ReactDOM.render(<App />, mountElement);

registerServiceWorker();
