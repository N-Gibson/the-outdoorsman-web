import React, { Component } from 'react';
import { getCoordinates, getCampgrounds } from '../../api-calls';

class Campgrounds extends Component {
  constructor() {
    super();
    this.state ={
      longitude: '',
      latitude: '',
      campgrounds: [],
    }
  }

  async componentDidMount() {
    const coordinates = await getCoordinates()
    this.setState({ longitude: coordinates.location.lng });
    this.setState({ latitude: coordinates.location.lat });

    const campgrounds = await getCampgrounds(this.state.latitude, this.state.longitude, 50);

    this.setState({ campgrounds: campgrounds.campgrounds });
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Campgrounds;
