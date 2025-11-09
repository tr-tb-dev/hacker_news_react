export const getPostsPerPage = (): number => {
  return Number(import.meta.env.VITE_POSTS_PER_PAGE) || 20;
};
