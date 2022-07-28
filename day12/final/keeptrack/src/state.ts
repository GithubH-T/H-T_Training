import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { initialProjectState, projectReducer } from "./ProjectReducer";
import { ProjectState } from "./ProjectTypes";



// const reducer = combineReducers({});
const reducer = combineReducers({
    projectState:projectReducer
});

export default function configureStore(preloadedState:any) {
    const middlewares = [ReduxThunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancer=composeWithDevTools(middlewareEnhancer);
    const store = createStore(reducer,preloadedState,enhancer);
    return store;
}
// Thunk is middleware
                //DevTools is an enhancer (actually changes Redux)
//applyMiddleware wraps middleware and returns an enhancer

                 // to use only thunk middleware
// const enhancer = compose(middlewareEnhancer);

                //to use thunk & devTools
                
// export interface AppState{}
export interface AppState{
    projectState:ProjectState;
}
// export const initialAppState: AppState={};
export const initialAppState: AppState={
    projectState:initialProjectState
};
export const store = configureStore(initialAppState);