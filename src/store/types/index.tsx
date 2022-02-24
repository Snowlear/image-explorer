export const SESSION_INITIAL = "SESSION_INITIAL";
export const SESSION_REVIEW = "SESSION_REVIEW";
export const SESSION_VIEW = "SESSION_VIEW";
export const APPROVE_IMAGE = "APPROVE_IMAGE";
export const IS_LOADING = "IS_LOADING";

export interface SessionState {
  sessionState: "initial" | "photoReview" | "photoView";
  currentReviewPhoto?: any;
  reviewHistory: Array<ImageDataBundle>;
  approvedImages: Array<ImageDataBundle>;
  isLoading: boolean;
}

export interface ImageDataBundle {
  id: string;
  regular: string;
  thumb: string;
}
