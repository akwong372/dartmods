import React from 'react';
import { shallow } from 'enzyme';
import Navbar from  '../react-client/src/components/Navbar.jsx';
import UserSubmission from '../react-client/src/components/UserSubmission.jsx'
import Footer from '../react-client/src/components/Footer.jsx'

describe ('It should render individual components', () => {
  test('Navbar renders correctly', () => {
    const wrapper = shallow(<Navbar/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('UserSubmission renders correctly', () => {
    const wrapper = shallow(<UserSubmission/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('Footer renders correctly', () => {
    const wrapper = shallow(<UserSubmission/>);
    expect(wrapper).toMatchSnapshot();
  });
});