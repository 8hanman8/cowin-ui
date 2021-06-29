import { put, takeLatest, call } from "@redux-saga/core/effects";
import { FETCH_POSTS } from "../redux/posts/types";
import {
  fetchPostsSuccess,
  fetchPostsFailure,
} from "../redux/posts/actions";
import { fetchPostsFromAPI } from "../apis/posts";

export function* fetchPostsSaga() {
  yield takeLatest(FETCH_POSTS, getPosts);
}

export function* getPosts() {
  try {
    const response = yield call(fetchPostsFromAPI);
    yield put(fetchPostsSuccess(response));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}
const postsSagas = [fetchPostsSaga]
export default postsSagas;
