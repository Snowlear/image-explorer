import { createApi } from "unsplash-js";

export async function getRandomImage() {
  const api = createApi({
    accessKey: "EOVXVDGJCFsuapb6iq6ydzUjhmbDrGjIKpBtRzC2c6I",
    //accessKey: "KHEDA9TtUeTvMfV9B4iif58GYziMBuzIodBGlWqGd0k",
  });

  const response: UnsplashResponse = {
    isError: false,
    result: {},
  };

  await api.photos
    .getRandom({})
    .then((result) => {
      response.result = result;
    })
    .catch((e) => {
      response.isError = true;
      alert(e);
    });
  return response;
}

export interface UnsplashResponse {
  isError: boolean;
  result: any;
}

/*

Example Photo Object

{
    "type": "success",
    "status": 200,
    "response": {
        "id": "3jXH8XmrJWk",
        "created_at": "2022-01-31T09:26:03-05:00",
        "updated_at": "2022-02-20T05:29:26-05:00",
        "promoted_at": "2022-02-01T09:32:01-05:00",
        "width": 3937,
        "height": 5499,
        "color": "#262626",
        "blur_hash": "LI9QHqj[WBay%3ofayj[0LfQofj[",
        "description": null,
        "alt_description": null,
        "urls": {
            "raw": "https://images.unsplash.com/photo-1643638936204-6b87c95fcf14?ixid=MnwzMDM3NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDUzOTU5MTg&ixlib=rb-1.2.1",
            "full": "https://images.unsplash.com/photo-1643638936204-6b87c95fcf14?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDM3NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDUzOTU5MTg&ixlib=rb-1.2.1&q=85",
            "regular": "https://images.unsplash.com/photo-1643638936204-6b87c95fcf14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDM3NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDUzOTU5MTg&ixlib=rb-1.2.1&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1643638936204-6b87c95fcf14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDM3NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDUzOTU5MTg&ixlib=rb-1.2.1&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1643638936204-6b87c95fcf14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDM3NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDUzOTU5MTg&ixlib=rb-1.2.1&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/photo-1643638936204-6b87c95fcf14"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/3jXH8XmrJWk",
            "html": "https://unsplash.com/photos/3jXH8XmrJWk",
            "download": "https://unsplash.com/photos/3jXH8XmrJWk/download?ixid=MnwzMDM3NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDUzOTU5MTg",
            "download_location": "https://api.unsplash.com/photos/3jXH8XmrJWk/download?ixid=MnwzMDM3NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDUzOTU5MTg"
        },
        "categories": [],
        "likes": 29,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "topic_submissions": {
            "street-photography": {
                "status": "approved",
                "approved_on": "2022-01-31T13:38:07-05:00"
            },
            "wallpapers": {
                "status": "rejected"
            }
        },
        "user": {
            "id": "MocKbl9vr0c",
            "updated_at": "2022-02-20T17:13:30-05:00",
            "username": "snapsbyclark",
            "name": "Clark Van Der Beken",
            "first_name": "Clark",
            "last_name": "Van Der Beken",
            "twitter_username": "snapsbyclark",
            "portfolio_url": null,
            "bio": "👋🏽 One of only 42,926 people named Clark | 📍Boston | 🏳️‍🌈Proud ",
            "location": "Boston, MA",
            "links": {
                "self": "https://api.unsplash.com/users/snapsbyclark",
                "html": "https://unsplash.com/@snapsbyclark",
                "photos": "https://api.unsplash.com/users/snapsbyclark/photos",
                "likes": "https://api.unsplash.com/users/snapsbyclark/likes",
                "portfolio": "https://api.unsplash.com/users/snapsbyclark/portfolio",
                "following": "https://api.unsplash.com/users/snapsbyclark/following",
                "followers": "https://api.unsplash.com/users/snapsbyclark/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1556497771011-c5897af6c53b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                "medium": "https://images.unsplash.com/profile-1556497771011-c5897af6c53b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                "large": "https://images.unsplash.com/profile-1556497771011-c5897af6c53b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
            },
            "instagram_username": "snapsbyclark",
            "total_collections": 10,
            "total_likes": 415,
            "total_photos": 97,
            "accepted_tos": true,
            "for_hire": true,
            "social": {
                "instagram_username": "snapsbyclark",
                "portfolio_url": null,
                "twitter_username": "snapsbyclark",
                "paypal_email": null
            }
        },
        "exif": {
            "make": "Canon",
            "model": " EOS M50",
            "name": "Canon, EOS M50",
            "exposure_time": "1/250",
            "aperture": "6.3",
            "focal_length": "100.0",
            "iso": 100
        },
        "location": {
            "title": null,
            "name": null,
            "city": null,
            "country": null,
            "position": {
                "latitude": null,
                "longitude": null
            }
        },
        "views": 268509,
        "downloads": 1078
    },
    "originalResponse": {}
}

*/
