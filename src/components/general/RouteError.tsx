import { useRouteError } from 'react-router';
import Error from './Error';
import NotFound from './NotFound';

const RouteError: React.FC = () => {
  const error: any = useRouteError();

  console.error(error);

  return error?.status === 404 ? <NotFound /> : <Error />;
};

export default RouteError;
