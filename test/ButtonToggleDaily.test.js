import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ButtonToggleDaily from "../lib/ButtonToggleDaily";
configure({adapter: new Adapter()});

describe('button toggle daily', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ButtonToggleDaily />)
  });

  it('should be a thing', () => {
    expect(wrapper).toBeDefined();
  });
});

