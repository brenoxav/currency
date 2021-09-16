import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import '../styles/Currencies.css';

const Currencies = () => {
  const currencies = useSelector((state) => state.currencies);
  const usdExchange = useSelector((state) => state.usdExchange);

  const elements = currencies.map((currency) => (
    <NavLink to={`/currency/${currency.code}`} key={currency.code}>
      <div className="item-tile">
        <span className="material-icons-outlined item-arrow-icon">
          arrow_circle_right
        </span>
        <div className="item-tile-illustration">
          <h1>{currency.code}</h1>
        </div>
        <div className="item-tile-content">
          <h2>{currency.name}</h2>
          <h3>{usdExchange[currency.code]}</h3>
        </div>
      </div>
    </NavLink>
  ));

  return (
    <main>
      <div className="header-tile">
        <div>
          <h1>1 USD</h1>
        </div>
        <div>
          filter
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
