import React, { Component } from 'react';
import './Appintro.css';

class Appintro extends Component {
  
  render(){
    return(
      <div>
        <p className="App-intro">
          To get started, edit <code>{this.props.wheretostartinreact[0]}</code> {this.props.wheretostartinreact[1]}
        </p>
      </div>
    );
  }
}

export default Appintro;
