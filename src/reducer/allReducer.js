import {combineReducers} from 'redux';
import frameReducer from './framesReducer';
import modalReducer from './modalReducer';
import cartReducer from './cartReducer';

const allReducers = combineReducers({
    frames:frameReducer,
    modal:modalReducer,
    cart:cartReducer
});

export default allReducers;
