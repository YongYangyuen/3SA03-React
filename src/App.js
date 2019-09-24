import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

const words = ["Hello", "World", "Boy", "Girl", "Food", "Line", "Cat", "Dog", "Blood", "King", "Baby", "Gold"]
var a = parseInt(Math.random() * 12)
const word = words[a]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Words Game</h1>
        {
          <WordCard value={word}/>
        }
        <img src="https://images7.alphacoders.com/935/935553.png" width="1366" height="768"></img>
      </div>
    );
  }
}
export default App;