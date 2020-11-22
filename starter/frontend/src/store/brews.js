const SET_ALL_BREWS = "SET_ALL_BREWS";
const SET_BREW = "SET_BREW";

export const setAllBrews = (brews) => ({
  type: SET_ALL_BREWS,
  payload: brews,
});

export const setBrew = (brewery) => ({
  type: SET_BREW,
  payload: brewery,
});

function brewReducer(state = { brewery: "", brews: [] }, action) {
  let newState;
  switch (action.type) {
    case SET_BREW:
      newState = Object.assign({}, state, { brewery: action.payload });
      return newState;
    case SET_ALL_BREWS:
      newState = Object.assign({}, state, { brews: action.payload });
      return newState;
    default:
      return state;
  }
}

export default brewReducer;
