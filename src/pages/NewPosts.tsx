import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';
import { fetchNewPosts } from '@/store/reducers/posts/posts-actions';
import {
  selectNewPosts,
  selectPostsLoading,
  selectPostsError,
  selectCurrentPage,
  selectTotalPages,
} from '@/store/reducers/posts/posts-selectors';
import { selectViewMode } from '@/store/reducers/settings/settings-selectors';
import { ViewMode } from '@/enums/settings';
import PostListItem from '@/components/posts/PostListItem/PostListItem';
import PostGridItem from '@/components/posts/PostGridItem/PostGridItem';
import Pagination from '@/components/posts/Pagination/Pagination';
import { getPageFromUrl } from '@/helpers/urlHelper';
import { calculateStartRank } from '@/helpers/paginationHelper';
import { getPostsPerPage } from '@/helpers/configHelper';

const POSTS_PER_PAGE = getPostsPerPage();

function NewPosts() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const posts = useSelector(selectNewPosts);
  const loading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const viewMode = useSelector(selectViewMode);

  const pageFromUrl = getPageFromUrl(searchParams);

  useEffect(() => {
    dispatch(fetchNewPosts({ page: pageFromUrl }));
  }, [dispatch, pageFromUrl]);

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
    dispatch(fetchNewPosts({ page }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startRank = calculateStartRank(currentPage, POSTS_PER_PAGE);

  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto', p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        <FormattedMessage id="newPosts.title" />
      </Typography>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {!loading && !error && posts.length === 0 && (
        <Typography variant="body1" color="text.secondary">
          No posts found.
        </Typography>
      )}

      {!loading && posts.length > 0 && (
        <>
          {viewMode === ViewMode.List ? (
            <>
              {posts.map((post, index) => (
                <PostListItem key={post.id} item={post} rank={startRank + index} />
              ))}
            </>
          ) : (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gap: 2,
              }}
            >
              {posts.map((post, index) => (
                <PostGridItem key={post.id} item={post} rank={startRank + index} />
              ))}
            </Box>
          )}
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </>
      )}
    </Box>
  );
}

export default NewPosts;
