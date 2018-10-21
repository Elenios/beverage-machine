import React, { Component } from 'react';
import { BrowserRouter } from 'react-dom';
import Terminal from './components/Terminal';
import BeverageList from './components/BeverageList';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Beverage Machine</h1>
          <Terminal />
          <BeverageList />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
