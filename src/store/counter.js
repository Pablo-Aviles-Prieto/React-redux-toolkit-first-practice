import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

// Needs an obj as arg.
// Basically we are preparing a slice of our global state (for example, to separe non reelated data in the state, like auth and cart). We could even do it on a separe files, this slices.
// We get back a slice of our global state (in this case, the slice of the counter).
export const counterSlice = createSlice({
  // It needs a name prop, an identifier of that piece of state.
  name: 'counter',
  initialState: initialCounterState,
  // Inside the reducers we set all the reducers (methods) this slice needs.
  // They will receive the latest state as param and they will be called by redux.
  // We dont have to pass types now, we will dispatch actions that target this reducers.
  // In this reducers, we are allow to mutate the state (even if its not a good practice), since redux-toolkit uses another internally library which detect code that mutate the state and to solve it, this library clones the existing state so is the one that modifies and return as new state.
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    increase(state, action) {
      // Since redux-toolkit sends the action, every data we pass, is under the property payload => {type: 'id', payload: {the info we pass to the action}}
      state.counter += action.payload.amount;
    },
    toggleCounter(state, action) {
      state.showCounter = !state.showCounter;
    },
  },
});

// We export this since it allows us to get the methods defined in the counterSlice. (This methods when called, will return an action obj, with the type property like we did manually before).
export const counterActions = counterSlice.actions;
