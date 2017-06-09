import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const mountElement = document.getElementById('root');

ReactDOM.render(<Game />, mountElement);

registerServiceWorker();
