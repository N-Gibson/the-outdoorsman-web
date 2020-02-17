export const getTrails = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_HIKING_PROJECT_ALL_TRAILS_URL}lat=40.0274&lon=-105.2519&maxDistance=10&key=${process.env.REACT_APP_HIKING_PROJECT_KEY}`)
    if ( !response.ok ) {
      throw new Error('There was an error loading trails.');
    }
    return response.json();
  } catch(error) {
    throw new Error(error);
  }
}

export const getCoordinates = async () => {
  const url = `${process.env.REACT_APP_COORDINATES_URL}${process.env.REACT_APP_COORDINATES_KEY}${process.env.COORDINATES_UNIQUE_USER}`;
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    const response = await fetch(url, options);
    if( !response.ok ) {
      throw new Error('There was an error getting your coordinates')
    }
    return response.json();
  } catch (error) {
    throw new Error(error)
  }
}

export const getTrail = async (trailNo) => {
  try {
    const response = await fetch();
    if( !response.ok ) {
      throw new Error(`There was an error getting trail number ${trailNo}`)
    }
    return response.json;
  } catch (error) {
    throw new Error(error)
  } 
}
