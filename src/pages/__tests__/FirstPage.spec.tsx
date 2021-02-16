import React from 'react';
import { shallow } from 'enzyme';
import { FirstPage } from '..';

const pageComponent = shallow(<FirstPage title="Teste page" />);

describe('Check mout page Default', () => {
  it('return componet with props title', () => {
    expect(pageComponent.find('p').text()).toBe('first page works! Teste page');
  });
});
