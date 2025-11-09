import { HNItem } from '@/types/hackernews';
import { Box, Card, CardContent, Typography, Link, Chip } from '@mui/material';
import { useIntl } from 'react-intl';
import { formatRelativeTime } from '@/helpers/timeHelper';
import { extractDomain } from '@/helpers/urlHelper';

interface PostListItemProps {
  item: Partial<HNItem>;
  rank: number;
}

function PostListItem({ item, rank }: PostListItemProps) {
  const intl = useIntl();

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Typography variant="h6" color="text.secondary" sx={{ minWidth: '30px' }}>
            {rank}.
          </Typography>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              {item.url ? (
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Typography variant="h6" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                    {item.title}
                  </Typography>
                </Link>
              ) : (
                <Typography variant="h6">{item.title}</Typography>
              )}
              {extractDomain(item.url) && (
                <Typography variant="caption" color="text.secondary">
                  ({extractDomain(item.url)})
                </Typography>
              )}
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
              {item.score !== undefined && <Chip label={`${item.score} points`} size="small" color="primary" />}
              {item.by && (
                <Typography variant="body2" color="text.secondary">
                  by {item.by}
                </Typography>
              )}
              {item.time && (
                <Typography variant="body2" color="text.secondary">
                  {formatRelativeTime(item.time, intl)}
                </Typography>
              )}
              {item.descendants !== undefined && (
                <Typography variant="body2" color="text.secondary">
                  {item.descendants} comments
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PostListItem;
