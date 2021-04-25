import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { wrapper } from '../redux/store';

import '../styles/reset.scss';
import '../styles/global.scss';
import '../styles/pagenation.scss';
import { Layout } from '../components/Layout';

function App({ Component, pageProps }: AppProps): React.ReactElement {
  const router = useRouter();

  const handleRouteChange = () => {
    const main = document.getElementById('main');
    main?.focus();
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <div id="overlay" />
    </>
  );
}

export default wrapper.withRedux(App);
