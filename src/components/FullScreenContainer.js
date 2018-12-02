import { connect } from "react-redux";
import FullScreen from "./FullScreen";
import clearInfo from '../actions/clearInfo';

const mapStateToProps = state => state.fullScreenInfo;

const mapDispatchToProps = dispatch => ({
  clearInfo: dispatch(clearInfo()),
});

const FullScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  
)(FullScreen);

export default FullScreenContainer;
