// Create action creator function and return a ThunkAction (function) instead of just an Action (object) to handle the asyncronous nature of the HTTP calls happening.

import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { Project } from "./project";
import { projectAPI } from "./ProjectApi";
import { LOAD_PROJECTS_FAILURE, LOAD_PROJECTS_REQUEST, LOAD_PROJECTS_SUCCESS, ProjectState, SAVE_PROJECT_FAILURE, SAVE_PROJECT_REQUEST, SAVE_PROJECT_SUCCESS } from "./ProjectTypes";

export function loadProjects(
    page: number
):ThunkAction<void,ProjectState,null,Action<string>> {
    return (dispatch:any) => {
        dispatch({type:LOAD_PROJECTS_REQUEST});
        return projectAPI
        .get(page)
        .then((data) => {
            dispatch({
                type:LOAD_PROJECTS_SUCCESS,
                payload: {prjects:data,page},
            })
        })
        .catch((error) => {
            dispatch({type:LOAD_PROJECTS_FAILURE,payload:error});
        })
    }
}
export function saveProject(
    project: Project
):ThunkAction<void,ProjectState,null,Action<string>> {
    return (dispatch:any) => {
        dispatch({type:SAVE_PROJECT_REQUEST});
        return projectAPI
        .put(project)                   //since we need to save so we will use put 
        .then((data) => {
            dispatch({
                type:SAVE_PROJECT_SUCCESS,
                payload: data,
            })
        })
        .catch((error) => {
            dispatch({type:SAVE_PROJECT_FAILURE,payload:error});
        })
    }
}