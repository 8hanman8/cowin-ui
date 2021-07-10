import {
  GET_BENEFICIARIES,
  GET_BENEFICIARIES_SUCCESS,
  GET_BENEFICIARIES_FAILURE,
} from "./beneficiaries-types";

const defaultState = {
  loading: false,
  beneficiaries: [],
  error: null,
};

const beneficiariesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_BENEFICIARIES:
      return {
        ...state,
        loading: true,
        beneficiaries: [],
        error: null,
      };
    case GET_BENEFICIARIES_SUCCESS:
      return {
        ...state,
        loading: false,
        beneficiaries: action.beneficiaries,
        error: null,
      };
    case GET_BENEFICIARIES_FAILURE:
      return {
        ...state,
        loading: false,
        beneficiaries: [],
        error: action.error,
      };

    default:
      return {
        ...state,
      };
  }
};

export default beneficiariesReducer;
