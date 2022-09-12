import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider} from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './redux/store';
// import { reducer} from "./redux/titleReducer"

const root = ReactDOM.createRoot(document.getElementById('root'));

// const store = createStore(reducer);
const store = createStore(rootReducer);

root.render(
  <Provider store={store}>
     <App />
  </Provider>
    
 
   
);


