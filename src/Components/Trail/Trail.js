import React from 'react';
import { Link } from 'react-router-dom';

const Trail = (props) => {
  return (
    <div>
        <h2>{props.trail.name}</h2>
        <img src={props.trail.imgSmallMed} />
        <p>{props.trail.summary}</p>
        <p>Difficulty: {props.trail.difficulty}</p>
        <p>Stars: {props.trail.stars}</p>
        <p>Length: {props.trail.length}</p>
        <p>Ascent: {props.trail.ascent}</p>
        <p>Descent: {props.trail.descent}</p>
    </div>
  )
}

export default Trail
