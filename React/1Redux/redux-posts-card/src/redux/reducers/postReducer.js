export const GET_POSTS = "GET_POSTS";
export const CHANGE_POST_DATA = "CHANGE_POST_DATA";
export const DELETE_POST = "DELETE_POST";

export const getPosts = (data) => ({
  type: GET_POSTS,
  payload: data,
});

export const changePostData = (post) => ({
  type: CHANGE_POST_DATA,
  payload: post,
});

export const deletePost = (data) => ({
  type: DELETE_POST,
  payload: data,
});

const initialState = {
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }

    case CHANGE_POST_DATA: {
      const updatedPosts = state.posts.map((oldPost) => {
        if (oldPost.id === action.payload.id) {
          return action.payload;
        }

        return oldPost;
      });

      return {
        ...state,
        posts: updatedPosts,
      };
    }

    case DELETE_POST: {
      const updatedPosts = state.posts.filter(
        (post) => post.id !== action.payload.id
      );
      return {
        ...state,
        posts: updatedPosts,
      };
    }

    default:
      return state;
  }
};
