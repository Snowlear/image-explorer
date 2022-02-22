export const SESSION_INITIAL = "SESSION_INITIAL";
export const SESSION_REVIEW = "SESSION_REVIEW";
export const SESSION_VIEW = "SESSION_VIEW";

export interface SessionState {
  sessionState: "initial" | "photoReview" | "photoView";
  currentReviewPhoto?: any;
  reviewHistory?: Array<ImageDataBundle>;
  approvedImages?: Array<ImageDataBundle>;
}

export interface ImageDataBundle {
  id: string;
  regular: string;
  thumb: string;
}