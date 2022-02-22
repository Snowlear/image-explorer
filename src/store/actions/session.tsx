export const setSessionInitial = () => {
  return {
    type: "SESSION_INITIAL",
  };
};

export const setSessionReview = (imageData: any) => {
  return {
    type: "SESSION_REVIEW",
    imageData: imageData,
  };
};

export const setSessionView = () => {
  return {
    type: "SESSION_VIEW",
  };
};
