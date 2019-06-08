import React from 'react';
import Enzyme, { shallow, mount } from "enzyme";
import Header from '../../../src/components/common/Header';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('Header', () => {
    Enzyme.configure({adapter: new Adapter()});
    it("it should render the Header", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
        // expect(wrapper.text()).toBe('AboutStill it Development!!!');
    })
});