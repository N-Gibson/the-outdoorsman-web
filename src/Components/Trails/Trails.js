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

  componentDidMount() {
    const coordinates = getCoordinates();
    console.log(coordinates);
  }

  render() {
    return(
      <div>

      </div>
    )
  }
}

export default Trails;
