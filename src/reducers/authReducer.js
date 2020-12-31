let initialState;
if ("signIn" in localStorage && "token" in localStorage){
    initialState = {
        signIn: localStorage.signIn,
        token: localStorage.token,
    };
}else{
    initialState = {
        signIn: false,
        token: "",
    };
}

const authReducer = (state=initialState, action) => {
    switch(action.type){
        case "SIGNEDIN":
            return {
                signIn: true,
                token: action.token,
            }
        case "SIGNEDOUT":
            return {
                signIn: false,
                token: "",
            }
        default:
            return state;
    }

};

export default authReducer;