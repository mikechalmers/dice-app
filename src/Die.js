import React, { Component } from 'react';
import './Die.css';


class Die extends Component{ 
    render(){
        // let dieClass = "fas fa-dice-" + this.props.roll;
        let dieSource = "/images/HeroQuest-Die-Face-" + this.props.result + ".png";
        let dieNumSource = "/images/6HeroQuest-Die-Face-" + this.props.result + ".png";
        const numDice = this.props.numDice;

        return(
                <div className="Die col-4 col-sm-4 col-lg-2">
                    {numDice 
                        ? <img src={`${dieNumSource}`} className={`Die-image ${ this.props.rolling && 'roll-shake'}`} alt=""/>
                        : <img src={`${dieSource}`} className={`Die-image ${ this.props.rolling && 'roll-shake'}`} alt=""/>
                    }
                    
                    {/* <i className={`${dieClass} ${ this.props.rolling ? 'roll-shake' : ''}`}></i> */}
                    {/* <img src={`${dieSource}`} className={`Die-image ${ this.props.rolling && 'roll-shake'}`} alt=""/> */}
                </div>
        );
    }
}

export default Die;