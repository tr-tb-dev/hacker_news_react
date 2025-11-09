import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { selectIsLoading } from '@/store/reducers/app/app-selectors';
import { router } from '@/routes/router';
import Loading from '@/components/Loading/Loading';

function AppRoot() {
  const isLoading = useSelector(selectIsLoading);

  if (isLoading) {
    return <Loading />;
  }

  return <RouterProvider router={router} />;
}

export default AppRoot;
