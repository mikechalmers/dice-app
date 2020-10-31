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
            roll: "six",
            numberOfDice: 2,
            rolling: false
        };
    }
    rollEm = (e) => {
        this.setState({ rolling: true });

        setTimeout(() => {
            this.setState({ rolling: false })
        }, 1000)
    }

    addEm = (e) => {
        if(this.state.numberOfDice < 6){
            let newDice = this.state.numberOfDice + 1;
            this.setState({ numberOfDice: newDice});
        } else {
            alert('That is too many dice, traveller.')
        }
        
    }
    removeEm = (e) => {
        if(this.state.numberOfDice > 1) {
            let newDice = this.state.numberOfDice - 1;
            this.setState({ numberOfDice: newDice});
        } else {
            alert("you need at least one die, otherwise what are you doing here?")
        }
        
    }
    render(){
        
        let diceArray = [];

        for(let i = 0; i < this.state.numberOfDice; i++){
            const randomSide = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
            diceArray.push(
                <Die roll={randomSide} rolling={this.state.rolling} />
            )
        }

        return(
            <div className="RollDice">
                <div className="RollDice-dice">
                    { diceArray }
                </div>
                <button onClick={this.rollEm} disabled={this.state.rolling}>
                    { this.state.rolling ? '~ rOlLiNg ~' : 'Roll' }
                </button>
                <button onClick={this.addEm}>
                    Add
                </button>
                <button onClick={this.removeEm}>
                    Remove
                </button>
            </div>
        );
    }
}

export default RollDice;