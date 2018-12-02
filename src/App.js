import React from 'react';
import TerminalContainer from './components/TerminalContainer';
import BeverageContainer from './components/BeverageContainer';
import FullScreenContainer from './components/FullScreenContainer';

const style = {
  firstLayer: {
    display: "flex",
    justifyContent: "center"
  },
  secondLayer: {
    flexDirecton: "column"
  }
};

const App = () => (
  <div className="center">
    <h1 className="red-text text-darken-2">Beverage Machine</h1>
    <FullScreenContainer />
    <div style={ style.firstLayer }>
      <TerminalContainer />
      <div style={ style.secondLayer }>
        <BeverageContainer />
      </div>
    </div>
  </div>
);

export default App;
