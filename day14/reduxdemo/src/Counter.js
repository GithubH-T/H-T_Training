//just redux


import { createStore } from "redux";

//action types
//action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_TODO = "ADD_TODO"

//action creators
function increment(name) {
  // return { type: INCREMENT };
  return {
    type: ADD_TODO,
    payload: {text: name}
  };
}
function decrement() {
  return { type: DECREMENT };
}

//reducer
function reducer(state = {counter:10}, action) {
  switch (action.type) {
    case ADD_TODO:
      return {...state, datafromComponent: action.payload}
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

//store
// var store = Redux.createStore(reducer);

// function logState() {
//   console.log(store.getState().toString());
// }

var store = createStore(reducer, enableDevTools());

function enableDevTools() {
  return (
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export default function LogState() {
  //console.log(store.getState().toString());
  // const[name,setName] = useState();
  return (
    <div>
      {/* <input onChange={event => setName(event.target.value)} value={name}/> */}
      {/* <button onClick={() => store.dispatch(increment())}>increment</button> */}
      <button onClick={(event) => store.dispatch(increment("Poonam"))}>increment</button>
      <button onClick={() => store.dispatch(decrement())}>decrement</button>
    </div>
  )
}

store.subscribe(LogState);

store.dispatch({ type: '' });
store.dispatch(increment());
// store.dispatch(increment());
store.dispatch(decrement());
// store.dispatch(decrement());
// store.dispatch(decrement());
// store.dispatch(decrement());

