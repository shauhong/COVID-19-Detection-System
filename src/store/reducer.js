import * as actionTypes from "./actions";

const initialState = {
  token: "",
  signIn: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGNEDIN:
      console.log("HI" + action.userToken);
      return {
        token: action.userToken,
        signIn: true
      };
    case actionTypes.SIGNEDOUT:
      return {
        token: "",
        signIn: false
      };
    default:
      return state;
  }
}

export default reducer;
