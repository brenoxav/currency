class CurrencyAPI {
  constructor() {
    this.currencies = {
      ars: 'Argentine peso',
      brl: 'Brazilian real',
      btc: 'Bitcoin',
      clp: 'Chilean peso',
      cop: 'Colombian peso',
      djf: 'Djiboutian franc',
      doge: 'Dogecoin',
      dop: 'Dominican peso',
      egp: 'Egyptian pound',
      eur: 'Euro',
      gbp: 'Pound sterling',
      ils: 'Israeli New Shekel',
      inr: 'Indian rupee',
      iqd: 'Iraqi dinar',
      jmd: 'Jamaican dollar',
      mxn: 'Mexican peso',
      pen: 'Sol',
      svc: 'Salvadoran Colón',
      vef: 'Sovereign Bolivar',
      zar: 'South African rand',
    };
    this.rates = {
      date: '2021-09-18',
      usd: {
        ars: 98.28576,
        brl: 5.289104,
        btc: 0.000021,
        clp: 784.510395,
        cop: 3826.999997,
        djf: 177.720393,
        doge: 4.172717,
        dop: 56.730393,
        egp: 15.71649,
        eur: 0.85286,
        gbp: 0.728067,
        ils: 3.20925,
        inr: 73.695039,
        iqd: 1460.499999,
        jmd: 148.734932,
        mxn: 20.021504,
        pen: 4.108039,
        svc: 8.755058,
        vef: 213830222153.6929,
        zar: 14.758038,
      },
    };
  }

  getCurrencyNames() {
    return this.currencies;
  }

  getExchangeRates() {
    return this.rates;
  }
}

const api = new CurrencyAPI();

export default api;
