export const getTrails = async () => {
  try {
    const response = await fetch(`${HIKING_PROJECT_ALL_TRAILS_URL}lat=40.0274&lon=-105.2519&maxDistance=10&key=${HIKING_PROJECT_KEY}`)
    if ( !response.ok ) {
      throw new Error('There was an error loading trails.');
    }
    return response.json();
  } catch(error) {
    throw new Error(error);
  }
}

export const getCoordinates = async () => {
  try {
    const response = await fetch(`${COORDINATES_URL}${COORDINATES_KEY}${COORDINATES_UNIQUE_USER}`);
    if( !response.ok ) {
      throw new Error('There was an error getting your coordinates')
    }
    return response.json();
  } catch (error) {
    throw new Error(error)
  }
}
