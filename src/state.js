import { createStore, combineReducers } from "redux";


const counter = { count: 0 }

const settings = (state = counter, action) => {
  switch (action.type) {
    case 'ON_COUNT':
      state.count = state.count+1
      return state;
    case 'ON_RESET':
      state.count = 0
      return state;
    default:
      return state;
  }
}


const combinedReducer = combineReducers({
  settings
});

const deepCopy = input => JSON.parse(JSON.stringify(input));

const copyingReducer = (state, action) => {
  return deepCopy(combinedReducer(state, action));
}

const store = createStore(copyingReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export { store }