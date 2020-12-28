const initialState = {
    open: false,
    type: "success",
    message: "",
};

const snackbarReducer = (state=initialState, action) => {
    switch(action.type){
        case "SET_SNACKBAR":
            const {open, messageType, message} = action;
            return {
                ...action,
                open,
                messageType,
                message
            };
        default:
            return state;
    }
};

export default snackbarReducer;