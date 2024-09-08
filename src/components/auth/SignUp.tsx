import { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import AuthForm from './AuthForm';
import { SignUpProps, UserCredential } from './types';

const SignUp: React.FC<SignUpProps> = ({
  isModal,
  showLoginModal = () => {},
  closeModal = () => {},
}) => {
  const { isLoggedIn, loading } = useContext(AuthContext);
  useEffect(() => {
    if (!isModal && !loading && isLoggedIn) {
      window.location.replace('/');
    }
  }, [isLoggedIn, loading, isModal]);

  const onSignUp = ({
    email,
    username: name,
    password,
  }: {
    email: string;
    username: string;
    password: string;
  }) => {
    try {
      const users: UserCredential[] =
        JSON.parse(localStorage.getItem('users') as string) || [];
      users.push({ email, name, password });
      localStorage.setItem('users', JSON.stringify(users));
      if (isModal) {
        showLoginModal();
      } else {
        window.location.assign('/login');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthForm
      title='SIGN UP'
      subtitle='Create an account to continue'
      emailLabel='Email'
      emailPlaceHolder='Enter your email'
      usernameLabel='Username'
      usernamePlaceHolder='Choose a preferred username'
      passwordLabel='Password'
      passwordPlaceHolder='Choose a strong password'
      buttonText='Continue'
      buttonAction={onSignUp}
      additionalText='Already have an account?'
      additionalCta='Login'
      additionalCtaAction={() =>
        isModal ? showLoginModal() : window.location.replace('/login')
      }
      isModal={isModal}
      isDismissible={isModal}
      onClose={() => closeModal()}
    />
  );
};

export default SignUp;
