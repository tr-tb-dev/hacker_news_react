import { IconButton } from '@mui/material';
import { FormatSize } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { selectFontSize } from '@/store/reducers/settings/settings-selectors';
import { setFontSize } from '@/store/reducers/settings/settings-actions';
import { FontSize } from '@/enums/settings';
import { useIntl } from 'react-intl';

function FontSizeToggle() {
  const fontSize = useSelector(selectFontSize);
  const theme = useTheme();
  const dispatch = useDispatch();
  const intl = useIntl();

  const handleToggle = () => {
    const newFontSize = fontSize === FontSize.Large ? FontSize.Small : FontSize.Large;
    dispatch(setFontSize(newFontSize));
  };

  return (
    <IconButton
      onClick={handleToggle}
      aria-label={intl.formatMessage({ id: 'settings.fontSize.toggle' })}
      sx={{
        color: theme.palette.navigation.text,
        backgroundColor: 'transparent',
        position: 'relative',
        '&:hover': {
          backgroundColor: theme.palette.navigation.hover,
          color: theme.palette.navigation.active,
        },
      }}
    >
      <FormatSize
        sx={{
          fontSize: fontSize === FontSize.Large ? '1.5rem' : '1.2rem',
        }}
      />
    </IconButton>
  );
}

export default FontSizeToggle;
