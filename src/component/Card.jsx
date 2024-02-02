import React from 'react';
import Sidebar from './Sidebar';
import "../styles/card.css";

function Card( props) {
    

    return (
        <div className='card'>
            <Sidebar title={props.title}/>
            <div className='cardContainer'>
                <div className='cardSubContainer'>
                    <h1>{props.title}</h1>
                    <div>{props.form}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;
