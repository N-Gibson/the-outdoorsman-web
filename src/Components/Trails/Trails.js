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
    console.log(coordinates);
  }

  render() {
    return(
      <div>
        <p>This is where the trails will go!</p>
      </div>
    )
  }
}

export default Trails;
