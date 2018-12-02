import { connect } from "react-redux";
import Terminal from "../components/Terminal";
import moreInfo from "../actions/moreInfo";

const mapStateToProps = state => state.terminalInfo;

const mapDispatchToProps = dispatch => ({
  moreInfo: (info) => dispatch(moreInfo(info))
});

const TerminalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Terminal);

export default TerminalContainer;
