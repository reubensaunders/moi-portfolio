import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Moi from './Moi';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<Moi />, document.getElementById('root'));
registerServiceWorker();
