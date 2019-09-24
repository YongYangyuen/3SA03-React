import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';


const word = "Hello"

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          <WordCard value={word}/>
        }
        <img src="https://images7.alphacoders.com/935/935553.png"></img>
      </div>
    );
  }
}
export default App;