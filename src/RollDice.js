import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return(
            <div>
                <Die roll="one" />
                <Die roll="two" />
                <button>Roll ya dice</button>
            </div>
        );
    }
}

export default RollDice;