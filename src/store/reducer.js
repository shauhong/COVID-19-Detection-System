import * as actionTypes from "./actions";

const initialState = {
  token: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGNEDIN:
      return {
        token: action.userToken
      };
    default:
      return state;
  }
}

export default reducer;
