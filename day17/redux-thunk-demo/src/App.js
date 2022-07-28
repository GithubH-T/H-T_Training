//Ayush-Pariwesh First-thunk.js and this code

// import { Provider } from 'react-redux';
// import { applyMiddleware, createStore } from 'redux';
// import  { initialState } from "./First-thunk";
// import thunk from 'redux-thunk';
// import LogState from './First-thunk';
// export const LOAD_PHOTOS_REQUEST = 'LOAD_PHOTOS_REQUEST';
// export const LOAD_PHOTOS_SUCCESS = 'LOAD_PHOTOS_SUCCESS';
// export const LOAD_PHOTOS_FAILURE = 'LOAD_PHOTOS_FAILURE';

// // let ReduxThunk = redux-thunk;
// export const store = createStore(reducer, applyMiddleware(thunk));

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case LOAD_PHOTOS_REQUEST:
//       return { ...state, processing: true };
//     case LOAD_PHOTOS_SUCCESS:
//       return { ...state, processing: false, photos: action.payload };
//     case LOAD_PHOTOS_FAILURE:
//       return { ...state, processing: false, error: action.payload.message };
//     default:
//       return state;
//   }
// }


// function App() {
//   return (
//     <div >
//       <Provider store={store}>
//         <LogState />
//       </Provider>
//     </div>
//   );
// }

// export default App;



//Poonam- this code and My-thunk.js
import { Provider } from 'react-redux';
import LogState from './My-thunk';

function App() {
  return (
    <div className="App">
      {/* <Provider> */}
        <LogState />
      {/* </Provider> */}
    </div>
  );
}

export default App;