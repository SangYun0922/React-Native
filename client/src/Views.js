import React from 'react';
import Board from './views/Board';
import Approutes from './routes/Routes';
import './Views.css';

function Views() {
    return (
        <div id="contain" className='contain' >
            <div id="header" className="header">
            </div>
            <div id="sidebar" className="sidebar">
                <Board />
            </div>
            <div id="content" className="content">
                <Approutes />
            </div>
        </div>
    );
}

export default Views;