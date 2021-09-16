import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../api/currency-api';

import '../styles/Currency.css';

const Currency = () => {
  const { code } = useParams();
  const [rates, setRates] = useState([]);

  const formatRates = (ratesObj) => {
    const entriesArr = Object.entries(ratesObj);
    const ratesArr = entriesArr.map((rate) => ({
      code: rate[0],
      value: rate[1],
    }
    ));
    return ratesArr;
  };

  useEffect(() => {
    api.getExchange(code)
      .then((rates) => {
        setRates(formatRates(rates[code]));
      });
  }, []);

  const elements = rates ? rates.map((rate) => (
    <div key={rate.code} className="item-half-tile">
      <span>{`1 ${code}`}</span>
      <span>{`${rate.value} ${rate.code}`}</span>
    </div>
  )) : [];

  return (
    <main>
      <div className="header-tile">
        <div>
          <h1>{`1 ${code}`}</h1>
        </div>
        <div>
          <p>filter</p>
        </div>
      </div>
      <div className="stats-header">
        Stats by Currency
      </div>
      <div className="tiles-wrapper">
        {elements}
      </div>
    </main>
  );
};

export default Currency;
