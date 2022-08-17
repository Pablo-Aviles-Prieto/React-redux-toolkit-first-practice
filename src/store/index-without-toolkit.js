import { legacy_createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

// reducer Fn => Always receives 2 params.
// 1st one is the old state, 2nd is the dispatched action.
// Always have to return a new state obj.
// This reducer Fn should be a 'pure' Fn. Meaning that if it receives the same values it should always output the same result.
// Since is a 'pure' Fn, it shouldnt be side effects inside this Fn. So we shouldnt send an HTTP req, wirte something to localstorage, fetch something from localstorage.
// We gave state a default value so the 1st time this reducer executes, state.counter exists and its not undefined.
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 };
    // We want to increase depending on the value we get from the action. In this case from the amount property that we get from this action type.
    case 'increase':
      return { ...state, counter: state.counter + action.amount };
    case 'decrement':
      return { ...state, counter: state.counter - 1 };
    case 'toggle':
      return { ...state, showCounter: !state.showCounter };
    default:
      return state;
  }
};

// We set the initial state of the data store with the reducer Fn that will be executed with a default action when this code runs for the 1st time.
// We have to pass the reducer to the store to know which reducer handles that store.
export const store = legacy_createStore(counterReducer);
// We want to connect the React app to this Redux store. For that we export the store and then we provide the store (doing it on the highest level of the react App, in the index.js)
