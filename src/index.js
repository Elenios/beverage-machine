import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './components/AppContainer';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import  Coke  from './components/Coke';
// import CokeZero from './components/CokeZero';
// import Fanta from './components/Fanta';
// import Sprite from './components/Sprite';
// import Kinley from './components/Kinley';
// import DrPepper from './components/DrPepper';

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={ AppContainer } />
        <Route path="/coke" component={ Coke } />
        {/* <Route path="/cokezero" component={ CokeZero } />
        <Route path="/fanta" component={ Fanta } />
        <Route path="/sprite" component={ Sprite } />
        <Route path="/kinley" component={ Kinley } />
        <Route path="/drpepper" component={ DrPepper } /> */}
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById( 'root' )
);
