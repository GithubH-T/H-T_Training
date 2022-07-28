import logo from './logo.svg';
import './App.css';
import LogState from './Counter';
import { Provider } from 'react-redux';
import Counter, {ADD_TODO,INCREMENT,DECREMENT} from './Counter1';
import {createStore} from "redux";

//reducer
function reducer(state = {counter:10}, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, datafromComponent: action.payload}
    case INCREMENT:
      return {counter:state.counter + 1};
    case DECREMENT:
      return {counter:state.counter - 1};
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
function App() {
  return (
    <div>
      <Provider store = {store}>
        <Counter/>
      </Provider>
    </div>
  )
}

function enableDevTools() {
  return (
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export default App;

