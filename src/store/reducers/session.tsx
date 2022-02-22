import {
  ImageDataBundle,
  SessionState,
  SESSION_INITIAL,
  SESSION_REVIEW,
  SESSION_VIEW,
} from "../types";

const default_state: SessionState = {
  sessionState: "initial",
  currentReviewPhoto: undefined,
  //reviewHistory: [],
  //approvedImages: [],
};

const reducer = (state: SessionState = default_state, action: any) => {
  //console.log(action);
  switch (action.type) {
    case SESSION_INITIAL:
      state.sessionState = "initial";
      return state;
    case SESSION_REVIEW:
      let imageData: ImageDataBundle = {
        id: action.imageData.response.id,
        regular: action.imageData.response.urls.regular,
        thumb: action.imageData.response.urls.thumb,
      };
      state = {
        ...state,
        sessionState: "photoReview",
        currentReviewPhoto: { ...state.currentReviewPhoto, imageData },
      };
      console.log(state);
      return state;
    case SESSION_VIEW:
      state.sessionState = "photoView";
      return state;
    default:
      return state;
  }
};

export default reducer;
