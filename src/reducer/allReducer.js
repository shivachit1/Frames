import {combineReducers} from 'redux';
import frameReducer from './framesReducer';

const allReducers = combineReducers({
    frames:frameReducer
});

export default allReducers;
