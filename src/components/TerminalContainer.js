import { connect } from 'react-redux';
import Terminal from './Terminal';

const mapStateToProps = state => state.beverageInfo;

const TerminalContainer = connect(
  mapStateToProps,
  null,
)(Terminal);

export default TerminalContainer;
