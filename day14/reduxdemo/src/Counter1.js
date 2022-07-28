//react-redux: useSelector and useDispatch

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

//action types
//action types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_TODO = "ADD_TODO"

//action creators
function increment(name) {
    // return { type: INCREMENT };
    return {
        type: INCREMENT,
        // payload: { text: name }
    };
}
function decrement() {
    return { type: DECREMENT };
}




export default function Counter() {
    const reduxState = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
        <div>
            <div>Count:{reduxState.counter}</div>
            <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    );
}