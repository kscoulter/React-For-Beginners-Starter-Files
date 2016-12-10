import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor(){
    super(); //initializes the react componenet
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    //get initial state
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish){
    //update our state
    const fishes = {...this.state.fishes}; //... is a spread, takes every item from the object and maps it onto the new object. Basically duplicates the object.
    //add new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    //set state
    this.setState({fishes})
  }

  loadSamples(){
    this.setState({
      fishes: sampleFishes
    });
  }
  render(){
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            <Fish />
          </ul>
        </div>
          <Order />
          <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;
