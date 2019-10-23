import React from 'react';
import { render } from '@testing-library/react';
import PostWidget from '../components/PostWidget';
import { MemoryRouter } from 'react-router-dom';
import { shortenText } from '../utils/functions';
import { posts } from '../_tests_/_data_/testData';
// import {posts} from './_data_/testData'
// import {posts} from './_data_/testData'


const longPost = posts[0]
const post = posts[1]

it('checks to see if the inner text matches the passed in posts text', () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget {...post}/>
        </MemoryRouter>,
    )
    expect(container.textContent).toContain(post.text)
})

it('doesnt shorten text when expanded', () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget {...longPost}/>
        </MemoryRouter>,
    )
    expect(container.textContent).toContain(shortenText(longPost.text))
})

it('shortens text when not expanded', () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget expanded={true} {...longPost}/>
        </MemoryRouter>
    )
    expect(container.textContent).toContain(longPost.text)
})