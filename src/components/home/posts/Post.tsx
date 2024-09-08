import { PostProps } from './types';

const Post: React.FC<PostProps> = ({
  emoji,
  username,
  userProfileImage,
  post,
  totalComments,
  createdAt,
  isEdited,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className='bg-bgPrimary border border-borderPrimary px-5 py-6 mb-3 rounded-xl flex flex-col'
    >
      <div className='flex justify-between'>
        <div className='flex'>
          <img
            src={userProfileImage}
            alt={`${username}`}
            className='min-w-12 max-h-12 object-cover rounded-full'
          />
          <div className='ml-4'>
            <p className='text-textPrimary text-lg'>{username}</p>
            <p className='text-textSecondary mt-1'>
              {createdAt}
              {isEdited ? ' • Edited' : null}
            </p>
          </div>
        </div>
        <svg
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6 text-textPrimary'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
          />
        </svg>
      </div>

      <div className='bg-bgSecondary rounded-lg mt-4 p-4 flex'>
        <div className='min-w-12 max-h-12 rounded-full bg-bgPrimary flex items-center justify-center text-xl'>
          {emoji}
        </div>
        <p className='ml-4 text-textSecondary text-lg'>{post}</p>
      </div>
      <p className='text-textSecondary mt-3 flex'>
        <svg
          width='20'
          height='18'
          viewBox='0 0 20 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='mr-2'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M17.3333 1.83333L2.66662 1.83336C1.8382 1.83336 1.16663 2.50493 1.16663 3.33336V11.3334C1.16663 12.1618 1.8382 12.8334 2.66662 12.8334H10C10.1326 12.8334 10.2598 12.886 10.3536 12.9798L13.5 16.1262V13.3334C13.5 13.0572 13.7238 12.8334 14 12.8334H17.3333C18.1617 12.8334 18.8333 12.1618 18.8333 11.3334V3.33333C18.8333 2.5049 18.1617 1.83333 17.3333 1.83333ZM2.66662 0.83336L17.3333 0.833328C18.714 0.833325 19.8333 1.95262 19.8333 3.33333V11.3334C19.8333 12.7141 18.714 13.8334 17.3333 13.8334H14.5V17.3333C14.5 17.5356 14.3781 17.7179 14.1913 17.7953C14.0045 17.8727 13.7894 17.8299 13.6464 17.6869L9.79289 13.8334H2.66662C1.28591 13.8334 0.166626 12.7141 0.166626 11.3334V3.33336C0.166626 1.95265 1.28591 0.833363 2.66662 0.83336Z'
            fill='#C5C7CA'
          />
        </svg>
        {totalComments} comments
      </p>
    </div>
  );
};

export default Post;
