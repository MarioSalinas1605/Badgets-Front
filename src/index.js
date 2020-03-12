import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './styles/global.scss';
import NewBadge from './pages/BadgeNew.jsx'

const container = document.getElementById('app');

ReactDOM.render(<NewBadge />, container);
