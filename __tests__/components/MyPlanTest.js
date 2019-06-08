import React from 'react';
import Enzyme, { shallow, mount } from "enzyme";
import MyPlan from '../../src/components/MyPlan';
import Adapter from 'enzyme-adapter-react-16';

describe('MyPlan unit test', () => {
    it("MyPlan should render the my plan component with all the route", () => {

       Enzyme.configure({adapter: new Adapter()});
       
       const wrapper = shallow(<MyPlan />);
       expect(wrapper.exists()).toBe(true);
       expect(wrapper.text()).toEqual('<Header /><Route /><Route />');
   })
});