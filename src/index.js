import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import {composeWithDevTools} from "redux-devtools-extension";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


const store = createStore(
  reducer,
  composeWithDevTools()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
