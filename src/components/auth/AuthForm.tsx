import { MouseEventHandler, useState } from 'react';
import { AuthFormProps, FormDataProps } from './types';

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  subtitle,
  emailLabel,
  emailPlaceHolder,
  usernameLabel,
  usernamePlaceHolder,
  passwordLabel,
  passwordPlaceHolder,
  forgetPasswordLabel,
  buttonText,
  buttonAction,
  additionalText,
  additionalCta,
  additionalCtaAction,
  isDismissible,
  isUserInvalid,
  isPasswordIncorrect,
  onResetError,
  showLogo = true,
  isModal,
  onClose,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataProps>({
    email: '',
    username: '',
    password: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (['email', 'password'].includes(name) && !value) {
      onResetError && onResetError(name);
    }
  };

  const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    buttonAction(formData);
  };

  return (
    <div>
      {isModal && (
        <div className='backdrop-blur-[2px] bg-black/50 fixed top-0 bottom-0 left-0 right-0'></div>
      )}
      <div
        className={`${
          isModal ? 'fixed' : 'absolute'
        } top-0 bottom-0 left-0 right-0 h-screen w-screen flex flex-col items-center justify-center`}
      >
        <form onSubmit={onSubmit}>
          {showLogo && !isModal && (
            <img src='/atlys-auth.png' alt='Logo' className='mb-12 mx-auto' />
          )}
          <div className='hover:drop-shadow-dark bg-gradient-to-br from-gradientFrom to-gradientTo p-0.5 rounded-xl'>
            <div className='bg-bgPrimary w-[463px] rounded-[10px] px-6 py-10 relative'>
              {isDismissible && (
                <div
                  onClick={onClose}
                  className='rounded-full w-8 h-8 absolute top-4 right-4 bg-bgBody flex justify-center items-center cursor-pointer'
                >
                  <svg width='16' height='16' viewBox='0 0 16 16'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M12.5753 4.30861C12.8194 4.06453 12.8194 3.6688 12.5753 3.42473C12.3312 3.18065 11.9355 3.18065 11.6914 3.42473L8.00003 7.11612L4.30864 3.42473C4.06456 3.18065 3.66884 3.18065 3.42476 3.42473C3.18068 3.6688 3.18068 4.06453 3.42476 4.30861L7.11615 8L3.42476 11.6914C3.18068 11.9355 3.18068 12.3312 3.42476 12.5753C3.66884 12.8194 4.06456 12.8194 4.30864 12.5753L8.00003 8.88389L11.6914 12.5753C11.9355 12.8194 12.3312 12.8194 12.5753 12.5753C12.8194 12.3312 12.8194 11.9355 12.5753 11.6914L8.88392 8L12.5753 4.30861Z'
                      fill='white'
                    />
                  </svg>
                </div>
              )}
              <div className='w-full flex flex-col items-center'>
                <p className='text-textTertiary'>{title}</p>
                <p className='text-xl text-white mt-2 font-semibold'>
                  {subtitle}
                </p>
              </div>
              {emailLabel && (
                <div className='flex flex-col mt-11'>
                  <label htmlFor='email' className='text-textPrimary'>
                    {emailLabel}
                  </label>
                  <input
                    id='email'
                    className='mt-2 rounded-md p-3 bg-bgPrimary border border-borderPrimary text-lg text-white placeholder:text-textSecondary placeholder:font-normal outline-none focus:border-btnPrimary'
                    value={formData.email}
                    onChange={onChange}
                    name='email'
                    type={usernameLabel ? 'email' : 'text'}
                    placeholder={emailPlaceHolder}
                    aria-label={emailLabel}
                    required
                  />
                  {isUserInvalid && (
                    <p className='text-red-500 text-sm'>
                      User not found. Please register!
                    </p>
                  )}
                </div>
              )}
              {usernameLabel && (
                <div className='flex flex-col mt-4'>
                  <label htmlFor='username' className='text-textPrimary'>
                    {usernameLabel}
                  </label>
                  <input
                    id='username'
                    className='mt-2 rounded-md p-3 bg-bgPrimary border border-borderPrimary text-lg text-white placeholder:text-textSecondary placeholder:font-normal outline-none focus:border-btnPrimary'
                    value={formData.username}
                    onChange={onChange}
                    name='username'
                    type='text'
                    placeholder={usernamePlaceHolder}
                    aria-label={usernameLabel}
                    required
                  />
                </div>
              )}
              {passwordLabel && (
                <div className='flex flex-col mt-4 relative'>
                  <div className='flex justify-between'>
                    <label htmlFor='password' className='text-textPrimary'>
                      {passwordLabel}
                    </label>
                    {forgetPasswordLabel && (
                      <p className='text-sm text-textPrimary'>
                        {forgetPasswordLabel}
                      </p>
                    )}
                  </div>
                  <input
                    id='password'
                    className='mt-2 rounded-md p-3 bg-bgPrimary border border-borderPrimary text-lg text-white placeholder:text-textSecondary placeholder:font-normal outline-none focus:border-btnPrimary'
                    value={formData.password}
                    onChange={onChange}
                    name='password'
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder={passwordPlaceHolder}
                    aria-label={passwordLabel}
                    required
                  />
                  {isPasswordIncorrect && (
                    <p className='text-red-500 text-sm'>Incorrect password</p>
                  )}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='size-5 text-textSecondary absolute right-3 top-10 cursor-pointer'
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? (
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88'
                      />
                    ) : (
                      <>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                        />
                      </>
                    )}
                  </svg>
                </div>
              )}
              <button
                className='mt-5 rounded-md py-3 bg-btnPrimary w-full text-white text-lg hover:bg-btnPrimaryDark focus:bg-btnPrimaryDark'
                type='submit'
              >
                {buttonText}
              </button>
              {(additionalText || additionalCta) && (
                <p className='mt-3 text-textSecondary'>
                  {additionalText}
                  {additionalCta && (
                    <span
                      className='text-textPrimary ml-1 cursor-pointer'
                      onClick={() =>
                        additionalCtaAction && additionalCtaAction()
                      }
                    >
                      {additionalCta}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={3}
                        stroke='currentColor'
                        className='size-3 inline ml-1'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                        />
                      </svg>
                    </span>
                  )}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
