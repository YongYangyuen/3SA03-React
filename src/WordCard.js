import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    
    return {
        word,
        chars,
        life: 3,
        attempt: 1,
        guess: [],
        completed: false
    }
}

export default class WordCard extends Component {
    constructor(props) {
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }

    activationHandler = (c) => {
        let guess = [...this.state.guess, c]
        this.setState({guess})
        if(guess.length == this.state.chars.length) {
            if(guess.join('').toString() == this.state.word) {
                this.setState({guess: [], completed: true})

            }
            else {
                this.setState({guess: [], attempt: this.state.attempt + 1})
                --this.state.life
                if(this.state.attempt == 3) {
                    alert("You lose ! \n" + "Answer: " + this.state.word)
                    window.location.reload()
                }
            }
        }
        console.log(`${c} has been activated.`)
    }

    render() {  
        return(
            <div className="App">
                {
                    Array.from(this.state.chars).map((c, i) => <CharacterCard value={c} key={i} attempt={this.state.attempt} activationHandler={this.activationHandler}/>)
                }
                <br></br><span><h3>Life: {this.state.life}</h3></span>
            </div>
        );
    }
}