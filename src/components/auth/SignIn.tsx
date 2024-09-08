import { useContext, useState, useEffect } from 'react';
import AuthForm from './AuthForm';
import { SignInProps, UserCredential } from './types';
import AuthContext from '../../context/auth/AuthContext';

const SignIn: React.FC<SignInProps> = ({
  isModal,
  showSignUpModal = () => {},
  closeModal = () => {},
}) => {
  const { isLoggedIn, loading, setUser } = useContext(AuthContext);
  const [isUserInvalid, setIsUserInvalid] = useState(false);
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);

  useEffect(() => {
    if (!isModal && !loading && isLoggedIn) {
      window.location.replace('/');
    }
  }, [isLoggedIn, loading, isModal]);

  const onResetError = (name: string) => {
    if (name === 'email') {
      setIsUserInvalid(false);
    }
    if (name === 'password') {
      setIsPasswordIncorrect(false);
    }
  };

  const onLogin = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const users: UserCredential[] =
        JSON.parse(localStorage.getItem('users') as string) || [];

      const user = users.find(
        (user) => user.email === email || user.name === email
      );
      if (!user) {
        setIsUserInvalid(true);
        return;
      }
      setIsUserInvalid(false);
      const isPasswordCorrect = user?.password && user?.password === password;

      if (isPasswordCorrect) {
        setIsPasswordIncorrect(false);
        setUser(user);
        localStorage.setItem('authUser', JSON.stringify(user));
        sessionStorage.setItem('isLoggedIn', 'true');
        if (!isModal) window.location.assign('/');
      } else {
        setIsPasswordIncorrect(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthForm
      title='WELCOME BACK'
      subtitle='Log into your account'
      emailLabel='Email or Username'
      emailPlaceHolder='Enter your email or username'
      passwordLabel='Password'
      passwordPlaceHolder='Enter your password'
      forgetPasswordLabel='Forgot password?'
      buttonText='Login now'
      buttonAction={onLogin}
      additionalText='Not registered yet?'
      additionalCta='Register'
      additionalCtaAction={() =>
        isModal ? showSignUpModal() : window.location.replace('/sign-up')
      }
      isUserInvalid={isUserInvalid}
      isPasswordIncorrect={isPasswordIncorrect}
      onResetError={onResetError}
      isModal={isModal}
      isDismissible={isModal}
      onClose={() => closeModal()}
    />
  );
};

export default SignIn;
