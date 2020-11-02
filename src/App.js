import React, { Component } from 'react';
import RollDice from './RollDice';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        dice: 2
    };
}
  render() {
    return (
      <div className="App">
        <img src="/images/hq_logo.png" alt="HeroQuest Logo" className="hq_logo" />
        <h1>Dice Roll</h1>
        <RollDice dice={ this.state.dice } />
      </div>
    );
  }
}

export default App;
