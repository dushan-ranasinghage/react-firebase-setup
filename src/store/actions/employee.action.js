import { 
    GET_EMPLOYEES_LOADING, GET_EMPLOYEES_SUCCESS, GET_EMPLOYEES_ERROR,
    CREATE_EMPLOYEE_LOADING, CREATE_EMPLOYEE_SUCCESS, CREATE_EMPLOYEE_ERROR,
    UPDATE_EMPLOYEE_LOADING, UPDATE_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_ERROR,
    DELETE_EMPLOYEE_LOADING, DELETE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_ERROR
} from "../types/employee.type";
import firebase from '../../config/fbConfig'

const ref = firebase.database().ref()

export const getEmployeesFunc = () => async (dispatch) => {
  dispatch({ type: GET_EMPLOYEES_LOADING })
  ref.child('Employees').on('value', snapshot => {
    if(snapshot.val().length > 0){
        dispatch({ type: GET_EMPLOYEES_SUCCESS, employees: snapshot.val() })
    } else{
        dispatch({ type: GET_EMPLOYEES_ERROR })
    }
  }) 
}

export const createEmployeeFunc = (employeeObj) => async (dispatch) => {
    dispatch({ type: CREATE_EMPLOYEE_LOADING })
    ref.child('Employees').push(
        employeeObj,
        err => {
            if(err){
                console.log(err)
                dispatch({ type: CREATE_EMPLOYEE_ERROR })
            } else{
                dispatch({ type: CREATE_EMPLOYEE_SUCCESS, employee: employeeObj})
            }
        }
    ) 
  }

export const updateEmployeeFunc = (employeeObj, employeeId) => async (dispatch) => {
    debugger
    dispatch({ type: UPDATE_EMPLOYEE_LOADING })
    ref.child(`Employees/${employeeId}`).set(
        employeeObj,
        err => {
            if(err){
                console.log(err)
                dispatch({ type: UPDATE_EMPLOYEE_ERROR })
            } else{
                dispatch({ type: UPDATE_EMPLOYEE_SUCCESS, employee: employeeObj})
            }
        }
    ) 
  }

  export const deleteEmployeeFunc = (employeeObj, employeeId) => async (dispatch) => {
    dispatch({ type: DELETE_EMPLOYEE_LOADING })
    ref.child(`Employees/${employeeId}`).remove(
        err => {
            if(err){
                console.log(err)
                dispatch({ type: DELETE_EMPLOYEE_ERROR })
            } else{
                dispatch({ type: DELETE_EMPLOYEE_SUCCESS, employee: employeeObj})
            }
        }
    ) 
  }

