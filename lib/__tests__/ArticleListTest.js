import React from 'react';
import ArticleList from '../components/ArticleList';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {

    const testProps = {
        articles: {
            a: {id: 'a'},
            b: { id: 'b'},
        },
        articleActions: {
            lookupAuthor: jest.fn(() => ({})),
        }
    };

    it('renders correctly', () => {
        const tree = renderer.create(
            <ArticleList 
                {...testProps}
                />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});