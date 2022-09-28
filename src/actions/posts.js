import axios from "axios";

export const getPosts = async () => await axios(`${process.env.REACT_APP_API}/posts`);