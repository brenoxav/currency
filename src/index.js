import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configureStore';
import { getCurrenciesFromApi, getExchangeFromAPi } from './redux/currencies/currencies';
import './styles/index.css';

store.dispatch(getCurrenciesFromApi());
store.dispatch(getExchangeFromAPi());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
