import {
    GET_EMPLOYEES_LOADING, GET_EMPLOYEES_SUCCESS, GET_EMPLOYEES_ERROR,
    CREATE_EMPLOYEE_LOADING, CREATE_EMPLOYEE_SUCCESS, CREATE_EMPLOYEE_ERROR,
    UPDATE_EMPLOYEE_LOADING, UPDATE_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_ERROR,
    DELETE_EMPLOYEE_LOADING, DELETE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_ERROR
} from "../types/employee.type";

const initialState = {
    employees: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEES_LOADING:
            return { ...state, };
        case GET_EMPLOYEES_SUCCESS:
            return { ...state, employees: action.employees };
        case GET_EMPLOYEES_ERROR:
            return { ...state, };
        default:
            return state;
    }
};




