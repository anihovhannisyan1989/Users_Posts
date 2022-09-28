import { combineReducers } from "redux";
import { usersReducer } from "./users";
import { postsReducer } from "./posts";
import { postReducer } from "./post";

const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    post: postReducer,
});

export default rootReducer;