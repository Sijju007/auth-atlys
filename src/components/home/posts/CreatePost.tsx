import { MouseEventHandler } from 'react';

type CreatePostProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
};

const CreatePost: React.FC<CreatePostProps> = ({ onClick = () => {} }) => {
  return (
    <div
      onClick={onClick}
      className='bg-bgPrimary border border-borderPrimary px-5 py-6 rounded-xl flex flex-col mb-3'
    >
      <p className='text-textPrimary text-xl'>Create post</p>
      <div className='bg-bgSecondary rounded-lg mt-4 p-4 flex'>
        <div className='w-12 h-12 rounded-full bg-bgPrimary flex items-center justify-center text-xl'>
          💬
        </div>
        <input
          id='create-post'
          className='ml-4 flex-1 bg-bgSecondary text-lg placeholder:text-textSecondary outline-none'
          placeholder='How are you feeling today?'
        />
      </div>
      <button
        className='mt-4 rounded px-10 py-3 bg-btnPrimary text-white text-lg self-end hover:bg-btnPrimaryDark focus:bg-btnPrimaryDark'
        type='submit'
      >
        Post
      </button>
    </div>
  );
};

export default CreatePost;
