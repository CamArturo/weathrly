import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../lib/app';

configure({adapter: new Adapter()});

describe('DataSanitizer tests', () => {
  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<App />);
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it.skip('Should initially have set states of a toggle, true; an undefined city, and error of false', () => {
    expect(renderedApp.state()).toEqual(
      {
        location: this.getData(),
        weatherData: {},
        cities,
        searchResults: [],
        apiError: false
      });
  });

  it.skip('App should have a default state of key and it should be default value', () => {

    const expectDefaultState = {
      currWeatherObj: {},
      hourArray: [],
      dayArray: []
    };

    expect(renderedApp.state()).toEqual(expectDefaultState);
  });
});