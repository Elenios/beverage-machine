const defaultState = {
  beverageID: null,
}

const terminalInfo = ( state = defaultState, action ) => {
  switch ( action.type ) {
    case 'SELECT_BEVERAGE':
    console.log(action.beverageID);
      return Object.assign( {}, state, {
        beverageID: action.beverageID,        
      } );
    default:
      return state;
  }
};


export default terminalInfo;