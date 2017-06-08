import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const mountElement = document.getElementById('root');

ReactDOM.render(<h1>Hello, world!</h1>, mountElement);

registerServiceWorker();
