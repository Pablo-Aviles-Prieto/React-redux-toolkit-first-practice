import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter';
import { authSlice } from './auth';

// We could call the legacy_createStore(counterSlice.reducer); <== With this we would have access to the reducers we created.
// configureStore (like createStore) creates a store, but it makes merging multiple reducers into 1 reducer, easier.
// We pass a configuration obj, where we set the reducer property (expected by redux/toolkit). Is in singular since it expects a main reducer Fn which is responsible for the global state.
// Also called root reducer, this property of the obj we pass to configureStore.
export const store = configureStore({
  // This obj acts as a map of reducers, when we can have any key names of our choice and pointing to our different reducers.
  // This .reducer that we pass to slice's is the complete state (the state with the props and initial values, and also with the defined reducer Fns).
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
