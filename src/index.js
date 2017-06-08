import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const mountElement = document.getElementById('root');

ReactDOM.render(<HelloWorld />, mountElement);

registerServiceWorker();
