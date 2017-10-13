import React, { Component } from 'react';
import './App.css';
import Appheader from '../Appheader/Appheader';
import Appintro from '../Appintro/Appintro';
import PropTypes from 'prop-types';



class App extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="App">

        <Appheader msg="Welcome to React" />
        <Appintro wheretostartinreact={this.props.wheretostart} />

      </div>
    );
  }
}



App.propTypes = {
  wheretostart: PropTypes.array.isRequired
}

App.defaultProps = {
  wheretostart: ['src/App.js', 'and then save to reload.']
}

export default App;
