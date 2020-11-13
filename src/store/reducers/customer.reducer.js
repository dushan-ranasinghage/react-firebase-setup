import {
    GET_CUSTOMERS_LOADING, GET_CUSTOMERS_SUCCESS, GET_CUSTOMERS_ERROR,
    CREATE_CUSTOMER_LOADING, CREATE_CUSTOMER_SUCCESS, CREATE_CUSTOMER_ERROR,
    UPDATE_CUSTOMER_LOADING, UPDATE_CUSTOMER_SUCCESS, UPDATE_CUSTOMER_ERROR,
    DELETE_CUSTOMER_LOADING, DELETE_CUSTOMER_SUCCESS, DELETE_CUSTOMER_ERROR
} from "../types/customer.type";

const initialState = {
    customers: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CUSTOMERS_LOADING:
            return { ...state, };
        case GET_CUSTOMERS_SUCCESS:
            return { ...state, customers: action.customers };
        case GET_CUSTOMERS_ERROR:
            return { ...state, };
        default:
            return state;
    }
};




