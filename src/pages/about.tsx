import type { NextPage } from 'next';
import NextLink from 'next/link';
import Head from 'next/head';
import { useLanguageQuery } from 'next-export-i18n';
import { LangSwitcher } from '../components/LangSwitcher';

const About: NextPage = () => {
  const [query] = useLanguageQuery();

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
          <NextLink href={{ pathname: '/', query: query }} passHref>
            home
          </NextLink>
        </p>
        <LangSwitcher />
      </main>
    </>
  );
};

export default About;
