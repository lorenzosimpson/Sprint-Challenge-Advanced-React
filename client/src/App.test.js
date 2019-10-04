import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent} from '@testing-library/react';
import App from './App';
import CardContainer from './components/CardContainer';


test('Header is found', () => {
  const { getByTestId } = render(<App />);

  // assert that the "lions" header is on the DOM
  getByTestId(/header-text/i);
});

test('CardContainer is found', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/card-container/i);
})

