import React, { Component } from 'react';
import { getCoordinates } from '../../api-calls';

class Campgrounds extends Component {
  constructor() {
    super();
    this.state ={
      longitude: '',
      latitude: '',
    }
  }

  async componentDidMount() {
    const coordinates = await getCoordinates()
    this.setState({ longitude: coordinates.location.lng });
    this.setState({ latitude: coordinates.location.lat });
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Campgrounds;
