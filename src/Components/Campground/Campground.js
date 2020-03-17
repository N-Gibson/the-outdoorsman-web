import React from 'react';

const Campground = (props) => {
  const { name, location, latitude, longitude, imgUrl, numCampsites, url } = props.campground;
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} />
      <p>Location: {location}</p>
      <p>Number of bookable campsites: {numCampsites}</p>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      <a href={url}>See the campground!</a>
    </div>
  )
}

export default Campground;
