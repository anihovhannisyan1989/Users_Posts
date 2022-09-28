import axios from "axios";

export const getCurrentPost = async (postId) => await axios(`${process.env.REACT_APP_API}/posts/${postId}`);