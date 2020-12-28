import authReducer from './authReducer';
import snackbarReducer from './snackbarReducer';
import { combineReducers } from 'redux';

const globalReducers = combineReducers({
    auth: authReducer,
    snackbar: snackbarReducer,
});

export default globalReducers;

