import {
  SessionState,
  SESSION_INITIAL,
  SESSION_REVIEW,
  SESSION_VIEW,
} from "../types";

const default_state: SessionState = {
  sessionState: "initial",
};

const reducer = (state: SessionState = default_state, action: any) => {
  switch (action.type) {
    case SESSION_INITIAL:
      return (state.sessionState = "initial");
    case SESSION_REVIEW:
      return (state.sessionState = "photoReview");
    case SESSION_VIEW:
      return (state.sessionState = "photoView");
    default:
      return state;
  }
};

export default reducer;
