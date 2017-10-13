import React, { Component } from 'react';

import './Appheader.css';
import logo from '../Applogo/logo.svg';
import Applogo from '../Applogo/Applogo';

class Appheader extends Component {
  constructor(props){
    super(props);

    this.state = {
      reactlogo: [logo],
      logoisvisible: true
    };
    this.hideLogo = this.hideLogo.bind(this);
  }

  hideLogo(){
    console.log("hidelogo is called")
    this.setState({logoisvisible: !this.state.logoisvisible})
  }

  componentDidMount(){
    console.log("Component mounted")
  }

  componentWillMount(){
    console.log("Component will mount soon")
  }

  componentWillReceiveProps(newProps){
    console.log("Component will receive properties/states")
  }

  shouldComponenetUpdate(newProps, nextState){
    console.log("Component should update")
    return true;
  }

  componentWillUpdate(newProps, nextState){
    console.log("Component will update")
  }

  componentDidUpdate(newProps, nextState){
    console.log("Component did update")
  }

  componentWillUnmount(){
    console.log("Component will Unmount")
  }

  render(){
    console.log(this.props);
    return(
      <div className="App-header">
        {this.state.logoisvisible && < Applogo reactlogo={this.state.reactlogo} / >}
        <h2 onClick={this.hideLogo}>{this.props.msg}</h2>

      </div>
    );
  }
}


export default Appheader;
