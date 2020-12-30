export const signIn = (token) => {
    return {
        type: "SIGNEDIN",
        token: token,
    }
};

export const signOut = () => {
    return{
        type: "SIGNEDOUT",
        token: "",
    }
};

export const setSnackbar = (open, messageType="success", message="") => {
    return {
        type: "SET_SNACKBAR",
        open,
        messageType,
        message,
    }
};

export const setBackdrop = (open) => {
    return {
        type: "SET_BACKDROP",
        open,
    }
}