import React, { Component } from 'react';
import MainScoreboard from './components/main-scoreboard';


export default class App extends Component {

  constructor(props) {
    super(props);
  }
 
  render(){
    return (
      <MainScoreboard/>
    );
  }
}

//export default App;
