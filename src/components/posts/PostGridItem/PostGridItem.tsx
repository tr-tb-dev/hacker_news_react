import { HNItem } from '@/types/hackernews';
import { Card, CardContent, Typography, Link, Chip, Box } from '@mui/material';
import { useIntl } from 'react-intl';
import { formatRelativeTime } from '@/helpers/timeHelper';
import { extractDomain } from '@/helpers/urlHelper';

interface PostGridItemProps {
  item: Partial<HNItem>;
  rank: number;
}

function PostGridItem({ item, rank }: PostGridItemProps) {
  const intl = useIntl();

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 1 }}>
          <Typography variant="h6" color="text.secondary" sx={{ minWidth: '30px' }}>
            {rank}.
          </Typography>
          {item.score !== undefined && <Chip label={`${item.score}pts`} size="small" color="primary" />}
        </Box>

        <Box sx={{ flex: 1, mb: 2 }}>
          {item.url ? (
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography
                variant="subtitle1"
                sx={{ '&:hover': { textDecoration: 'underline' }, fontWeight: 500, mb: 0.5 }}
              >
                {item.title || 'Loading...'}
              </Typography>
            </Link>
          ) : (
            <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 0.5 }}>
              {item.title || 'Loading...'}
            </Typography>
          )}
          {extractDomain(item.url) && (
            <Typography variant="caption" color="text.secondary">
              {extractDomain(item.url)}
            </Typography>
          )}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          {item.by && (
            <Typography variant="caption" color="text.secondary">
              by {item.by}
            </Typography>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {item.time && (
              <Typography variant="caption" color="text.secondary">
                {formatRelativeTime(item.time, intl)}
              </Typography>
            )}
            {item.descendants !== undefined && (
              <Typography variant="caption" color="text.secondary">
                {item.descendants} comments
              </Typography>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PostGridItem;
