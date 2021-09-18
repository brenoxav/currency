import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Currencies from '../../components/Currencies';

jest.mock('../../api/currency-api');

describe('INTEGRATION TESTS IN CURRENCIES', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Currencies />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders filter buttons', () => {
    render(
      <Provider store={store}>
        <Currencies />
      </Provider>,
    );
    const filterBtn = screen.getByText(/alphabetical/i);

    expect(filterBtn).toBeInTheDocument();
  });

  it('renders the base currency', () => {
    render(
      <Provider store={store}>
        <Currencies />
      </Provider>,
    );
    const baseCurrency = screen.getByText(/usd/i);

    expect(baseCurrency).toBeInTheDocument();
  });
});
