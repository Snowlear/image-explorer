import { getRandomImage } from "../../services/unsplashService";
import {
  SessionState,
  SESSION_INITIAL,
  SESSION_REVIEW,
  SESSION_VIEW,
} from "../types";

const default_state: SessionState = {
  sessionState: "initial",
  currentReviewPhoto: undefined,
};

const reducer = (state: SessionState = default_state, action: any) => {
  console.log(action);
  switch (action.type) {
    case SESSION_INITIAL:
      state.sessionState = "initial"
      return (state);
    case SESSION_REVIEW:
      let data = getRandomImage();
      state.currentReviewPhoto = data;
      state.sessionState = "photoReview"
      console.log(state);
      return (state);
    case SESSION_VIEW:
      state.sessionState = "photoView"
      return (state);
    default:
      return state;
  }
};

export default reducer;
