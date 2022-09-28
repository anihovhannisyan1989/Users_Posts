export const postsReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_POSTS":
            return [ ...action.payload.data ];
        default:
            return state;
    }
};