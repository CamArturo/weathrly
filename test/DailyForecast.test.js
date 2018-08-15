import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


describe('Daily Forecast', () => {
  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DailyForecast />, div);
  });
});