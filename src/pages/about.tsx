import type { NextPage } from 'next';
import NextLink from 'next/link';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>about</title>
        <meta name="description" content="about" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>about</h1>
        <p>
          <NextLink href={{ pathname: '/' }} passHref>
            home
          </NextLink>
        </p>
      </main>
    </>
  );
};

export default About;
