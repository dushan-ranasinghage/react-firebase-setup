import { combineReducers } from 'redux';

import post from './post.reducer'
import employee from './employee.reducer'

const rootReducer = combineReducers({
    post,
    employee
});

export default rootReducer;
