import { combineReducers } from "redux";
import postsReducer from "./posts/reducer";
import otpReducer from "./otp/otp-reducer";
const rootReducer = combineReducers({ posts: postsReducer, otp: otpReducer });
export default rootReducer;
