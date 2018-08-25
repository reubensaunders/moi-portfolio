import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Me from './Moi';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<Me />, document.getElementById('root'));
registerServiceWorker();