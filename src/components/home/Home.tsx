import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import Loader from '../general/Loader';
import Header from './header/Header';
import CreatePost from './posts/CreatePost';
import Posts from './posts/Posts';
import SignUp from '../auth/SignUp';
import SignIn from '../auth/SignIn';

const Home: React.FC = () => {
  const { isLoggedIn, loading, authUser } = useContext(AuthContext);
  const [authModal, setAuthModal] = useState('');

  const showLoginModal = () => setAuthModal('login');
  const showSignUpModal = () => setAuthModal('signUp');
  const closeModal = () => setAuthModal('');

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      window.location.replace('/login');
    }
  }, [isLoggedIn, loading]);

  return loading || !isLoggedIn ? (
    <Loader />
  ) : (
    <div className='max-w-[700px] mx-auto'>
      <Header username={authUser?.name} />
      <CreatePost onClick={showLoginModal} />
      <Posts onPostClick={showLoginModal} />
      {authModal === 'signUp' ? (
        <SignUp
          isModal
          showLoginModal={showLoginModal}
          closeModal={closeModal}
        />
      ) : authModal === 'login' ? (
        <SignIn
          isModal
          showSignUpModal={showSignUpModal}
          closeModal={closeModal}
        />
      ) : null}
    </div>
  );
};

export default Home;
