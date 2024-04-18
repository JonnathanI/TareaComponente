// CarFactory.tsx
import React, { Component } from 'react';

interface CarFactoryState {
  productionStatus: string;
}

class CarFactory extends Component<{}, CarFactoryState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      productionStatus: 'Idle',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ productionStatus: 'Production Started' });
    }, 2000);
  }

  componentDidUpdate() {
    if (this.state.productionStatus === 'Production Started') {
      setTimeout(() => {
        this.setState({ productionStatus: 'Painting Cars' });
      }, 2000);
    } else if (this.state.productionStatus === 'Painting Cars') {
      setTimeout(() => {
        this.setState({ productionStatus: 'Assembling Cars' });
      }, 2000);
    } else if (this.state.productionStatus === 'Assembling Cars') {
      setTimeout(() => {
        this.setState({ productionStatus: 'Quality Checking' });
      }, 2000);
    } else if (this.state.productionStatus === 'Quality Checking') {
      setTimeout(() => {
        this.setState({ productionStatus: 'Finished' });
      }, 2000);
    }
  }

  render() {
    return (
      <div className="car-factory">
        <h2>Production Status: {this.state.productionStatus}</h2>
      </div>
    );
  }
}

export default CarFactory;
