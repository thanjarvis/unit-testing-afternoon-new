import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import { shortText, longText, posts, users } from './_data_/testData';

it('will not alter a string that is less that 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})

it('should cut long posts off at 100 characters and add ... to the end', () => {
    expect(shortenText(longText)).not.toHaveLength(103)
    expect(shortenText(longText).slice(-3)).toBe('...')
})

it('word count should return how many characters there are', () => {
    expect(wordCount(posts)).toBe(233)
})

it('attatch user should attach username to post', () => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})

it('atach user shouldnt return any post without a user', () => {
    const newPosts = attachUserName(users, posts)
    const deletedPost = posts[5]
    expect(newPosts).not.toContainEqual(deletedPost)
})