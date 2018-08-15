import React from 'react';
import CurrentWeather from "../lib/CurrentWeather";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


describe('CurrentWeather', () => {
  let renderedApp;

  window.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn()
  };

  beforeEach(() => {
    renderedApp = shallow(<CurrentWeather />);
  });

  it.skip('should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it.skip('should render the Card Container component', () => {
    expect(renderedApp.find('CardContainer').length).toEqual(1);
  });

  it.skip('should render the Header component', () => {
    expect(renderedApp.find('Header').length).toEqual(1);
  });
});
