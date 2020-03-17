export const getTrails = async (lat, lng) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_HIKING_PROJECT_ALL_TRAILS_URL}lat=${lat}&lon=${lng}&maxDistance=10&key=${process.env.REACT_APP_HIKING_PROJECT_KEY}`)
    if ( !response.ok ) {
      throw new Error('There was an error loading trails.');
    }
    return response.json();
  } catch(error) {
    throw new Error(error);
  }
}

export const getCoordinates = async () => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    const response = await fetch(process.env.REACT_APP_PROXY_URL, options);
    if( !response.ok ) {
      throw new Error('There was an error getting your coordinates')
    }
    return response.json();
  } catch (error) {
    throw new Error(error)
  }
}

export const getTrail = async (trailNo) => {
  const url = `${process.env.REACT_APP_TRAIL_BY_ID}${trailNo}${process.env.REACT_APP_TRAIL_BY_ID_KEY}`
  try {
    const response = await fetch(url);
    if( !response.ok ) {
      throw new Error(`There was an error getting trail number ${trailNo}`)
    }
    return response.json;
  } catch (error) {
    throw new Error(error)
  }
}

export const getCampgrounds = async (lat, lng, distance) => {
  const url = `${process.env.REACT_APP_CAMPGROUNDS_URL}${process.env.REACT_APP_CAMPGROUNDS_LAT}${lat}${process.env.REACT_APP_CAMPGROUNDS_LNG}${lng}${process.env.REACT_APP_CAMPGROUNDS_DISTANCE}${distance}${process.env.REACT_APP_CAMPGROUNDS_KEY}`

  try {
    const response = await fetch(url);
    if( !response.ok ) {
      throw new Error('There was an error fetching campgrounds near you.');
    }
    return response.json();
  } catch (error) {
    throw new Error(error)
  }
}
