export const defaultState = {
  info: {}
};

const fullScreenInfo = (state = defaultState, action) => {
  switch (action.type) {
    case 'MORE_INFO':
      return Object.assign({}, state, {
        info: action.info,
      });
    case 'CLEAR_INFO':
      return Object.assign({}, state, {
        info: {},
      });
    default:
      return state;
  }
};

export default fullScreenInfo;