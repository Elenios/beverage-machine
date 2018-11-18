import { connect } from 'react-redux';
import Beverage from './Beverage';
import database from '../database';
import selectBeverage from '../actions/selectBeverage';

const mapDispatchToProps = dispatch => ({
  getBeverageInfo: dispatch(selectBeverage(database)),
});

const BeverageContainer = connect(
  null,
  mapDispatchToProps,
)(Beverage);

export default BeverageContainer;
