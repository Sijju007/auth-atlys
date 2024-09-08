import React from 'react';

type HeaderProps = {
  username?: string;
};

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <div className='mt-20 mb-9'>
      <h1 className='text-textPrimary'>Hello {username}</h1>
      <p className='text-subtitle text-textSecondary max-w-xl mt-3'>
        How are you doing today? Would you like to share something with the
        community 🤗
      </p>
    </div>
  );
};

export default Header;
