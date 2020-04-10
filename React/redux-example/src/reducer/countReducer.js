export const INCREMENT_CLICK_BUTTON = "INCREMENT_CLICK_BUTTON";
export const DECREMENT_CLICK_BUTTON = "DECREMENT_CLICK_BUTTON";

//action creator
export const incrementClickCount = (color) => {
  return {
    // call will initiate creating an action
    type: INCREMENT_CLICK_BUTTON, //type of action(dispatch)
    payload: color, //payload of action(dispatch)
  };
};

export const decrementClickCount = (color) => {
  // call will initiate creating an action
  return {
    type: DECREMENT_CLICK_BUTTON, //type of action(dispatch)
    payload: color, //payload of action(dispatch)
  };
};

const initialState = {
  red: 0,
  blue: 0,
  green: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_CLICK_BUTTON: {
      return {
        ...state,
        [action.payload]: state[action.payload] + 1,
      };
    }

    case DECREMENT_CLICK_BUTTON: {
      return {
        ...state,
        [action.payload]: state[action.payload] - 1,
      };
    }

    default:
      return state;
  }
};
