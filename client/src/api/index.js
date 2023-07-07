import axios from "axios";

const postUrl = 'http://localhost:8000/posts';

export const fetchPosts = () => axios.get(postUrl);
export const createPost = (newPost) => axios.post(postUrl, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${postUrl}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${postUrl}/${id}`);
export const likePost = (id) => axios.patch(`${postUrl}/${id}/likePost`);

// const userUrl = "http://localhost:8000/users";

// export const getUser = () => axios.get(`${userUrl}/getUser`);
// export const registerUser = (userData) => axios.post(`${userUrl}/register`, userData);
// export const loginUser = (userData) => axios.post(`${userUrl}/login`, userData);
// export const logoutUser = () => axios.post(`${userUrl}/logout`);
