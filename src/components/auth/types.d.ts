export type UserCredential = {
  email: string;
  name: string;
  password: string;
};

export type AuthFormProps = {
  title: string;
  subtitle: string;
  emailLabel: string;
  emailPlaceHolder: string;
  usernameLabel?: string;
  usernamePlaceHolder?: string;
  passwordLabel: string;
  passwordPlaceHolder: string;
  forgetPasswordLabel?: string;
  buttonText: string;
  buttonAction: Function;
  additionalText?: string;
  additionalCta?: string;
  additionalCtaAction?: Function;
  isDismissible?: boolean;
  isUserInvalid?: boolean;
  isPasswordIncorrect?: boolean;
  onResetError?: Function;
  showLogo?: boolean;
  isModal?: boolean;
  onClose?: MouseEventHandler<HTMLDivElement>;
};

export type FormDataProps = {
  email: string;
  username: string;
  password: string;
};

export type SignInProps = {
  isModal?: boolean;
  showSignUpModal?: Function;
  closeModal?: Function;
};

export type SignUpProps = {
  isModal?: boolean;
  showLoginModal?: Function;
  closeModal?: Function;
};
