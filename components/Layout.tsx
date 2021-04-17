import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const motherPath: string = `/mother/${getThisMonth()}`;
  const fatherPath: string = `/father/${getThisMonth()}`;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |{' '}
          <Link href={motherPath}>
            <a>Mother</a>
          </Link>{' '}
          |{' '}
          <Link href={fatherPath}>
            <a>Father</a>
          </Link>{' '}
          |{' '}
          <Link href="/account-book">
            <a>Account book</a>
          </Link>{' '}
          | <a href="/api/users">Users API</a>
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};

const getThisMonth = (): string => {
  const today = new Date();
  const fatherPath = `10${today.getMonth() + 1}`;
  return fatherPath;
};

export default Layout;
