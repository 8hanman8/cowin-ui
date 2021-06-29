import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "./types";

export function fetchPosts() {
  return {
    type: FETCH_POSTS,
  };
}

export function fetchPostsSuccess(payload) {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts: payload,
  };
}

export function fetchPostsFailure(payload) {
  return {
    type: FETCH_POSTS_FAILURE,
    error: payload,
  };
}
