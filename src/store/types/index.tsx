export const SESSION_INITIAL = "SESSION_INITIAL";
export const SESSION_REVIEW = "SESSION_REVIEW";
export const SESSION_VIEW = "SESSION_VIEW";

export interface SessionState {
  sessionState: "initial" | "photoReview" | "photoView";
}
