import React from 'react';
import Enzyme, { shallow, mount } from "enzyme";
import AboutPage from '../../../src/components/about/AboutPage';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('MyPlan unit test', () => {
    it("MyPlan", () => {
        const wrapper = shallow(<AboutPage />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.text()).toBe('AboutStill it Development!!!');
    })
});