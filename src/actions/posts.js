import axios from 'axios'

import { GET_POSTS_ENDPOINT } from './EndPoints'

export function getPostData(){
    return (dispatch) => {
        axios.get(GET_POSTS_ENDPOINT)
          .then(res => {
            dispatch({ type: 'GET_POSTS', payload: res.data })
          })
          .catch(err => {
            dispatch({ type: 'GET_POST_ERROR', payload: err.message })
          })
      }
} 