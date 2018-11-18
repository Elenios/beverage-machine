import React from 'react';
import Terminal from './components/Terminal';
import BeverageList from './components/BeverageList';

const style = {
  firstLayer: {
    display: 'flex',
    justifyContent: 'center',
  },
  secondLayer: {
    flexDirecton: 'column',
  },
};

const App = () => (
  <div className="center">
    <h1 className="red-text text-darken-2">Beverage Machine</h1>
    <div style={style.firstLayer}>
      <Terminal />
      <div style={style.secondLayer}>
        <BeverageList />
      </div>
    </div>
  </div>
);

export default App;
