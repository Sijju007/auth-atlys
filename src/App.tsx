import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import RouteError from './components/general/RouteError';
import Home from './components/home/Home';
import { AuthContextProvider } from './context/auth/AuthContext';

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <RouteError />,
    },
    {
      path: '/login',
      element: <SignIn />,
      errorElement: <RouteError />,
    },
    {
      path: '/sign-up',
      element: <SignUp />,
      errorElement: <RouteError />,
    },
  ]);
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />;
    </AuthContextProvider>
  );
};

export default App;
