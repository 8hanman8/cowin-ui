import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSageMiddleware from "redux-saga";
import rootSaga from "./../sagas/rootSagas";
const sageMiddleware = createSageMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sageMiddleware))
);

store.subscribe(() => {
  sessionStorage.setItem("accessToken", store.getState().otp.accessToken);
});
sageMiddleware.run(rootSaga);
export default store;
