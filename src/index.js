import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    //Adding route
    <Router>
        <App />
    </Router>,
    document.getElementById('root')

);

