const defaultState = {
  beverage: {},
}

const terminalInfo = ( state = defaultState, action ) => {
  switch ( action.type ) {
    case 'SELECT_BEVERAGE':
      return Object.assign( {}, state, {
        beverage: action.beverage,        
      } );
    default:
      return state;
  }
};

export default terminalInfo;
