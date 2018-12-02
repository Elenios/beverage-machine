import { connect } from "react-redux";
import BeverageList from "../components/BeverageList";
import selectBeverage from "../actions/selectBeverage";

const mapDispatchToProps = dispatch => ({
  getBeverage: (beverage) => dispatch(selectBeverage(beverage))
});

const BeverageContainer = connect(
  null,
  mapDispatchToProps
)(BeverageList);

export default BeverageContainer;
