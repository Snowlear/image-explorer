import {
  APPROVE_IMAGE,
  ImageDataBundle,
  IS_LOADING,
  SessionState,
  SESSION_INITIAL,
  SESSION_REVIEW,
} from "../types";

const default_state: SessionState = localStorage.getItem('sessionData') ? JSON.parse(localStorage.getItem('sessionData') || "") : {
  sessionState: "initial",
  currentReviewPhoto: undefined,
  reviewHistory: [],
  approvedImages: [],
  isLoading: false,
};

const reducer = (state: SessionState = default_state, action: any) => {
  localStorage.setItem('sessionData', JSON.stringify(state));
  switch (action.type) {
    case SESSION_INITIAL:
      state.sessionState = "initial";
      return state;
    case SESSION_REVIEW:
      let imageData: ImageDataBundle = {
        id: action.imageData.id,
        regular: action.imageData.regular,
        thumb: action.imageData.thumb,
      };
      state = {
        ...state,
        sessionState: "photoReview",
        currentReviewPhoto: imageData,
        reviewHistory: [...state.reviewHistory, imageData],
      };
      return state;
    case APPROVE_IMAGE:
      state = {
        ...state,
        sessionState: "photoReview",
        approvedImages: [...state.approvedImages, state.currentReviewPhoto],
      };
      return state;
    case IS_LOADING:
      state = {
        ...state,
        isLoading: action.isLoading,
      };
      return state;
    default:
      return state;
  }
};

export default reducer;
