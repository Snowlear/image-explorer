import { setApprovedImage, setLoading, setSessionInitial, setSessionReview } from "../../store/actions/session";
import reducer from "../../store/reducers/session"
import { SessionState } from "../../store/types";

const initialState:SessionState = {
    sessionState: "initial",
    currentReviewPhoto: undefined,
    reviewHistory: [],
    approvedImages: [],
    isLoading: false,
  };

test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  test('should initiate initial state', () => {
    const initialisedState:SessionState = {
        sessionState: "initial",
        currentReviewPhoto: undefined,
        reviewHistory: [],
        approvedImages: [],
        isLoading: false,
      };
    expect(reducer(initialState, setSessionInitial )).toEqual(
        initialisedState
    )
  })

  test('should initiate image review state', () => {
    const imageData = {
        id: "testid",
        regular: "test_image_regular_size_url",
        thumb: "test_image_thumb_sizeurl",
      };

      const initialisedState:SessionState = {
        sessionState: "photoReview",
        currentReviewPhoto: imageData,
        reviewHistory: [imageData],
        approvedImages: [],
        isLoading: false,
      };
    expect(reducer(initialState, setSessionReview(imageData,initialState) )).toEqual(
        initialisedState
    )
  })

  test('should add image to state', () => {
    const imageData = {
        id: "testid",
        regular: "test_image_regular_size_url",
        thumb: "test_image_thumb_sizeurl",
      };

      const initialisedState:SessionState = {
        sessionState: "photoReview",
        currentReviewPhoto: imageData,
        reviewHistory: [imageData],
        approvedImages: [],
        isLoading: false,
      };

      const imageAddedState:SessionState = {
        sessionState: "photoReview",
        currentReviewPhoto: imageData,
        reviewHistory: [imageData],
        approvedImages: [imageData],
        isLoading: false,
      };


    expect(reducer(initialisedState, setApprovedImage(initialisedState))).toEqual(
        imageAddedState
    )
  })

  test('should initiate image review state', () => {
    const imageData = {
        id: "testid",
        regular: "test_image_regular_size_url",
        thumb: "test_image_thumb_sizeurl",
      };

      const loadingEnabledState:SessionState = {
        sessionState: "initial",
        currentReviewPhoto: undefined,
        reviewHistory: [],
        approvedImages: [],
        isLoading: true,
      };
    expect(reducer(initialState, setLoading(true) )).toEqual(
        loadingEnabledState
    )
  })