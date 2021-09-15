import { useSelector } from 'react-redux';

import '../styles/Currencies.css';

const Currencies = () => {
  const currencies = useSelector((state) => state.currencies);
  const usdExchange = useSelector((state) => state.usdExchange);

  const elements = currencies.map((currency) => (
    <div key={currency.code} className="item-tile">
      <div className="item-tile-illustration">
        <h1>{currency.code}</h1>
      </div>
      <div className="item-tile-content">
        <h2>{currency.name}</h2>
        <h3>{usdExchange[currency.code]}</h3>
      </div>
    </div>
  ));

  return (
    <main>
      <div className="header-tile">
        <div>
          <h1>USD</h1>
        </div>
        <div>
          <p>US Dollar</p>
          <p>1</p>
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

export default Currencies;
