import "@babel/polyfill"
import createSagaMiddleware from "@redux-saga/core"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'

import Counter from './Counter'
import reducer from './reducers'
import rootSaga, { helloSaga } from "./sagas"

// const store = createStore(reducer)

const sagaMiddleware = createSagaMiddleware()   //creating saga middleware using factory function createSagaMiddleware exported by the redux-saga library.
const store = createStore(reducer,applyMiddleware(sagaMiddleware))  //connecting store and sagamiddleware
sagaMiddleware.run(rootSaga)     //running saga


const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action("INCREMENT_ASYNC")} />,    //connecting function to the store
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
