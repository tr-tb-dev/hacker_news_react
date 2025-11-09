import { RootState } from '@/store';
import { HNItem } from '@/types/hackernews';

export const selectPostsLoading = (state: RootState): boolean => state.posts.loading;
export const selectPostsError = (state: RootState): string | null => state.posts.error;
export const selectCurrentPage = (state: RootState): number => state.posts.currentPage;
export const selectTotalPages = (state: RootState): number => state.posts.totalPages;

export const selectNewPosts = (state: RootState): Partial<HNItem>[] => {
  return state.posts.newPostItems;
};

export const selectTopPosts = (state: RootState): Partial<HNItem>[] => {
  return state.posts.topPostItems;
};
