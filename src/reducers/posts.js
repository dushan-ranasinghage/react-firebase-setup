export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_POSTS':
            return { ...state, postlist: action.payload };
        default:
            return state;
    }
}