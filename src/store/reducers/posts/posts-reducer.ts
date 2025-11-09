import { PostsState } from '@/types/hackernews';
import { Action } from '@/helpers/actionHelper';
import {
  fetchNewPosts,
  fetchNewPostsSuccess,
  fetchNewPostsFailure,
  fetchTopPosts,
  fetchTopPostsSuccess,
  fetchTopPostsFailure,
  loadNewPostItem,
  loadTopPostItem,
  updateNewPostItem,
  updateTopPostItem,
  resetPosts,
} from './posts-actions';

const initialState: PostsState = {
  newPostItems: [],
  topPostItems: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 0,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PostsAction = Action<any>;

const _fetchPosts = (state: PostsState, action: PostsAction): PostsState => ({
  ...state,
  loading: true,
  error: null,
  currentPage: action.payload?.page || 1,
});

const _fetchNewPostsSuccess = (state: PostsState, action: PostsAction): PostsState => {
  if (!action.payload) return state;
  return {
    ...state,
    loading: false,
    newPostItems: action.payload.items,
    currentPage: action.payload.page,
    totalPages: action.payload.totalPages,
  };
};

const _fetchTopPostsSuccess = (state: PostsState, action: PostsAction): PostsState => {
  if (!action.payload) return state;
  return {
    ...state,
    loading: false,
    topPostItems: action.payload.items,
    currentPage: action.payload.page,
    totalPages: action.payload.totalPages,
  };
};

const _fetchPostsFailure = (state: PostsState, action: PostsAction): PostsState => ({
  ...state,
  loading: false,
  error: action.payload || 'Unknown error',
});

const _loadNewPostItem = (state: PostsState, action: PostsAction): PostsState => {
  if (!action.payload) return state;
  return {
    ...state,
    newPostItems: state.newPostItems.map((item, idx) =>
      idx === action.payload.index ? { ...item, ...action.payload.item } : item
    ),
  };
};

const _updateNewPostItem = (state: PostsState, action: PostsAction): PostsState => {
  if (!action.payload) return state;
  return {
    ...state,
    newPostItems: state.newPostItems.map((item, idx) =>
      idx === action.payload.index ? { ...item, ...action.payload.item } : item
    ),
  };
};

const _loadTopPostItem = (state: PostsState, action: PostsAction): PostsState => {
  if (!action.payload) return state;
  return {
    ...state,
    topPostItems: state.topPostItems.map((item, idx) =>
      idx === action.payload.index ? { ...item, ...action.payload.item } : item
    ),
  };
};

const _updateTopPostItem = (state: PostsState, action: PostsAction): PostsState => {
  if (!action.payload) return state;
  return {
    ...state,
    topPostItems: state.topPostItems.map((item, idx) =>
      idx === action.payload.index ? { ...item, ...action.payload.item } : item
    ),
  };
};

const _resetPosts = (): PostsState => initialState;

type ReducerMap = {
  [key: string]: (state: PostsState, action: PostsAction) => PostsState;
};

const reducers: ReducerMap = {
  [fetchNewPosts.type]: _fetchPosts,
  [fetchTopPosts.type]: _fetchPosts,
  [fetchNewPostsSuccess.type]: _fetchNewPostsSuccess,
  [fetchTopPostsSuccess.type]: _fetchTopPostsSuccess,
  [fetchNewPostsFailure.type]: _fetchPostsFailure,
  [fetchTopPostsFailure.type]: _fetchPostsFailure,
  [loadNewPostItem.type]: _loadNewPostItem,
  [updateNewPostItem.type]: _updateNewPostItem,
  [loadTopPostItem.type]: _loadTopPostItem,
  [updateTopPostItem.type]: _updateTopPostItem,
  [resetPosts.type]: _resetPosts,
};

const postsReducer = (state = initialState, action: PostsAction): PostsState =>
  reducers[action.type] ? reducers[action.type](state, action) : state;

export default postsReducer;
