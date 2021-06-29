import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
} from "./types";

export const postsDefaultState = {
  isProcessing: false,
  posts: [],
  error: "",
};
const postsReducer = (state = postsDefaultState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        isProcessing: true,
        posts: [],
        error: "",
      };
    case FETCH_POSTS_SUCCESS:
      return {
        isProcessing: false,
        posts: action.posts,
        error: "",
      };
    case FETCH_POSTS_FAILURE:
      return {
        isProcessing: false,
        posts: [],
        error: action.error,
      };
    default:
      return state;
  }
};
export default postsReducer;
