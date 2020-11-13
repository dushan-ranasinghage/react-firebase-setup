import {
    GET_CUSTOMERS_LOADING, GET_CUSTOMERS_SUCCESS, GET_CUSTOMERS_ERROR,
    CREATE_CUSTOMER_LOADING, CREATE_CUSTOMER_SUCCESS, CREATE_CUSTOMER_ERROR,
    UPDATE_CUSTOMER_LOADING, UPDATE_CUSTOMER_SUCCESS, UPDATE_CUSTOMER_ERROR,
    DELETE_CUSTOMER_LOADING, DELETE_CUSTOMER_SUCCESS, DELETE_CUSTOMER_ERROR
} from "../types/customer.type";
import firebase from '../../config/fbConfig'

const firestore = firebase.firestore()
const ref = firestore.collection('customers');

export const getCustomersFunc = () => async (dispatch) => {
  dispatch({ type: GET_CUSTOMERS_LOADING })
  ref.onSnapshot(querSnapshot => {
    const items = []
    querSnapshot.forEach(doc => {
      items.push(doc.data())
    })
    dispatch({ type: GET_CUSTOMERS_SUCCESS, customers: items })
  })
    // dispatch({ type: GET_CUSTOMERS_ERROR })
}