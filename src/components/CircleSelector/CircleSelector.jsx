import React from 'react';
import './CircleSelector.css';


function CircleSelector(props) {    

    return (
        <div className="CircleSelector">
            <button className={props.selected === props.button[0] ? "selected" : ""} name="selected" value={props.button[0]} onClick={(e) => props.handleChange(e)}>{props.selected===props.button[0] ? "Circle 1 Selected" : "Select Circle 1"}</button>
            <button className={props.selected === props.button[1] ? "selected" : ""} name="selected" value={props.button[1]} onClick={(e) => props.handleChange(e)}>{props.selected===props.button[1] ? "Circle 2 Selected" : "Select Circle 2"}</button>
            <button className={props.selected === props.button[2] ? "selected" : ""} name="selected" value={props.button[2]} onClick={(e) => props.handleChange(e)}>{props.selected===props.button[2] ? "Circle 3 Selected" : "Select Circle 3"}</button>
            <button className={props.selected === props.button[3] ? "selected" : ""} name="selected" value={props.button[3]} onClick={(e) => props.handleChange(e)}>{props.selected===props.button[3] ? "Circle 4 Selected" : "Select Circle 4"}</button>
        </div>
    );
}

export default CircleSelector;