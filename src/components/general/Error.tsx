const Error: React.FC = () => {
  return (
    <main className='grid min-h-screen place-items-center bg-bgPrimary px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='font-semibold text-textPrimary'>Oops!</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-textSecondary sm:text-5xl'>
          Something went wrong
        </h1>
        <p className='mt-6 text-textTertiary leading-7 text-gray-600'>
          Please try reloading the page.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <button
            onClick={() => window.location.reload()}
            className='rounded-md bg-btnPrimary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-btnPrimary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Reload
          </button>
        </div>
      </div>
    </main>
  );
};

export default Error;
