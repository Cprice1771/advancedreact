import React from 'react';
import ArticleList from '../components/ArticleList';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Article from '../components/Article';

configure({ adapter: new Adapter() });

describe('ArticleList', () => {

    const testProps = {
        articles: {
            a: {id: 'a'},
            b: { id: 'b'},
        },
        store: {
            lookupAuthor: jest.fn(() => ({})),
        }
    };

    it('renders correctly', () => {
        const wrapper = shallow(
            <ArticleList 
                {...testProps}
                />
        );

        //console.log();
        expect(wrapper.find('ArticleContainer').length).toBe(2);
        expect(wrapper).toMatchSnapshot();
    });
});