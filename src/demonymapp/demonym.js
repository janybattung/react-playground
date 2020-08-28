import React from 'react';
import './demonym.css';

export default function Demonyn(props) {
    return(
        <div className="demonym">
            A {props.name} comes from {props.country}
        </div>
    );
}