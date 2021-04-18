import * as React from "react";
import { shallow, ShallowWrapper } from 'enzyme';
import { createMock } from 'ts-auto-mock';

import { MovieCard } from './MovieCard';
import { MovieCardInterface } from '../../interfaces/MovieCardInterface';

const movieMock: MovieCardInterface = createMock<MovieCardInterface>();

const props = {
    movie: movieMock,
};

describe('MovieCard', () => {
    it('should render correctly', () => {
        const wrapper: ShallowWrapper = shallow(<MovieCard {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
