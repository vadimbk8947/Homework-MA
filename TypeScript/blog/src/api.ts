import axios from "axios";
export interface ICreatePost {
  title: string;
  body: string;
}

export interface ICreateComment {
  postId: number;
  body: string;
}

const postUrl = "https://simple-blog-api.crew.red/posts/";
const commentUrl = "https://simple-blog-api.crew.red/comments/";

const getAllPosts = () => axios.get(postUrl);

const getSelectedPost = (postId: string) => axios.get(postUrl + postId);

const createPost = (data: ICreatePost) => axios.post(postUrl, data);

const createComment = (data: ICreateComment) => axios.post(commentUrl, data);

const removePost = (id: string) => axios.delete(postUrl + id);

export default {
  getAllPosts,
  getSelectedPost,
  createPost,
  createComment,
  removePost,
};
