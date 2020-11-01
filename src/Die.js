import React, { Component } from 'react';
import './Die.css';

class Die extends Component{
    render(){
        let dieClass = "fas fa-dice-" + this.props.roll;
        let dieSource = "/images/HeroQuest-Die-Face-" + this.props.result + ".png";
        return(
            <div className="Die">
                {/* <i className={`${dieClass} ${ this.props.rolling ? 'roll-shake' : ''}`}></i> */}
                <img src={`${dieSource}`} className={`${dieClass} ${ this.props.rolling ? 'roll-shake' : ''}`} alt=""/>
            </div>
        );
    }
}

export default Die;