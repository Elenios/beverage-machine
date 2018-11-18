import { connect } from 'react-redux';
import Beverage from './Beverage';
import selectBeverage from '../actions/selectBeverage';
import store from '../database';

const mapDispatchToProps = dispatch => ({
  getBeverageInfo: dispatch(selectBeverage(store.database)),
});

const BeverageContainer = connect(
  null,
  mapDispatchToProps,
)(Beverage);

export default BeverageContainer;
