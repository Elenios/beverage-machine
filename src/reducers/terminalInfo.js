const defaultState = {
  beverageInfo: {},
}

const terminalInfo = ( state = defaultState, action ) => {
  switch ( action.type ) {
    case 'SELECT_BEVERAGE':
    console.log(state.beverageInfo);
      return Object.assign( {}, state, {
        beverageInfo: action.beverageInfo,        
      } );
    default:
      return state;
  }
};


export default terminalInfo;