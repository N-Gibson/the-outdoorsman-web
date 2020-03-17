import React, { Component } from 'react';
import { getCoordinates } from '../../api-calls';

class Campgrounds extends Component {
  constructor() {
    super();
    this.state ={

    }
  }

  async componentDidMount() {
    const coordinates = await getCoordinates()
    console.log(coordinates)
  }

  render() {
    <div>

    </div>
  }
}

export default Campgrounds;
