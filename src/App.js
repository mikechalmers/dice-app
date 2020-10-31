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
      <h1>HeroQuest Dice</h1>
      <RollDice dice={ this.state.dice } />
    </div>
    );
  }
}

export default App;
