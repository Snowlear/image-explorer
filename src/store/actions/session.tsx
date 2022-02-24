export const setSessionInitial = () => {
  return {
    type: "SESSION_INITIAL",
  };
};

export const setSessionReview = (imageData: any, sessionData: any) => {
  return {
    type: "SESSION_REVIEW",
    imageData: imageData,
    sessionData: sessionData,
  };
};

export const setApprovedImage = (sessionData: any) => {
  return {
    type: "APPROVE_IMAGE",
    sessionData: sessionData,
  };
};

export const setLoading = (isLoading: boolean) => {
  return {
    type: "IS_LOADING",
    isLoading: isLoading,
  };
};
