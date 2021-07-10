import { combineReducers } from "redux";
import postsReducer from "./posts/reducer";
import otpReducer from "./otp/otp-reducer";
import beneficiariesReducer from "./beneficiaries/beneficiaries-reducer";
const rootReducer = combineReducers({
  posts: postsReducer,
  otp: otpReducer,
  beneficiaries: beneficiariesReducer,
});
export default rootReducer;
