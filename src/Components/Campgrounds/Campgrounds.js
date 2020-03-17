import React, { Component } from 'react';
import { getCoordinates, getCampgrounds } from '../../api-calls';
import Campground from '../Campground/Campground';

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
    let defaultCampgrounds;
    if(this.state.campgrounds !== []) {
      defaultCampgrounds = this.state.campgrounds.map(campground => <Campground key={campground.id} campground={campground}/>);
    }

    return (
      <div>
        {defaultCampgrounds}
      </div>
    )
  }
}

export default Campgrounds;
