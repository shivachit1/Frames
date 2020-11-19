import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import {createStore} from 'redux';
import allReducers from './reducer/allReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {getFramesData} from './actions/action';


const store = createStore(allReducers,composeWithDevTools());

store.dispatch(getFramesData());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

