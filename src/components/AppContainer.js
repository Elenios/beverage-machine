import { connect } from 'react-redux';
import App from '../App';
import store from '../store';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  getBeverage: store(dispatch),
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;