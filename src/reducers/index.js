import authReducer from './authReducer';
import snackbarReducer from './snackbarReducer';
import backdropReducer from './backdropReducer';
import { combineReducers } from 'redux';

const globalReducers = combineReducers({
    auth: authReducer,
    snackbar: snackbarReducer,
    backdrop: backdropReducer,
});

export default globalReducers;

