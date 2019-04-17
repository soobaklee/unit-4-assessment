import React from 'react';
import './Circles.css';

function Circles(props) {

    return (
        <div className="Circles">
            <div className={props.selected === props.button[0] ? "selected" : ""} name="selected" value={props.button[0]} >1</div>
            <div className={props.selected === props.button[1] ? "selected" : ""} name="selected" value={props.button[1]} >2</div>
            <div className={props.selected === props.button[2] ? "selected" : ""} name="selected" value={props.button[2]} >3</div>
            <div className={props.selected === props.button[3] ? "selected" : ""} name="selected" value={props.button[3]} >4</div>
        </div>
    )
}

export default Circles;