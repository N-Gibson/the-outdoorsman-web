import React, { Component } from 'react';
import { getTrails, getCoordinates } from '../../api-calls';
import Trail from '../Trail/Trail';

class Trails extends Component {
  constructor() {
    super();
    this.state = {
      longitude: '',
      latitude: '',
      currentTrails: [],
    }
  }

  async componentDidMount() {
    const coordinates = await getCoordinates();
    this.setState({ longitude: coordinates.location.lng });
    this.setState({ latitude: coordinates.location.lat });

    const trails = await getTrails(this.state.latitude, this.state.longitude);
    this.setState({ currentTrails: trails.trails });
  }

  render() {
    let defaultTrails;
    if (this.state.currentTrails !== []) {
      defaultTrails = this.state.currentTrails.map(trail => <Trail props={trail} key={trail.id}/>)
    }

    return(
      <div>
        {defaultTrails}
      </div>
    )
  }
}

export default Trails;
