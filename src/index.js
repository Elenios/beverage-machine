import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './components/AppContainer';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
// import Coke from './component/Coke';
// import CokeZero from './component/CokeZero';
// import Fanta from './component/Fanta';
// import Sprite from './component/Sprite';
// import Kinley from './component/Kinley';
// import DrPepper from './component/DrPepper';

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
        <Route exact path="/" component={ AppContainer } />
        {/* <Route path="/coke" component={ Coke } />
        <Route path="/cokezero" component={ CokeZero } />
        <Route path="/fanta" component={ Fanta } />
        <Route path="/sprite" component={ Sprite } />
        <Route path="/kinley" component={ Kinley } />
        <Route path="/drpepper" component={ DrPepper } /> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById( 'root' )
);
