import Link from 'next/link';

function Custom404() {
  return (
    <div className='text-center pt-5 pb-5 vh-75'>
      <h1>Oooops...</h1>
      <h2 className='mt-5 mb-5'>That page cannot be found</h2>
      <p>
        Go back to the{' '}
        <Link href='/'>
          <a className='text-decoration-none text-secondary'>Homepage</a>
        </Link>
      </p>
    </div>
  );
}

export default Custom404;
