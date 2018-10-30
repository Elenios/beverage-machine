import React, { Component } from 'react';
import { BrowserRouter } from 'react-dom';
import Terminal from './components/Terminal';
import BeverageList from './components/BeverageList';



class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>Beverage Machine</h1>
          <div className="Machine">
          <Terminal />
          <BeverageList />
          </div>
        </div>
    );
  }
}

export default App;
