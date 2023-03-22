import Head from 'next/head';

console.log('Hello!');

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <h1 className='text-3xl font-bold uppercase text-blue-600'>
        Welcome to <a href='https://nextjs.org'>Next.js!</a>
      </h1>
    </div>
  );
}
