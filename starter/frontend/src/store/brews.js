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

export const setBrewsThunk = (city) => async (dispatch) => {
  try {
    const res = await fetch(
      `https://api.openbrewerydb.org/breweries?by_city=${city}`
    );
    if (!res.ok) throw res;

    const brews = await res.json();
    dispatch(setAllBrews(brews));
  } catch (e) {
    console.log(e);
  }
};

function brewReducer(state = { brewery: "", breweries: [] }, action) {
  let newState;
  switch (action.type) {
    case SET_BREW:
      newState = Object.assign({}, state, { brewery: action.payload });
      return newState;
    case SET_ALL_BREWS:
      return { ...state, breweries: action.payload };
    default:
      return state;
  }
}

export default brewReducer;
