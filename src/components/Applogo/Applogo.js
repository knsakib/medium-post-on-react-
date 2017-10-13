import React, { Component } from 'react';
import './Applogo.css';

class Applogo extends Component {

  render(){
    return(
      <img src={this.props.reactlogo} className="App-logo" alt="logo" />
    );
  }
}

export default Applogo;
