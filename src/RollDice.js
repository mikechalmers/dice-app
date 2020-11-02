import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component{
    static defaultProps = {
        faces: ['1', '2', '3', '4', '5', '6']
    }
    constructor(props){
        super(props);
        this.state = {
            roll: "two",
            result1: 6,
            result2: 6,
            result3: 6,
            result4: 6,
            result5: 6,
            result6: 6,
            numberOfDice: 2,
            rolling: false,
            numDice: false
        };
    }
    rollEm = (e) => {
        
        const newDie1 = Math.floor((Math.random() * 6) + 1);
        const newDie2 = Math.floor((Math.random() * 6) + 1);
        const newDie3 = Math.floor((Math.random() * 6) + 1);
        const newDie4 = Math.floor((Math.random() * 6) + 1);
        const newDie5 = Math.floor((Math.random() * 6) + 1);
        const newDie6 = Math.floor((Math.random() * 6) + 1);
        
        this.setState({ rolling: true });

        setTimeout(() => {
            this.setState({ 
                rolling: false,
                result1: newDie1,
                result2: newDie2,
                result3: newDie3,
                result4: newDie4,
                result5: newDie5,
                result6: newDie6
            })
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
    diceSwap = (e) => {
        if(this.state.numDice) {
            this.setState({ numDice: false});
        } else {
            this.setState({ numDice: true});
        }
        
    }
    render(){
        
        let diceArray = [];
        let results = [this.state.result1, this.state.result2, this.state.result3, this.state.result4, this.state.result5, this.state.result6];
        console.log(results);
        for(let i = 0; i < this.state.numberOfDice; i++){
            const randomResult = results[i];
            diceArray.push(
                <Die result={randomResult} rolling={this.state.rolling} numDice={this.state.numDice} roll={this.state.roll} />
            )
        }

        return(
            <div className="RollDice">
                <div className="container">
                    <div className="row my-md-5 justify-content-center">
                        { diceArray }
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12 ">
                            <button className="px-4" onClick={this.rollEm} disabled={this.state.rolling}>
                                <span className={`d-none d-md-inline-block ${ this.state.rolling && 'rolling' }`}>{ this.state.rolling ? '~ rOlLiNg ~' : 'Roll' }</span>
                                <span className="d-inline-block d-md-none">Roll</span>
                            </button>
                            <button className="px-4" onClick={this.diceSwap}>
                                <span className="d-none d-md-inline-block">{ this.state.numDice ? 'HeroQuest Dice' : 'Numbered Dice' }</span>
                                <span className="d-inline-block d-md-none">{ this.state.numDice ? <img src="/images/Shield.png" className="monster" alt="Monster Shield" /> : '123' }</span>
                            </button>
                        </div>

                        <div className="col-12">
                            <button onClick={this.addEm}>
                                <span className="d-none d-md-inline-block mx-4">Add</span>
                                <span className="d-inline-block d-md-none mx-3 symbols">+</span>
                            </button>
                            <button onClick={this.removeEm}>
                                <span className="d-none d-md-inline-block mx-4">Remove</span>
                                <span className="d-inline-block d-md-none mx-3 symbols">-</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RollDice;