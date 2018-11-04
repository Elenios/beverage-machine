import { connect } from 'react-redux';
import App from '../App';
import database from '../database';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  getBeverage: () => database(dispatch),
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;