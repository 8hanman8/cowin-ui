import { all } from "redux-saga/effects";
import postsSagas from "../sagas/posts";
import isFunction from "lodash/fp/isFunction";
import otpSagas from "../sagas/otp-saga";
import beneficiariesSagas from "../sagas/beneficiaries-saga";

export const runSagas = (sagas) => {
  if (Array.isArray(sagas)) {
    return sagas.map((saga) => saga());
  }
  if (isFunction(sagas)) {
    return Array.of(sagas());
  }

  throw new TypeError(`${sagas} should be an Array or Function`);
};

export default function* rootSaga() {
  yield all([
    ...runSagas(otpSagas),
    ...runSagas(postsSagas),
    ...runSagas(beneficiariesSagas),
  ]);
}
