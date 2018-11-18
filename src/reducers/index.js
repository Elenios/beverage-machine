const defaultState = {
  beverageDetails: [],
}

const beverageInfo = ( state = defaultState, action ) => {
  switch ( action.type ) {
    case "SELECT_BEVERAGE":
    return Object.assign( {}, state, {
      beverageDetails: action.beverageDetails,        
    } );
    default:
    return state;
  }
};


export default beverageInfo;