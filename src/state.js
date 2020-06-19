import { createStore, combineReducers } from "redux";


const counter = { count: 0 }

const settings = (state = counter, action) => {
  switch (action.type) {
    case 'ON_COUNT':
      state.count = state.count + 1
      return state;
    case 'ON_RESET':
      state.count = 0
      return state;
    case 'ON_RATES_UPDATES':
      state.rates = action.rates;
      return state;
    default:
      return state;
  }
}

const stocksInit = { transactions: [], prices: {}, selectedStock: ''}

const stocks = (state = stocksInit, action) => {
  switch (action.type) {
    case 'TRANSACTIONS_UPLOADED':
      state.transactions = action.transactions
      return state;
      case 'STOCK_SELECTED':
        state.selectedStock = action.stock
        return state;
    case 'STOCK_PRICES_UPDATED':
      state.prices[action.result.isin] = action.result.prices
      return state;
    default:
      return state;
  }
}


const combinedReducer = combineReducers({
  settings,
  stocks
});

const deepCopy = input => JSON.parse(JSON.stringify(input));

const copyingReducer = (state, action) => {
  return deepCopy(combinedReducer(state, action));
}

const store = createStore(copyingReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export { store }