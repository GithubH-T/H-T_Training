import thunk from "redux-thunk";
import { applyMiddleware, createStore } from 'redux';
// import  { initialState } from "./redux-thunk-container";



const baseUrl = 'http://localhost:3000';

class PhotoAPI {
    url = `${baseUrl}/photos`;

    // constructor() { }

    getAll(page = 1, limit = 100) {
        return fetch(`${this.url}?_page=${page}&_limit=${limit}`)
            .then(this.checkStatus)
            .then(this.parseJSON);
    }

    static translateStatusToErrorMessage(status) {
        switch (status) {
            case 401:
                return 'Please login again.';
            case 403:
                return 'You do not have permission to view the photos.';
            default:
                return 'There was an error retrieving the photos. Please try again.';
        }
    }

    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            const httpErrorInfo = {
                status: response.status,
                statusText: response.statusText,
                url: response.url,
            };
            console.log(
                `logging http details for debugging: ${JSON.stringify(httpErrorInfo)}`
            );

            let errorMessage = PhotoAPI.translateStatusToErrorMessage(
                httpErrorInfo.status
            );
            throw new Error(errorMessage);
        }
    }

    parseJSON(response) {
        return response.json();
    }
}

const LOAD_PHOTOS_REQUEST = 'LOAD_PHOTOS_REQUEST';
const LOAD_PHOTOS_SUCCESS = 'LOAD_PHOTOS_SUCCESS';
const LOAD_PHOTOS_FAILURE = 'LOAD_PHOTOS_FAILURE';

const initialState = {
    photos: [],
    processing: false,
    error: null,
};
//reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PHOTOS_REQUEST:
            return { ...state, processing: true };
        case LOAD_PHOTOS_SUCCESS:
            return { ...state, processing: false, photos: action.payload };
        case LOAD_PHOTOS_FAILURE:
            return { ...state, processing: false, error: action.payload.message };
        default:
            return state;
    }
}

//action creator becomes thunk creator
//instead of dispatching an action object (see commented code)
//dispatch a thunk function (a function that returns another function)
//inside the thunk have that function dispatch the initial request object that sets the loading
//and eventually dispatches success and failure actions
//by returning a function (thunk) you are now able to have the action creator do multiple dispatches over time

//action
function loadPhotos() {
    //   return { type: LOAD_PHOTOS_REQUEST };
    return function thunk(dispatch, getState) {
        let photoAPI = new PhotoAPI();
        dispatch({ type: LOAD_PHOTOS_REQUEST });
        return photoAPI
            .getAll(1)
            .then((data) => {
                dispatch({ type: LOAD_PHOTOS_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: LOAD_PHOTOS_FAILURE, payload: error });
            });
    };
}

// var ReduxThunk = window.ReduxThunk;
const store = createStore(reducer, applyMiddleware(thunk));

export default function LogState() {
    console.log(JSON.stringify(store.getState(), null, ' '));
}

store.subscribe(LogState);

async function test() {
    await store.dispatch(loadPhotos());
    console.log('loaded photos');
}

test();