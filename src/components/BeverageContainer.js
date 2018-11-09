import { connect } from "react-redux";
import Beverage from "../components/Beverage";
import selectBeverage from "../actions/";

const mapDispatchToProps = (dispatch, props) => ({
  getBeverage: dispatch(selectBeverage(props.id))
});

const BeverageContainer = connect(
  null,
  mapDispatchToProps
)(Beverage);

export default BeverageContainer;
