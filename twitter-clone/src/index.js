import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import configureStore from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App style={{ margin: 0, padding: 0 }} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
