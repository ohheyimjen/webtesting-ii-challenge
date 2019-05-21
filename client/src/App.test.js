import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';


describe('<App />', () => {
 
  it('renders without crashing', () => {
    render(<App />);
    cleanup();
  })

  it('renders "PLAY BALL"', () => {
    const { getByText } = render(<App />);

    const text = getByText(/play ball/i);

    expect(text).toBeInTheDocument();
    cleanup();
  })

});