const backdropReducer = (state=false,action) => {
    switch (action.type){
        case "SET_BACKDROP":
            return action.open;
        default:
            return state;
    }
}

export default backdropReducer;