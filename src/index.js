import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.scss';
import Badge from './components/Badge.jsx';

const container = document.getElementById('app');

ReactDOM.render(<Badge />, container);
