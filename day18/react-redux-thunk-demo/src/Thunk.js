


function ID() {
    return "_" + Math.random().toString(36).substr(2, 9);
}
class Item {
    constructor(id, name) {
        this.name = name;
        this.id = id;
    }
}
const baseUrl = "http://localhost:3000";

class ItemAPI {
    url = `${baseUrl}/items`;
    constructor() { }

    getAll(page = 1, limit = 100) {              //GET
        return fetch(`${this.url}?_page=${page}&_limit=${limit}`)
            .then(this.checkStatus)
            .then(this.parseJSON)
    }
    add(item) {                             //POST
        return fetch(`${this.url}`, {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(this.checkStatus)
            .then(this.parseJSON);
    }
    update(item) {                          //PUT
        return fetch(`${this.url}/${item.id}`, {
            method: "PUT",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(this.checkStatus)
            .then(this.parseJSON);
    }
    delete(id) {                          //DELETE
        return fetch(`${this.url}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(this.checkStatus)
            .then(this.parseJSON);
    }
    static translateStatusToErrorMessage(status) {          //Error message
        switch (status) {
            case 401:
                return "Please login again.";
            case 403:
                return "You do not have permission to view the items.";
            default:
                return "There was an error retrieving the items. Please try again.";
        }
    }
    checkStatus(response) {                         //http status
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            const httpErrorInfo = {
                status: response.status,
                statusText: response.statusText,
                url: response.url,
            }
            console.log(`logging http details for debugging: ${JSON.stringify(httpErrorInfo)}`)
            let errorMessage = ItemAPI.translateStatusToErrorMessage(httpErrorInfo.status);
            throw new Error(errorMessage)
        }
    }
    parseJSON(response) {
        return response.json();
    }
}
//Redux-actions
const LOAD_ITEMS_REQUEST = "LOAD_ITEMS_REQUEST";
const LOAD_ITEMS_SUCCESS = "LOAD_ITEMS_SUCCESS";
const LOAD_ITEMS_FAILURE = "LOAD_ITEMS_FAILURE";
const ADD_ITEM_REQUEST = "ADD_ITEM_REQUEST";
const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
const ADD_ITEM_FAILURE = "ADD_ITEM_FAILURE";
const UPDATE_ITEM_REQUEST = "UPDATE_ITEM_REQUEST";
const UPDATE_ITEM_SUCCESS = "UPDATE_ITEM_SUCCESS";
const UPDATE_ITEM_FAILURE = "UPDATE_ITEM_FAILURE";
const DELETE_ITEM_REQUEST = "DELETE_ITEM_REQUEST";
const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
const DELETE_ITEM_FAILURE = "DELETE_ITEM_FAILURE";
//Redux-state-initialization
const initialState = {
    items: [],
    loading: false,
    error: null,
}
//Redux-reducer: logic for each actions
function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ITEMS_REQUEST:
            return { ...state, loading: true };
        case LOAD_ITEMS_SUCCESS:
            return { ...state, loading: false, items: action.payload };
        case LOAD_ITEMS_FAILURE:
            return { ...state, loading: false, error: action.payload.message };
        case ADD_ITEM_REQUEST:
            return { ...state };
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case ADD_ITEM_FAILURE:
            return { ...state, loading: false, error: action.payload.message };
        case UPDATE_ITEM_REQUEST:
            return { ...state };
        case UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                items: state.items.map((item) => {
                    return item.id === action.payload.id
                        ? Object.assign({}, item, action.payload)
                        : item;
                }),
            };
        case UPDATE_ITEM_FAILURE:
            return { ...state, error: action.payload.message };
        case DELETE_ITEM_REQUEST:
            return { ...state };
        case DELETE_ITEM_SUCCESS:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload.id),
            };
        case DELETE_ITEM_FAILURE:
            return { ...state, error: action.payload.message };
        default:
            return state;
    }
}
function loadItems() {
    return (dispatch) => {
        let itemAPI = new ItemAPI();
        dispatch({ type: LOAD_ITEMS_REQUEST });
        return itemAPI
            .getAll(1)
            .then((data) => {
                dispatch({ type: LOAD_ITEMS_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: LOAD_ITEMS_FAILURE, payload: error });
            });
    };
}
//action-creators
function addItem(item) {
    return (dispatch) => {
        let itemAPI = new ItemAPI();
        dispatch({ type: ADD_ITEM_REQUEST });
        return itemAPI
            .add(item)
            .then((data) => {
                dispatch({ type: ADD_ITEM_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: ADD_ITEM_FAILURE, payload: error });
            });
    };
}

function updateItem(item) {
    return (dispatch) => {
        let itemAPI = new ItemAPI();
        dispatch({ type: UPDATE_ITEM_REQUEST });
        return itemAPI
            .update(item)
            .then((data) => {
                dispatch({ type: UPDATE_ITEM_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: UPDATE_ITEM_FAILURE, payload: error });
            });
    };
}

function deleteItem(item) {
    return (dispatch) => {
        let itemAPI = new ItemAPI();
        dispatch({ type: DELETE_ITEM_REQUEST });
        return itemAPI
            .delete(item.id)
            .then((data) => {
                dispatch({ type: DELETE_ITEM_SUCCESS, payload: item });
            })
            .catch((error) => {
                dispatch({ type: DELETE_ITEM_FAILURE, payload: error });
            });
    };
}