import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/index.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Suite for Info', () => {
  const app = shallow(<App />);

  test('it should exist', () => {
    expect(app.exists()).toBeTruthy();
  });
});