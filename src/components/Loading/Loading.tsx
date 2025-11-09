import { Box, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Loading() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <CircularProgress
        size={60}
        sx={{
          color: theme.palette.primary.main,
        }}
      />
    </Box>
  );
}

export default Loading;
