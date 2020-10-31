import React, { Component } from 'react';
import './Die.css';

class Die extends Component{
    render(){
        let dieClass = "fas fa-dice-" + this.props.roll; 
        return(
            <div className="Die">
                <i className={`${dieClass} ${ this.props.rolling ? 'roll-shake' : ''}`}></i>
            </div>
        );
    }
}

export default Die;