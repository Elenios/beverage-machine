import { connect } from 'react-redux';
import BeverageList from './BeverageList';
import database from '../database';
import selectBeverage from '../actions/selectBeverage';

const mapDispatchToProps = dispatch => ({
  getBeverageInfo: dispatch(selectBeverage(database)),
});

const BeverageContainer = connect(
  null,
  mapDispatchToProps,
)(BeverageList);

export default BeverageContainer;
