import React, { Component } from 'react';
import './Die.css';

class Die extends Component{
    render(){
        let dieClass = "fas fa-dice-" + this.props.roll; 
        return(
            <div className="Die">
                <i className={dieClass}></i>
            </div>
        );
    }
}

export default Die;