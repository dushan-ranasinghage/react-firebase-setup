import { combineReducers } from 'redux';

import post from './post.reducer'
import employee from './employee.reducer'
import customer from './customer.reducer'

const rootReducer = combineReducers({
    post,
    employee,
    customer
});

export default rootReducer;
