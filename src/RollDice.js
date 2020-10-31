import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component{
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props){
        super(props);
        this.state = {
            roll: "six"
        };
    }
    render(){
        return(
            <div className="RollDice">
                <div className="RollDice-dice">
                    <Die roll={ this.state.roll } />
                    <Die roll={ this.state.roll } />
                </div>
                <button>Roll ya dice</button>
            </div>
        );
    }
}

export default RollDice;