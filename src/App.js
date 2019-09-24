import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

const words = ["Hello", "World", "Boy", "Girl", "Food", "Line", "Cat", "Dog", "Blood", "King"]
var a = parseInt(Math.random() * 10)
const word = words[a]

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          <WordCard value={word}/>
        }
        <img src="https://images7.alphacoders.com/935/935553.png" width="1366" height="768"></img>
      </div>
    );
  }
}
export default App;