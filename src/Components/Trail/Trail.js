import React from 'react';

const Trail = (props) => {
  console.log(props)
  return (
    <div>
      <h2>{props.trail.name}</h2>
      <img src={props.trail.imgSmallMed} />
    </div>
  )
}

export default Trail
