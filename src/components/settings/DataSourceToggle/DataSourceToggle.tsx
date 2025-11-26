import { IconButton } from '@mui/material';
import { Storage, CloudQueue } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { selectDataSource } from '@/store/reducers/settings/settings-selectors';
import { setDataSource } from '@/store/reducers/settings/settings-actions';
import { DataSource } from '@/enums/settings';

function DataSourceToggle() {
  const dataSource = useSelector(selectDataSource);
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleToggle = () => {
    const newDataSource = dataSource === DataSource.ReduxSaga ? DataSource.TanStack : DataSource.ReduxSaga;
    dispatch(setDataSource(newDataSource));
  };

  return (
    <IconButton
      onClick={handleToggle}
      aria-label="toggle data source"
      data-testid="data-source-toggle-button"
      sx={{
        color: theme.palette.navigation.text,
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: theme.palette.navigation.hover,
          color: theme.palette.navigation.active,
        },
        transition: 'all 0.3s ease',
      }}
    >
      {dataSource === DataSource.ReduxSaga ? <Storage /> : <CloudQueue />}
    </IconButton>
  );
}

export default DataSourceToggle;
