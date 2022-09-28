import axios from "axios";

export const getUsers = async () => await axios(`${process.env.REACT_APP_API}/users`);