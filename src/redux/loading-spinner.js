const SPINNER_LOADING_START = "SPINNER_LOADING_START";
const SPINNER_LOADING_STOP = "SPINNER_LOADING_STOP";
const spinnerLoadingStart = () => {
  return {
    type: SPINNER_LOADING_START,
  };
};
const spinnerLoadingStop = () => {
  return {
    type: SPINNER_LOADING_STOP,
  };
};

const defaultState = {
  loading: false,
};

const spinnerLoadingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SPINNER_LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case SPINNER_LOADING_STOP:
      return {
        ...state,
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export { spinnerLoadingStart, spinnerLoadingStop };
export default spinnerLoadingReducer;
