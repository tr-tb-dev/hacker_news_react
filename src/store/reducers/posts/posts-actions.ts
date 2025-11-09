import { makeActionCreator } from '@/helpers/actionHelper';
import { HNItem } from '@/types/hackernews';

export const resetPosts = makeActionCreator('RESET');
export const fetchNewPosts = makeActionCreator<{ page: number }>('FETCH_NEW_POSTS');
export const loadNewPostItem = makeActionCreator<{ item: HNItem; index: number }>('LOAD_NEW_POST_ITEM');
export const loadTopPostItem = makeActionCreator<{ item: HNItem; index: number }>('LOAD_TOP_POST_ITEM');
export const updateNewPostItem = makeActionCreator<{ item: HNItem; index: number }>('UPDATE_NEW_POST_ITEM');
export const updateTopPostItem = makeActionCreator<{ item: HNItem; index: number }>('UPDATE_TOP_POST_ITEM');
export const fetchTopPostsFailure = makeActionCreator<string>('FETCH_TOP_POSTS_FAILURE');
export const fetchNewPostsFailure = makeActionCreator<string>('FETCH_NEW_POSTS_FAILURE');
export const fetchTopPosts = makeActionCreator<{ page: number }>('FETCH_TOP_POSTS');

export const fetchNewPostsSuccess = makeActionCreator<{
  items: Partial<HNItem>[];
  page: number;
  totalPages: number;
}>('posts/FETCH_NEW_POSTS_SUCCESS');

export const fetchTopPostsSuccess = makeActionCreator<{
  items: Partial<HNItem>[];
  page: number;
  totalPages: number;
}>('posts/FETCH_TOP_POSTS_SUCCESS');
