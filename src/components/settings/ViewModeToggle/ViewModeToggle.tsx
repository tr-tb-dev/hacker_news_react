import { IconButton } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { useDispatch, useSelector } from 'react-redux';
import { selectViewMode } from '@/store/reducers/settings/settings-selectors';
import { setViewMode } from '@/store/reducers/settings/settings-actions';
import { ViewMode } from '@/enums/settings';

function ViewModeToggle() {
  const dispatch = useDispatch();
  const viewMode = useSelector(selectViewMode);

  const handleToggle = () => {
    const newMode = viewMode === ViewMode.List ? ViewMode.Grid : ViewMode.List;
    dispatch(setViewMode(newMode));
  };

  return (
    <IconButton onClick={handleToggle} color="inherit">
      {viewMode === ViewMode.List ? <ViewModuleIcon /> : <ViewListIcon />}
    </IconButton>
  );
}

export default ViewModeToggle;
