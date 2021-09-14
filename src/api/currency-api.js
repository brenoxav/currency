class CurrencyAPI {
  constructor() {
    this.BASE_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/';
  }

  async callApi(endpoint) {
    const response = await fetch(`${this.BASE_URL}${endpoint}`);
    return response.json();
  }

  getCurrencies() {
    return this.callApi('currencies.json');
  }

  getExchange(currency = 'usd') {
    return this.callApi(`currencies/${currency}.json`);
  }
}

const api = new CurrencyAPI();

export default api;
