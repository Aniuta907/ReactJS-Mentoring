import * as React from "react";
import { mount, shallow, ShallowWrapper } from 'enzyme';

import { AddMovieModalManager } from './AddMovieModalManager';

describe('AddMovieModalManager', () => {
    it('should render correctly', () => {      
        const wrapper: ShallowWrapper = shallow(<AddMovieModalManager />);
        expect(wrapper).toMatchSnapshot();
    });

    test('AddMovieModalManager sets state properly', () => {
        const setModalVisibility = jest.fn();
        const wrapper = mount(<AddMovieModalManager />);
        const handleClick = jest.spyOn(React, "useState");
        // Type 'any[]' is not assignable to type '[unknown, Dispatch<unknown>]'. 
        // Target requires 2 element(s) but source may have fewer
        handleClick.mockImplementation(IsModalVisible => [IsModalVisible, setModalVisibility]);

        expect(setModalVisibility).toBeFalsy();
        wrapper.find(".add-movie-button").simulate("click");
        expect(setModalVisibility).toBeTruthy();
      })
});
