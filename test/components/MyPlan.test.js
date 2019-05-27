import React from 'react';
import Enzyme, { shallow, mount } from "enzyme";
import MyPlan from '../../src/components/MyPlan';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('MyPlan unit test', () => {
   it("MyPlan", () => {
       const wrapper = shallow(<MyPlan />);
       expect(wrapper.exists()).toBe(true);
       expect(wrapper.text()).toBe('<Route /><Route />');
   })
});