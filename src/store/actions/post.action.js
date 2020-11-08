import Axios from '../../utils/Axios'
import { GET_POSTS_LOADING, GET_POSTS_SUCCESS, GET_POSTS_ERROR } from "../types/post.type";

export const getPostsFunc = () => async (dispatch) => {
  dispatch({ type: GET_POSTS_LOADING })
  await Axios
    .get(`/posts`)
    .then((response) => dispatch({ type: GET_POSTS_SUCCESS, posts: response.data }))
    .catch((err) => dispatch({ type: GET_POSTS_ERROR, err }));
}

