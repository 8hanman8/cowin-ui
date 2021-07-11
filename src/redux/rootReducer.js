import { combineReducers } from "redux";
import postsReducer from "./posts/reducer";
import otpReducer from "./otp/otp-reducer";
import beneficiariesReducer from "./beneficiaries/beneficiaries-reducer";
import spinnerLoadingReducer from "./loading-spinner";
const rootReducer = combineReducers({
  posts: postsReducer,
  otp: otpReducer,
  beneficiaries: beneficiariesReducer,
  spinnerLoading: spinnerLoadingReducer,
});
export default rootReducer;
