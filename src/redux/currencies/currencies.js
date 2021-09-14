import api from '../../api/currency-api';

const GET_CURRENCIES_FROM_API = 'currencies/GET_CURRENCIES_FROM_API';
const GET_EXCHANGE_FROM_API = 'currencies/GET_EXCHANGE_FROM_API';

const initialState = {
  currencies: {},
  usdExchange: {},
};

export const getCurrenciesFromApi = () => ((dispatch) => {
  api.getCurrencies()
    .then((response) => {
      dispatch({
        type: GET_CURRENCIES_FROM_API,
        payload: response,
      });
    });
});

export const getExchangeFromAPi = () => ((dispatch) => {
  api.getExchange()
    .then((response) => {
      dispatch({
        type: GET_EXCHANGE_FROM_API,
        payload: response.usd,
      });
    });
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCIES_FROM_API:
      return {
        ...state,
        currencies: action.payload,
      };

    case GET_EXCHANGE_FROM_API:
      return {
        ...state,
        usdExchange: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
