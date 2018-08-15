import React from 'react';
import ReactDOM from 'react-dom';
import HourlyForecast from '../lib/HourlyForecast';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


describe('Hourly Forecast', () => {
  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HourlyForecast />, div);
  });
});