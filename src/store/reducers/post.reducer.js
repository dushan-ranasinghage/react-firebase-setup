import {
    GET_POSTS_LOADING, GET_POSTS_SUCCESS, GET_POSTS_ERROR
} from "../types/post.type";

const initialState = {
    posts: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_LOADING:
            return { ...state, };
        case GET_POSTS_SUCCESS:
            return { ...state, posts: action.posts };
        case GET_POSTS_ERROR:
            return { ...state, };
        default:
            return state;
    }
};




