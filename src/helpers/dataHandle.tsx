import { Dispatch } from "redux";
import { getRandomImage, UnsplashResponse } from "../services/unsplashService";
import { setLoading, setSessionReview } from "../store/actions/session";
import { ImageDataBundle, SessionState } from "../store/types";


export const setReviewSession = async (dispatch:Dispatch<any>,sessionData :SessionState) => {
    dispatch(setLoading(true));
    let randomImage: UnsplashResponse = {isError: false, result: {}};
    randomImage = await getRandomImage();
    console.log(randomImage);
    let imageData = {
        id: randomImage.result.response.id,
        regular: randomImage.result.response.urls.regular,
        thumb: randomImage.result.response.urls.thumb,
      }
      console.log(sessionData);
      if (!randomImage.isError) {
        if(sessionData.reviewHistory?.includes(imageData)){
            setReviewSession(dispatch, sessionData);
        } else {
            dispatch(setSessionReview(imageData,sessionData));
        }
    } else {
        alert(
            "Error occured when image was retrieveing. Please try again later."
        );
    }  
  };

