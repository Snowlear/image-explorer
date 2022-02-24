import { Dispatch } from "redux";
import { getRandomImage, UnsplashResponse } from "../services/unsplashService";
import { setLoading, setSessionReview } from "../store/actions/session";
import { SessionState } from "../store/types";


export const setReviewSession = async (dispatch:Dispatch<any>,sessionData :SessionState) => {
    dispatch(setLoading(true));
    await getRandomImage().then((randomImage) => {
          if (!randomImage.isError) {
            let imageData = {
                id: randomImage.result.response.id,
                regular: randomImage.result.response.urls.regular,
                thumb: randomImage.result.response.urls.thumb,
              }
            if(sessionData.reviewHistory?.filter((data) => { return data.id === imageData.id}).length > 0){
                setReviewSession(dispatch, sessionData);
            } else {
                dispatch(setSessionReview(imageData,sessionData));
            }
        } else {
            alert(
                "Error occured when image was retrieveing. Please try again later."
            );
            dispatch(setLoading(false));
        }  
    });
  };

