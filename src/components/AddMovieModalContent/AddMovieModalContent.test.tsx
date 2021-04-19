import * as React from "react";
import { Provider } from 'react-redux';
import { shallow, ShallowWrapper } from 'enzyme';
import * as reactRedux from 'react-redux';

import { AddMovieModalContent } from './AddMovieModalContent';
import { store } from "../../store";

const ReduxProvider = ({ children, store }) => (
    <Provider store={store}>{children}</Provider>
)

describe('AddMovieModalContent', () => {
    it('should render correctly', () => {
        const props = {
            closeModal: jest.fn(),
        };        
        const wrapper: ShallowWrapper = shallow(
        <ReduxProvider store={store}>
            <AddMovieModalContent {...props} />
        </ReduxProvider>);
        expect(wrapper).toMatchSnapshot();
    });

    it('onSubmit should work correctly', () => {
        const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
        const addMovie = jest.fn();
        useDispatchMock.mockReturnValue(addMovie);
        expect(addMovie).not.toHaveBeenCalled();
    });
});
