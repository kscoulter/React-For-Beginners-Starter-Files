import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
  constructor(){
    super(); //creates a react component
    this.goToStore = this.goToStore.bind(this); //do it for methods used more than once
  }
  goToStore(event) {
    event.preventDefault();
  }
  render(){
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholer="Store Name"
        defaultValue={getFunName()} ref={(input)=>{this.storeInput = input}}/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
