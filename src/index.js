import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { store } from './store/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
// We provide the store (doing it on the highest level of the react App, in the index.js)
// As with useContext, we dont have to wrap the root element, we could wrap just the components we want to provide the state to them and their childrens.
// Aswell, we provide our store (imported), to the store props that expects the Provider component.
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
