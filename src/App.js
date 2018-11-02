import React, { Component } from 'react';
import { BrowserRouter } from 'react-dom';
import Terminal from './components/Terminal';
import BeverageList from './components/BeverageList';



const App = () => {
    return (
        <div className="App">
          <h1>Beverage Machine</h1>
          <div className="Machine">
          <Terminal />
          <BeverageList />
          </div>
        </div>
    )
  };

export default App;
