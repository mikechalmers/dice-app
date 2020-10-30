import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component{
    render(){
        return(
            <div>
                <Die roll={this.state.roll1} />
                <Die roll={this.state.roll2} />
                <button>Roll ya dice</button>
            </div>
        );
    }
}

export default RollDice;