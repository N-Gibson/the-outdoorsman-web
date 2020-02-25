import React, { Component } from 'react';
import { getTrails, getCoordinates } from '../../api-calls';

class Trails extends Component {
  constructor() {
    super();
    this.state = {
      longitude: '',
      latitude: '',
      currentTrail: {},
    }
  }

  async componentDidMount() {
    const coordinates = await getCoordinates();
    this.setState({ longitude: coordinates.location.lng });
    this.setState({ latitude: coordinates.location.lat });
  }

  render() {
    console.log('longitude: ', this.state.longitude);
    console.log('latitude: ', this.state.latitude);
    return(
      <div>
        <p>This is where the trails will go!</p>
      </div>
    )
  }
}

export default Trails;
